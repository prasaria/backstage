/*! For license information please see 5b2c45c4.d0844e59.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[219440],{766109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(824246),i=n(511151);const o={id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},s=void 0,a={unversionedId:"integrations/github/github-apps",id:"integrations/github/github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication",source:"@site/../docs/integrations/github/github-apps.md",sourceDirName:"integrations/github",slug:"/integrations/github/github-apps",permalink:"/docs/integrations/github/github-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/github-apps.md",tags:[],version:"current",frontMatter:{id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/github/org"},next:{title:"Locations",permalink:"/docs/integrations/gitlab/locations"}},c={},l=[{value:"Caveats",id:"caveats",level:2},{value:"Using the CLI (public GitHub only)",id:"using-the-cli-public-github-only",level:3},{value:"GitHub Enterprise",id:"github-enterprise",level:3},{value:"Including in Integrations Config",id:"including-in-integrations-config",level:3},{value:"Limiting the GitHub App installations",id:"limiting-the-github-app-installations",level:3},{value:"App permissions",id:"app-permissions",level:3}];function u(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backstage can be configured to use GitHub Apps for backend authentication. This\ncomes with advantages such as higher rate limits and that Backstage can act as\nan application instead of a user or bot account."}),"\n",(0,r.jsx)(t.p,{children:"It also provides a much clearer and better authorization model as a opposed to\nthe OAuth apps and their respective scopes."}),"\n",(0,r.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This authentication method is built for authenticating towards\norganization repositories and not towards personal repositories."}),"\n",(0,r.jsx)(t.li,{children:"It's not possible to have multiple Backstage GitHub Apps installed in the same\nGitHub organization, to be handled by Backstage. We currently don't check\nthrough all the registered GitHub Apps to see which ones are installed for a\nparticular repository. We only respect global Organization installs right now."}),"\n",(0,r.jsxs)(t.li,{children:["App permissions is not managed by Backstage. They're created with some simple\ndefault permissions which you are free to change as you need, but you will\nneed to update them in the GitHub web console, not in Backstage right now. The\npermissions that are defaulted are ",(0,r.jsx)(t.code,{children:"metadata:read"})," and ",(0,r.jsx)(t.code,{children:"contents:read"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"The created GitHub App is private by default, this is most likely what you\nwant for github.com but it's recommended to make your application public for\nGitHub Enterprise in order to share application across your GHE organizations."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"A GitHub app created with the cli will have read\naccess by default. You have to manually update the GitHub App settings in GitHub\nto grant the app more permissions if needed."}),"\n",(0,r.jsx)(t.h3,{id:"using-the-cli-public-github-only",children:"Using the CLI (public GitHub only)"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.code,{children:"backstage-cli"})," to create a GitHub App using a manifest file\nthat we provide. This gives us a way to automate some of the work required to\ncreate a GitHub app."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"yarn backstage-cli create-github-app <github org>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can read more about the\n",(0,r.jsx)(t.a,{href:"/docs/local-dev/cli-commands#create-github-app",children:(0,r.jsx)(t.code,{children:"backstage-cli create-github-app"})})," command."]}),"\n",(0,r.jsxs)(t.p,{children:["Once you've gone through the CLI command, it should produce a YAML file in the\nroot of the project which you can then use as an ",(0,r.jsx)(t.code,{children:"include"})," in your\n",(0,r.jsx)(t.code,{children:"app-config.yaml"}),". You can go ahead and\n",(0,r.jsx)(t.a,{href:"#including-in-integrations-config",children:"skip ahead"})," if you've already got an app."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that the created app will have a webhook that is disabled by default and\npoints to ",(0,r.jsx)(t.code,{children:"smee.io"}),", which is intended for local development. There's also\ncurrently no part of Backstage that makes use of the webhook."]}),"\n",(0,r.jsx)(t.h3,{id:"github-enterprise",children:"GitHub Enterprise"}),"\n",(0,r.jsxs)(t.p,{children:["You have to create the GitHub Application manually using these\n",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-a-github-app",children:"instructions"}),"\nas GitHub Enterprise does not support creation of apps from manifests."]}),"\n",(0,r.jsx)(t.p,{children:"Once the application is created you have to generate a private key for the\napplication and place it in a YAML file."}),"\n",(0,r.jsxs)(t.p,{children:["The YAML file must include the following information. Please note that the\nindentation for the ",(0,r.jsx)(t.code,{children:"privateKey"})," is required."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"appId: app id\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,r.jsx)(t.h3,{id:"including-in-integrations-config",children:"Including in Integrations Config"}),"\n",(0,r.jsxs)(t.p,{children:["Once the credentials are stored in a YAML file generated by ",(0,r.jsx)(t.code,{children:"create-github-app"}),",\nor manually by following the ",(0,r.jsx)(t.a,{href:"#github-enterprise",children:"GitHub Enterprise"}),"\ninstructions, they can be included in the ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," under the\n",(0,r.jsx)(t.code,{children:"integrations"})," section."]}),"\n",(0,r.jsx)(t.p,{children:"Please note that the credentials file is highly sensitive and should NOT be\nchecked into any kind of version control. Instead use your preferred secure\nmethod of distributing secrets."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      apps:\n        - $include: example-backstage-app-credentials.yaml\n"})}),"\n",(0,r.jsx)(t.h3,{id:"limiting-the-github-app-installations",children:"Limiting the GitHub App installations"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to limit the GitHub app installations visible to backstage you may\noptionally include the ",(0,r.jsx)(t.code,{children:"allowedInstallationOwners"})," option. If you configure\nmultiple apps, specifying this will bring some small performance benefits\nas backstage can more easily select which app to use for a URL."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"appId: app id\nallowedInstallationOwners: ['GlobexCorp']\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,r.jsx)(t.p,{children:"This will result in backstage preventing the use of any installation that is not\nwithin the allow list."}),"\n",(0,r.jsx)(t.h3,{id:"app-permissions",children:"App permissions"}),"\n",(0,r.jsx)(t.p,{children:"When creating a GitHub App, you must select permissions to define the level of\naccess for the app. The permissions required vary depending on your use of the\nintegration:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Reading software components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Contents"}),": ",(0,r.jsx)(t.code,{children:"Read-only"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Reading organization data:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Members"}),": ",(0,r.jsx)(t.code,{children:"Read-only"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Publishing software templates:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Administration"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})," (for creating repositories)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Contents"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Metadata"}),": ",(0,r.jsx)(t.code,{children:"Read-only"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Pull requests"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Issues"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Workflows"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub workflows)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Commit statuses"}),": ",(0,r.jsx)(t.code,{children:"Read-only"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Variables"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub Action Repository Variables)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Secrets"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub Action Repository Secrets)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Environments"}),": ",(0,r.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub Environments)"]}),"\n"]}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in o=Object(arguments[c]))n.call(o,l)&&(a[l]=o[l]);if(t){s=t(o);for(var u=0;u<s.length;u++)r.call(o,s[u])&&(a[s[u]]=o[s[u]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),t.Fragment=o("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:u,props:o,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),i=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),o=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var j=m.prototype=new y;j.constructor=m,r(j,b.prototype),j.isPureReactComponent=!0;var x={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:s,ref:a,props:o,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var A=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case o:c=!0}}if(c)return s=s(c=e),e=""===r?"."+E(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),R(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(A,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+E(a=e[l],l);c+=R(a,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=R(a=a.value,t,n,u=r+E(a,l++),s);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function G(){var e=S.current;if(null===e)throw Error(h(321));return e}var I={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=b,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)v.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:s,ref:a,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return G().useCallback(e,t)},t.useContext=function(e,t){return G().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return G().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return G().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return G().useLayoutEffect(e,t)},t.useMemo=function(e,t){return G().useMemo(e,t)},t.useReducer=function(e,t,n){return G().useReducer(e,t,n)},t.useRef=function(e){return G().useRef(e)},t.useState=function(e){return G().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(i.Provider,{value:a},t)}}}]);