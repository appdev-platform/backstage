/*! For license information please see 5b10bb72.eda283cf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[327419],{88142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(824246),o=n(511151);const a={id:"create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin"},u=void 0,i={id:"plugins/create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin",source:"@site/../docs/plugins/create-a-plugin.md",sourceDirName:"plugins",slug:"/plugins/create-a-plugin",permalink:"/docs/plugins/create-a-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/create-a-plugin.md",tags:[],version:"current",frontMatter:{id:"create-a-plugin",title:"Create a Backstage Plugin",description:"Documentation on How to Create a Backstage Plugin"},sidebar:"docs",previous:{title:"Existing plugins",permalink:"/docs/plugins/existing-plugins"},next:{title:"Plugin Development",permalink:"/docs/plugins/plugin-development"}},c={},s=[{value:"Create a Plugin",id:"create-a-plugin",level:2},{value:"Other Plugin Library Package Types",id:"other-plugin-library-package-types",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"A Backstage Plugin adds functionality to Backstage."}),"\n",(0,r.jsx)(t.h2,{id:"create-a-plugin",children:"Create a Plugin"}),"\n",(0,r.jsxs)(t.p,{children:["To create a new frontend plugin, make sure you've run ",(0,r.jsx)(t.code,{children:"yarn install"})," and installed\ndependencies, then run the following on your command line (a shortcut to\ninvoking the\n",(0,r.jsx)(t.a,{href:"/docs/local-dev/cli-commands#new",children:(0,r.jsx)(t.code,{children:"backstage-cli new --select plugin"})}),")\nfrom the root of your project."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn new --select plugin\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Example of output when creating a new plugin",src:n(160483).Z+"",width:"454",height:"530"})}),"\n",(0,r.jsx)(t.p,{children:"This will create a new Backstage Plugin based on the ID that was provided. It\nwill be built and added to the Backstage App automatically."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["If the Backstage App is already running (with ",(0,r.jsx)(t.code,{children:"yarn start"})," or ",(0,r.jsx)(t.code,{children:"yarn dev"}),") you\nshould be able to see the default page for your new plugin directly by\nnavigating to ",(0,r.jsx)(t.code,{children:"http://localhost:3000/my-plugin"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Example of new plugin running in browser",src:n(954565).Z+"",width:"1552",height:"989"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also serve the plugin in isolation by running ",(0,r.jsx)(t.code,{children:"yarn start"})," in the plugin\ndirectory. Or by using the yarn workspace command, for example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn workspace @backstage/plugin-my-plugin start # Also supports --check\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This method of serving the plugin provides quicker iteration speed and a faster\nstartup and hot reloads. It is only meant for local development, and the setup\nfor it can be found inside the plugin's ",(0,r.jsx)(t.code,{children:"dev/"})," directory."]}),"\n",(0,r.jsx)(t.h3,{id:"other-plugin-library-package-types",children:"Other Plugin Library Package Types"}),"\n",(0,r.jsxs)(t.p,{children:["There are other plugin library package types that you can chose from. To be able to\nselect the type when you create a new plugin just run: ",(0,r.jsx)(t.code,{children:"yarn new"}),". You'll then be asked\nwhat type of plugin you wish to create like this:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"List of available plugin types to pick from",src:n(410670).Z+"",width:"1032",height:"373"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},160483:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-plugin_output-9d6c4192d058ed85c75109a4d907eae6.png"},410670:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-plugin_types-2c8d6c727852165df842b66829998386.png"},954565:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/my-plugin_screenshot-f22dc7520c6896fbaeeff8f717227c1b.png"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var _=v.prototype=new b;_.constructor=v,h(_,m.prototype),_.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,a={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:u,ref:i,props:a,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return u=u(c=e),e=""===a?"."+P(c,0):a,k(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(u,t,o,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(c=0,a=""===a?".":a+":",k(e))for(var s=0;s<e.length;s++){var l=a+P(i=e[s],s);c+=R(i,t,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)c+=R(i=i.value,t,o,l=a+P(i,s++),u);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},B={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=u,t.PureComponent=v,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=x.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)w.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:u,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>u});var r=n(667294);const o={},a=r.createContext(o);function u(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);