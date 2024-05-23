/*! For license information please see bfb85d2a.ddea4179.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[481333],{12285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const a={id:"app",title:"App Instances",sidebar_label:"App",description:"App instances"},s=void 0,i={id:"frontend-system/architecture/app",title:"App Instances",description:"App instances",source:"@site/../docs/frontend-system/architecture/02-app.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/app",permalink:"/docs/frontend-system/architecture/app",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/architecture/02-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"app",title:"App Instances",sidebar_label:"App",description:"App instances"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/frontend-system/architecture/index"},next:{title:"Extensions",permalink:"/docs/frontend-system/architecture/extensions"}},c={},u=[{value:"The App Instance",id:"the-app-instance",level:2},{value:"Feature Discovery",id:"feature-discovery",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"the-app-instance",children:"The App Instance"}),"\n",(0,r.jsx)(t.p,{children:"The app instance is main entry point for creating a frontend app. It doesn't do much on its own, but is instead responsible for wiring things together that have been provided as features from other parts of the system."}),"\n",(0,r.jsx)(t.p,{children:"Below is a simple example of how to create and render an app instance:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import ReactDOM from 'react-dom/client';\nimport { createApp } from '@backstage/frontend-app-api';\n\n// Create your app instance\nconst app = createApp({\n  // Features such as plugins can be installed explicitly, but we will explore other options later on\n  features: [catalogPlugin],\n});\n\n// This creates a React element that renders the entire app\nconst root = app.createRoot();\n\n// Just like any other React we need a root element. No server side rendering is used.\nconst rootEl = document.getElementById('root')!;\n\nReactDOM.createRoot(rootEl).render(app);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We call ",(0,r.jsx)(t.code,{children:"createApp"})," to create a new app instance, which is responsible for wiring together all of the features that we provide to the app. It also provides a set of built-in ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions",children:"Extensions"})," that help build out the foundations of the app, as well as defaults for many other systems such as ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/utility-apis",children:"Utility API"})," implementations, components, icons, themes, and how to load configuration. No real work is done at the point of creating the app though, it's all deferred to the rendering of the element returned from ",(0,r.jsx)(t.code,{children:"app.createRoot()"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["It is possible to explicitly install features when creating the app, although typically these will instead be discovered automatically which we'll explore later on. Nevertheless these features are what build out the actual functionality of the app by providing ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions",children:"Extensions"}),". These extensions are wired together by the app into a tree structure known as the app extension tree. Each node in this tree receives data from its child nodes, and pass along data to its parent. The following diagram illustrates the shape of a small app extension tree."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"frontend system app structure diagram",src:n(713098).Z+"",width:"371",height:"351"})}),"\n",(0,r.jsxs)(t.p,{children:["Each node in this tree is an extension with a parent node and children. The colored shapes represent extension data inputs and output, where each color is one unique type of data. You can see that there are both extensions that output data that is ignored by the parent, as well as extensions that accept inputs but do not have any children. There are a couple of different tools at your disposal when creating and extension that lets you define different requirements for your inputs and output, which we will cover in greater details in the ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions",children:"Extensions"})," section."]}),"\n",(0,r.jsxs)(t.p,{children:["A common type of data that is shared between extensions is React elements and components. These can in turn be rendered by each other in their own React components, which ends up forming a parallel tree of React components that is similar in shape to that of the app extension tree. At the top of the app extension tree is a built-in root extension that among other things outputs a React element. This element also ends up being the root of the parallel React tree, and is rendered by the React element returned by ",(0,r.jsx)(t.code,{children:"app.createRoot()"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"feature-discovery",children:"Feature Discovery"}),"\n",(0,r.jsxs)(t.p,{children:["App feature discovery lets you automatically discover and install features provided by dependencies in your app. In practice, it means that you don't need to manually ",(0,r.jsx)(t.code,{children:"import"})," features in code, but they are instead installed as soon as you add them as a dependency in your ",(0,r.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Because feature discovery needs to interact with the compilation process, it is only available when using the ",(0,r.jsx)(t.code,{children:"@backstage/cli"})," to build your app. It is hooked into the WebPack compilation process by scanning your app package for compatible dependencies, which are then made part of the app compilation bundle."]}),"\n",(0,r.jsxs)(t.p,{children:["Since the ",(0,r.jsx)(t.code,{children:"@backstage/cli"})," is a more stable component than the new frontend system, feature discovery is currently marked as an experimental feature of the CLI and needs to be enabled manually. To enable it, add the following configuration to your ",(0,r.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"app:\n  experimental:\n    packages: all\n"})}),"\n",(0,r.jsx)(t.p,{children:"This will cause all dependencies in your app package to be installed automatically. If this is not desired, you can use include or exclude filters to narrow down the set of packages:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"app:\n  experimental:\n    packages:\n      # Only the following packages will be included\n      include:\n        - '@backstage/plugin-catalog'\n        - '@backstage/plugin-scaffolder'\n---\napp:\n  experimental:\n    packages:\n      # All but the following package will be included\n      exclude:\n        - '@backstage/plugin-catalog'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note that you do not need to manually exclude packages that you also import explicitly in code, since plugin instances are deduplicated by the app. You will never end up with duplicate plugin installations except if they are in fact two different plugin instances with different IDs."})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},713098:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-app.drawio-a998a662bb304dcf8cc7d451fdc7755f.svg"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,a={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var v=x.prototype=new g;v.constructor=x,y(v,b.prototype),v.isPureReactComponent=!0;var w=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,o)&&!j.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===a?"."+C(c,0):a,w(s)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),I(s,t,o,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",w(e))for(var u=0;u<e.length;u++){var l=a+C(i=e[u],u);c+=I(i,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=I(i=i.value,t,o,l=a+C(i,u++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},$={transition:null},P={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=s,t.PureComponent=x,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)_.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(667294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);