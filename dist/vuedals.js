/*!
 *  Vuedals plugin v1.2.0
 * 
 *  Multiple event based modal windows, with a single component
 * 
 *  This is a plugin to open any number of modal windows without having to attach them to the DOM
 *  @author Javis Perez <javisperez@gmail.com>
 *  https://github.com/javisperez/vuedals
 *  Released under the MIT License.
 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("Vuedals",[],factory):"object"==typeof exports?exports.Vuedals=factory():root.Vuedals=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=exports.Bus=void 0;var _bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus),_component=__webpack_require__(22),_component2=_interopRequireDefault(_component);exports.default={install:function(Vue){Vue.prototype.$vuedals=new Vue({name:"$vuedals",created:function(){var _this=this;_bus2.default.$on("opened",function(data){_this.$emit("vuedals:opened",data)}),_bus2.default.$on("closed",function(data){_this.$emit("vuedals:closed",data)}),_bus2.default.$on("destroyed",function(data){_this.$emit("vuedals:destroyed",data)}),this.$on("new",function(options){_this.open(options)}),this.$on("close",function(data){_this.close(data)})},methods:{open:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("new",options)},close:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;_bus2.default.$emit("close",data)}}}),Vue.mixin({created:function(){this.$on("vuedals:new",function(options){_bus2.default.$emit("new",options)}),this.$on("vuedals:close",function(data){_bus2.default.$emit("close",data)})}})}},exports.Bus=_bus2.default,exports.Component=_component2.default},/* 1 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _classCallCheck2=__webpack_require__(2),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(3),_createClass3=_interopRequireDefault(_createClass2),instance=null,EventBus=function(){function EventBus(){return(0,_classCallCheck3.default)(this,EventBus),instance||(this.events={},instance=this),instance}return(0,_createClass3.default)(EventBus,[{key:"$emit",value:function(event,message){if(this.events[event])for(var callbacks=this.events[event],i=0,l=callbacks.length;i<l;i++){var callback=callbacks[i];callback.call(this,message)}}},{key:"$on",value:function(event,callback){this.events[event]||(this.events[event]=[]),this.events[event].push(callback)}}]),EventBus}();exports.default=new EventBus},/* 2 */
