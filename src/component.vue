<script>
import Bus from './bus';

export default {
    name: 'vuedals',

    created() {
        // Create a new Vuedal instance
        Bus.$on('new', options => {
            const defaults = {
                title: null,
                dismisable: true,
                name: '',
                size: '',
                onClose() {},
                onDismiss() {}
            };

            options = Object.assign(defaults, options);

            this.vuedals.push(options);

            // Let know everyone else that a new Vuedal is open
            Bus.$emit('opened', {
                index: this.vuedals.length - 1,
                options
            });
        });

        // When a close event is receive, close the Vuedal instance
        Bus.$on('close', data => this.close(data));

        Bus.$on('dismiss', _ => this.dismiss());
    },

    data() {
        return {
            // Storage for all the vuedal's instances
            vuedals: []
        };
    },

    methods: {
        // Remove the given index from the vuedals array
        splice(index) {
            // And if it was the last window, also notify that all instances are destroyed
            if (index === 0)
                Bus.$emit('destroyed');

            if (!index) {
                this.vuedals.pop();
                return;
            }

            if (index === -1)
                return;

            this.vuedals.splice(index, 1);
        },

        // Close the modal and pass any given data
        close(data = null) {
            // Close the most recent Vuedal instance
            const index = this.vuedals.length - 1;

            // Notify the app about this window being closed
            Bus.$emit('closed', {
                index,
                instance: this.vuedals[index],
                data
            });

            // Dismiss callback
            this.vuedals[index].onClose(data);

            this.splice(index);
        },

        // Dismiss the active modal
        dismiss() {
            // Close the most recent Vuedal instance
            const index = this.vuedals.length - 1;

            // Notify the app about this window being closed
            Bus.$emit('dismissed', {
                index,
                instance: this.vuedals[index]
            });

            // Dismiss callback
            this.vuedals[index].onDismiss();

            this.splice(index);
        },

        // Get css classes
        getCssClasses(index) {
            const vuedal = this.vuedals[index];

            let classNames = vuedal.name +' '+ vuedal.size;

            if (index < this.$last)
                classNames += ' disabled';

            return classNames;
        }
    },

    computed: {
        // Get the last element of the Vuedals array (the most recent Vuedal instance)
        $last() {
            return this.vuedals.length - 1;
        }
    }
}
</script>

<template>
<transition tag="div" name="vuedal">
    <div class="reveal-overlay vuedals" v-show="vuedals.length">
        <div class="reveal content-box vuedal" v-for="(vuedal, index) in vuedals" :key="vuedal" :class="getCssClasses(index)">
            <button @click.prevent="dismiss()" v-if="vuedal.dismisable" class="close-button">&times;</button>
            <header class="content-box__header" v-if="vuedal.title">
                <h1 class="content-box__title">{{ vuedal.title }}</h1>
            </header>

            <component :is="vuedal.component" :props="vuedal.props"></component>
        </div>
    </div>
</transition>
</template>

<style lang="css">
    .vuedal.disabled {
        display: none;
    }
</style>