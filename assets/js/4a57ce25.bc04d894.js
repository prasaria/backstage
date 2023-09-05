/*! For license information please see 4a57ce25.bc04d894.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[159129],{154339:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(824246),o=n(511151);const a={id:"core-app-api.appoptions",title:"AppOptions",description:"API reference for AppOptions"},c=void 0,i={unversionedId:"reference/core-app-api.appoptions",id:"reference/core-app-api.appoptions",title:"AppOptions",description:"API reference for AppOptions",source:"@site/../docs/reference/core-app-api.appoptions.md",sourceDirName:"reference",slug:"/reference/core-app-api.appoptions",permalink:"/docs/reference/core-app-api.appoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.appoptions.md",tags:[],version:"current",frontMatter:{id:"core-app-api.appoptions",title:"AppOptions",description:"API reference for AppOptions"}},p={},s=[];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appoptions",children:(0,t.jsx)(r.code,{children:"AppOptions"})})]}),"\n",(0,t.jsxs)(r.p,{children:["The options accepted by ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type AppOptions = {\n    apis?: Iterable<AnyApiFactory>;\n    defaultApis?: Iterable<AnyApiFactory>;\n    icons: AppIcons & {\n        [key in string]: IconComponent;\n    };\n    plugins?: Array<BackstagePlugin & {\n        output?(): Array<{\n            type: 'feature-flag';\n            name: string;\n        } | {\n            type: string;\n        }>;\n    }>;\n    featureFlags?: (FeatureFlag & Omit<FeatureFlag, 'pluginId'>)[];\n    components: AppComponents;\n    themes: (Partial<AppTheme> & Omit<AppTheme, 'theme'>)[];\n    configLoader?: AppConfigLoader;\n    bindRoutes?(context: {\n        bind: AppRouteBinder;\n    }): void;\n    __experimentalI18n?: {\n        supportedLanguages: string[];\n        fallbackLanguage?: string | string[];\n        messages?: Array<{\n            ref: TranslationRef;\n            messages?: TranslationMessages<TranslationRef>;\n            lazyMessages: Record<string, () => Promise<{\n                messages: TranslationMessages<TranslationRef>;\n            }>>;\n        }>;\n    };\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.anyapifactory",children:"AnyApiFactory"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appicons",children:"AppIcons"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.iconcomponent",children:"IconComponent"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageplugin",children:"BackstagePlugin"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.featureflag",children:"FeatureFlag"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apptheme",children:"AppTheme"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appconfigloader",children:"AppConfigLoader"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.approutebinder",children:"AppRouteBinder"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),p=1;p<arguments.length;p++){for(var s in a=Object(arguments[p]))n.call(a,s)&&(i[s]=a[s]);if(r){c=r(a);for(var u=0;u<c.length;u++)t.call(a,c[u])&&(i[c[u]]=a[c[u]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,a={},s=null,u=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,t)&&!p.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:c.current}}r.jsx=s,r.jsxs=s},541535:(e,r,n)=>{var t=n(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,p=60112;r.Suspense=60113;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),i=f("react.context"),p=f("react.forward_ref"),r.Suspense=f("react.suspense"),s=f("react.memo"),u=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}function m(){}function v(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var b=v.prototype=new m;b.constructor=v,t(b,g.prototype),b.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var t,a={},c=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,t)&&!O.hasOwnProperty(t)&&(a[t]=r[t]);var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){for(var s=Array(p),u=0;u<p;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(t in p=e.defaultProps)void 0===a[t]&&(a[t]=p[t]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:_.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,n,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case o:case a:p=!0}}if(p)return c=c(p=e),e=""===t?"."+w(p,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),C(c,r,n,"",(function(e){return e}))):null!=c&&(A(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||p&&p.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),r.push(c)),1;if(p=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=t+w(i=e[s],s);p+=C(i,r,n,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(i=e.next()).done;)p+=C(i=i.value,r,n,u=t+w(i,s++),c);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return p}function S(e,r,n){if(null==e)return e;var t=[],o=0;return C(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function R(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function E(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var a=t({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,p=_.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in r)j.call(r,u)&&!O.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==s?s[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];a.children=s}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:p}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=A,r.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return E().useCallback(e,r)},r.useContext=function(e,r){return E().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return E().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return E().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return E().useLayoutEffect(e,r)},r.useMemo=function(e,r){return E().useMemo(e,r)},r.useReducer=function(e,r,n){return E().useReducer(e,r,n)},r.useRef=function(e){return E().useRef(e)},r.useState=function(e){return E().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>a});var t=n(667294);const o=t.createContext({});function a(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:a(e),t.createElement(o.Provider,{value:i},r)}}}]);