/***/
function(module,exports){"use strict";exports.__esModule=!0,exports.default=function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}},/* 3 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.__esModule=!0;var _defineProperty=__webpack_require__(4),_defineProperty2=_interopRequireDefault(_defineProperty);exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),(0,_defineProperty2.default)(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}()},/* 4 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(5),__esModule:!0}},/* 5 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(6);var $Object=__webpack_require__(9).Object;module.exports=function(it,key,desc){return $Object.defineProperty(it,key,desc)}},/* 6 */
/***/
function(module,exports,__webpack_require__){var $export=__webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(17),"Object",{defineProperty:__webpack_require__(13).f})},/* 7 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(8),core=__webpack_require__(9),ctx=__webpack_require__(10),hide=__webpack_require__(12),PROTOTYPE="prototype",$export=function(type,name,source){var key,own,out,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,IS_WRAP=type&$export.W,exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE],target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];IS_GLOBAL&&(source=name);for(key in source)
// contains in native
own=!IS_FORCED&&target&&void 0!==target[key],own&&key in exports||(
// export native or passed
out=own?target[key]:source[key],
// prevent global pollution for namespaces
exports[key]=IS_GLOBAL&&"function"!=typeof target[key]?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C;case 1:return new C(a);case 2:return new C(a,b)}return new C(a,b,c)}return C.apply(this,arguments)};return F[PROTOTYPE]=C[PROTOTYPE],F}(out):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
IS_PROTO&&((exports.virtual||(exports.virtual={}))[key]=out,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
type&$export.R&&expProto&&!expProto[key]&&hide(expProto,key,out)))};
// type bitmap
$export.F=1,// forced
$export.G=2,// global
$export.S=4,// static
$export.P=8,// proto
$export.B=16,// bind
$export.W=32,// wrap
$export.U=64,// safe
$export.R=128,// real proto method for `library` 
module.exports=$export},/* 8 */
/***/
function(module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},/* 9 */
/***/
function(module,exports){var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core)},/* 10 */
/***/
function(module,exports,__webpack_require__){
// optional / simple context binding
var aFunction=__webpack_require__(11);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},/* 11 */
/***/
function(module,exports){module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},/* 12 */
/***/
function(module,exports,__webpack_require__){var dP=__webpack_require__(13),createDesc=__webpack_require__(21);module.exports=__webpack_require__(17)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},/* 13 */
/***/
function(module,exports,__webpack_require__){var anObject=__webpack_require__(14),IE8_DOM_DEFINE=__webpack_require__(16),toPrimitive=__webpack_require__(20),dP=Object.defineProperty;exports.f=__webpack_require__(17)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},/* 14 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(15);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},/* 15 */
/***/
function(module,exports){module.exports=function(it){return"object"==typeof it?null!==it:"function"==typeof it}},/* 16 */
/***/
function(module,exports,__webpack_require__){module.exports=!__webpack_require__(17)&&!__webpack_require__(18)(function(){return 7!=Object.defineProperty(__webpack_require__(19)("div"),"a",{get:function(){return 7}}).a})},/* 17 */
/***/
function(module,exports,__webpack_require__){
// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 18 */
/***/
function(module,exports){module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},/* 19 */
/***/
function(module,exports,__webpack_require__){var isObject=__webpack_require__(15),document=__webpack_require__(8).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},/* 20 */
/***/
function(module,exports,__webpack_require__){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(15);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},/* 21 */
/***/
function(module,exports){module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},/* 22 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(23);var Component=__webpack_require__(28)(/* script */
__webpack_require__(29),/* template */
__webpack_require__(52),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 23 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(24);"string"==typeof content&&(content=[[module.id,content,""]]),content.locals&&(module.exports=content.locals);
// add the styles to the DOM
__webpack_require__(26)("62e9ce58",content,!0)},/* 24 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(25)(),
// imports
// module
exports.push([module.id,".vuedal.disabled{display:none}",""])},/* 25 */
/***/
function(module,exports){/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
// css base code, injected by the css-loader
module.exports=function(){var list=[];
// return the list of modules as css string
// import a list of modules into the list
return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 26 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction)
// has SSR styles and in production mode.
// simply do nothing.
return noop;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement)}if(isOldIE){
// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else
// use multi-style-tag mode in all other cases
styleElement=createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
var hasDocument="undefined"!=typeof document,listToStyles=__webpack_require__(27),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 27 */
/***/
function(module,exports){/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},/* 28 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 29 */
/***/
function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _assign=__webpack_require__(30),_assign2=_interopRequireDefault(_assign),_bus=__webpack_require__(1),_bus2=_interopRequireDefault(_bus);exports.default={name:"vuedals",created:function(){var _this=this;_bus2.default.$on("new",function(options){var defaults={title:null,dismisable:!0,name:"",size:"",onClose:function(){},onDismiss:function(){}};options=(0,_assign2.default)(defaults,options),_this.vuedals.push(options),_bus2.default.$emit("opened",{index:_this.vuedals.length-1,options:options})}),_bus2.default.$on("close",function(data){return _this.close(data)}),_bus2.default.$on("dismiss",function(_){return _this.dismiss()})},data:function(){return{vuedals:[]}},methods:{splice:function(index){return 0===index&&_bus2.default.$emit("destroyed"),index?void(index!==-1&&this.vuedals.splice(index,1)):void this.vuedals.pop()},close:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,index=this.vuedals.length-1;_bus2.default.$emit("closed",{index:index,instance:this.vuedals[index],data:data}),this.vuedals[index].onClose(data),this.splice(index)},dismiss:function(){var index=this.vuedals.length-1;_bus2.default.$emit("dismissed",{index:index,instance:this.vuedals[index]}),this.vuedals[index].onDismiss(),this.splice(index)},getCssClasses:function(index){var vuedal=this.vuedals[index],classNames=vuedal.name+" "+vuedal.size;return index<this.$last&&(classNames+=" disabled"),classNames}},computed:{$last:function(){return this.vuedals.length-1}}}},/* 30 */
/***/
function(module,exports,__webpack_require__){module.exports={default:__webpack_require__(31),__esModule:!0}},/* 31 */
/***/
function(module,exports,__webpack_require__){__webpack_require__(32),module.exports=__webpack_require__(9).Object.assign},/* 32 */
/***/
function(module,exports,__webpack_require__){
// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(7);$export($export.S+$export.F,"Object",{assign:__webpack_require__(33)})},/* 33 */
/***/
function(module,exports,__webpack_require__){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(34),gOPS=__webpack_require__(49),pIE=__webpack_require__(50),toObject=__webpack_require__(51),IObject=__webpack_require__(38),$assign=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(18)(function(){var A={},B={},S=Symbol(),K="abcdefghijklmnopqrst";return A[S]=7,K.split("").forEach(function(k){B[k]=k}),7!=$assign({},A)[S]||Object.keys($assign({},B)).join("")!=K})?function(target,source){for(// eslint-disable-line no-unused-vars
var T=toObject(target),aLen=arguments.length,index=1,getSymbols=gOPS.f,isEnum=pIE.f;aLen>index;)for(var key,S=IObject(arguments[index++]),keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S),length=keys.length,j=0;length>j;)isEnum.call(S,key=keys[j++])&&(T[key]=S[key]);return T}:$assign},/* 34 */
/***/
function(module,exports,__webpack_require__){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(35),enumBugKeys=__webpack_require__(48);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},/* 35 */
/***/
function(module,exports,__webpack_require__){var has=__webpack_require__(36),toIObject=__webpack_require__(37),arrayIndexOf=__webpack_require__(41)(!1),IE_PROTO=__webpack_require__(45)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);
// Don't enum bug & hidden keys
for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},/* 36 */
/***/
function(module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},/* 37 */
/***/
function(module,exports,__webpack_require__){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(38),defined=__webpack_require__(40);module.exports=function(it){return IObject(defined(it))}},/* 38 */
/***/
function(module,exports,__webpack_require__){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(39);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},/* 39 */
/***/
function(module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},/* 40 */
/***/
function(module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},/* 41 */
/***/
function(module,exports,__webpack_require__){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(37),toLength=__webpack_require__(42),toIndex=__webpack_require__(44);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length);
// Array#includes uses SameValueZero equality algorithm
if(IS_INCLUDES&&el!=el){for(;length>index;)if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},/* 42 */
/***/
function(module,exports,__webpack_require__){
// 7.1.15 ToLength
var toInteger=__webpack_require__(43),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},/* 43 */
/***/
function(module,exports){
// 7.1.4 ToInteger
var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},/* 44 */
/***/
function(module,exports,__webpack_require__){var toInteger=__webpack_require__(43),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},/* 45 */
/***/
function(module,exports,__webpack_require__){var shared=__webpack_require__(46)("keys"),uid=__webpack_require__(47);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},/* 46 */
/***/
function(module,exports,__webpack_require__){var global=__webpack_require__(8),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},/* 47 */
/***/
function(module,exports){var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},/* 48 */
/***/
function(module,exports){
// IE 8- don't enum bug keys
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 49 */
/***/
function(module,exports){exports.f=Object.getOwnPropertySymbols},/* 50 */
/***/
function(module,exports){exports.f={}.propertyIsEnumerable},/* 51 */
/***/
function(module,exports,__webpack_require__){
// 7.1.13 ToObject(argument)
var defined=__webpack_require__(40);module.exports=function(it){return Object(defined(it))}},/* 52 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("transition",{attrs:{tag:"div",name:"vuedal"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.vuedals.length,expression:"vuedals.length"}],staticClass:"reveal-overlay vuedals"},_vm._l(_vm.vuedals,function(vuedal,index){return _c("div",{key:vuedal,staticClass:"reveal content-box vuedal",class:_vm.getCssClasses(index)},[vuedal.dismisable?_c("button",{staticClass:"close-button",on:{click:function($event){$event.preventDefault(),_vm.dismiss()}}},[_vm._v("×")]):_vm._e(),_vm._v(" "),vuedal.title?_c("header",{staticClass:"content-box__header"},[_c("h1",{staticClass:"content-box__title"},[_vm._v(_vm._s(vuedal.title))])]):_vm._e(),_vm._v(" "),_c(vuedal.component,{tag:"component",attrs:{props:vuedal.props}})],1)}))])},staticRenderFns:[]}}])});