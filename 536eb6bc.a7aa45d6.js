(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(216)),l={id:"layout-splitView",title:"SplitView",sidebar_label:"SplitView"},c={id:"layout-splitView",title:"SplitView",description:"A container view controller implementing a master-detail interface. See UISplitViewController docs.",source:"@site/api/layout-splitView.mdx",permalink:"/react-native-navigation/api/layout-splitView",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/api/layout-splitView.mdx",sidebar_label:"SplitView",sidebar:"api",previous:{title:"Side Menu",permalink:"/react-native-navigation/api/layout-sideMenu"},next:{title:"Options Commands",permalink:"/react-native-navigation/api/options-api"}},b=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>master</code>",id:"master",children:[]},{value:"<code>detail</code>",id:"detail",children:[]},{value:"<code>options</code>",id:"options",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A container view controller implementing a master-detail interface. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uisplitviewcontroller"}),"UISplitViewController docs"),".\nCurrently implemented only in iOS."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  id: 'PROFILE_TAB',\n  master: {\n    component: {\n      id: 'MASTER_SCREEN',\n      name: 'MasterScreen'\n    }\n  },\n  detail: {\n    component: {\n      id: 'DETAIL_SCREEN',\n      name: 'DetailScreen'\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"id"},Object(i.b)("inlineCode",{parentName:"h2"},"id")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique id used to interact with the view via the Navigation api, usually ",Object(i.b)("inlineCode",{parentName:"td"},"Navigation.mergeOptions")," which accepts the componentId as it's first argument.")))),Object(i.b)("h2",{id:"master"},Object(i.b)("inlineCode",{parentName:"h2"},"master")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-layout"}),"Layout")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set master layout (the smaller screen, sidebar)")))),Object(i.b)("h2",{id:"detail"},Object(i.b)("inlineCode",{parentName:"h2"},"detail")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-layout"}),"Layout")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set detail layout (the larger screen, flexes)")))),Object(i.b)("h2",{id:"options"},Object(i.b)("inlineCode",{parentName:"h2"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/api/options-root"}),"Options")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dynamic options which will apply to all screens")))))}p.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,m=u["".concat(l,".").concat(O)]||u[O]||d[O]||i;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);