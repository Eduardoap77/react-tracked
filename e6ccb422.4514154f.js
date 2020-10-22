(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),i=(r(0),r(76)),o={id:"comparison",title:"Comparison with other projects",sidebar_label:"Comparison"},c={unversionedId:"comparison",id:"comparison",isDocsHomePage:!1,title:"Comparison with other projects",description:"There are several projects to provide global state management.",source:"@site/docs/comparison.md",slug:"/comparison",permalink:"/docs/comparison",version:"current",sidebar_label:"Comparison",sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/quick-start"},next:{title:"Tutorial - Person Name with useState",permalink:"/docs/tutorial-01"}},s=[{value:"Notes about similarities and differences",id:"notes-about-similarities-and-differences",children:[{value:"Pure React",id:"pure-react",children:[]},{value:"React Redux",id:"react-redux",children:[]},{value:"Reactive React Redux",id:"reactive-react-redux",children:[]},{value:"MobX React",id:"mobx-react",children:[]},{value:"Vue.js",id:"vuejs",children:[]}]},{value:"Benchmarks",id:"benchmarks",children:[]}],u={rightToc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are several projects to provide global state management.\nLet's compare with other projects."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Disclaimer: The comparison is obviously biased.")),Object(i.b)("h2",{id:"notes-about-similarities-and-differences"},"Notes about similarities and differences"),Object(i.b)("p",null,"Here describes simiarities and differences."),Object(i.b)("h3",{id:"pure-react"},"Pure React"),Object(i.b)("p",null,"As we saw in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/quick-start"}),"Quick Start"),",\nthe way we use React Tracked is pretty much the same\nas pure React with context and hooks."),Object(i.b)("p",null,"The difference is our effortless render optimization with ",Object(i.b)("inlineCode",{parentName:"p"},"useTracked"),"."),Object(i.b)("h3",{id:"react-redux"},"React Redux"),Object(i.b)("p",null,"React Tracked provides ",Object(i.b)("inlineCode",{parentName:"p"},"useSelector")," hook from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#useselector"}),"React Redux"),".\nSo, the transition from React Redux hooks to React Tracked should be easy."),Object(i.b)("p",null,"React Tracked has nothing to do with Redux, so we can't use their nice ecosystem."),Object(i.b)("h3",{id:"reactive-react-redux"},"Reactive React Redux"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dai-shi/reactive-react-redux"}),"Reactive React Redux")," is\na branch project of React Tracked.\nIt is based on Redux, and provides ",Object(i.b)("inlineCode",{parentName:"p"},"useTrackedState")," hook which\nallows us the effortless render optimization."),Object(i.b)("p",null,"If you want Redux ecosystem, this one is good to go instead of React Tracked."),Object(i.b)("h3",{id:"mobx-react"},"MobX React"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mobxjs/mobx"}),"MobX")," utilizes Proxies,\nso the technique in the implementation is similar.\nThe easiness of the usage is similar too."),Object(i.b)("p",null,"However, MobX is based on mutable states.\nWhereas React Tracked is based on immutable states like Pure React and React Redux."),Object(i.b)("h3",{id:"vuejs"},"Vue.js"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/vuejs/vue"}),"Vue")," has nothing to do with React,\nbut it utilizes Proxies.\nThe spirit of the effortless render optimization\ncan be similar to the easiness of Vue."),Object(i.b)("h2",{id:"benchmarks"},"Benchmarks"),Object(i.b)("p",null,"We have done some benchmark tests."),Object(i.b)("img",{alt:"benchmark result",src:"https://user-images.githubusercontent.com/490574/62705335-28f34300-ba28-11e9-84ea-8f785c445ff4.png",width:"600"}),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dai-shi/react-tracked/issues/1#issuecomment-519509857"}),"this")," for details."))}b.isMDXComponent=!0},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=b(r),d=a,m=l["".concat(o,".").concat(d)]||l[d]||p[d]||i;return r?n.a.createElement(m,c(c({ref:t},u),{},{components:r})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);