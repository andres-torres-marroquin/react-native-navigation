(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(9),r=(n(0),n(216)),o={id:"screen-lifecycle",title:"Screen Lifecycle",sidebar_label:"Screen Lifecycle"},c={id:"screen-lifecycle",title:"Screen Lifecycle",description:"Any React Component registered with react-native-navigation is enhanced with two additional lifecycle events:",source:"@site/docs/docs-screen-lifecycle.mdx",permalink:"/react-native-navigation/docs/screen-lifecycle",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs-screen-lifecycle.mdx",sidebar_label:"Screen Lifecycle",sidebar:"docs",previous:{title:"Advanced navigation",permalink:"/react-native-navigation/docs/advanced-navigation"},next:{title:"Passing data to components",permalink:"/react-native-navigation/docs/passing-data-to-components"}},l=[{value:"Mounting",id:"mounting",children:[]},{value:"Unmounting",id:"unmounting",children:[]},{value:"Modal",id:"modal",children:[]},{value:"Overlay",id:"overlay",children:[]}],p={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Any React Component registered with react-native-navigation is enhanced with two additional lifecycle events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"componentDidAppear")," - called each time a component is revealed to the user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"componentDidDisappear")," - called each time a component is hidden from user's view ",Object(r.b)("strong",{parentName:"li"},"as a result of being detached from hierarchy"))),Object(r.b)("p",null,"These methods compliment React's lifecycle methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"componentDidMount")," - called once, when a component is attached to hierarchy ",Object(r.b)("strong",{parentName:"li"},"for the first time")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"componentWillUnmount")," - called once, when a component is destroyed")),Object(r.b)("h3",{id:"mounting"},"Mounting"),Object(r.b)("p",null,"These methods are called in the following order when a component is created and attached to hierarchy."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"constructor()"),Object(r.b)("li",{parentName:"ul"},"render()"),Object(r.b)("li",{parentName:"ul"},"componentDidMount()"),Object(r.b)("li",{parentName:"ul"},"componentDidAppear()")),Object(r.b)("h3",{id:"unmounting"},"Unmounting"),Object(r.b)("p",null,"These methods are called when a component is being removed from hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"componentDidDisappear()"),Object(r.b)("li",{parentName:"ul"},"componentWillUnmount()")),Object(r.b)("h3",{id:"modal"},"Modal"),Object(r.b)("p",null,"When a modal is displayed, depending on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-navigation/api/options-root#modalpresentationstyle"}),"modalPresentationStyle"),", content behind it might be detached from hierarchy. This affects the visibility events which are emitted to the content behind the modal."),Object(r.b)("p",null,"When Modals with ",Object(r.b)("inlineCode",{parentName:"p"},"pageSheet")," or ",Object(r.b)("inlineCode",{parentName:"p"},"overCurrentContext")," modalPresentationStyle are displayed, previous content is still visible to the user. Thus ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidDisappear")," event is ",Object(r.b)("strong",{parentName:"p"},"not")," emitted."),Object(r.b)("p",null,"Same is applied when a modal is dismissed. If it was originally presented with ",Object(r.b)("inlineCode",{parentName:"p"},"pageSheet")," or ",Object(r.b)("inlineCode",{parentName:"p"},"overCurrentContext")," modalPresentationStyle, when that modal is then dismissed, the previous context won't receive a ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidAppear")," event."),Object(r.b)("h3",{id:"overlay"},"Overlay"),Object(r.b)("p",null,"These methods are called in the following order when a component is displayed as an Overlay:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"constructor()"),Object(r.b)("li",{parentName:"ul"},"render()"),Object(r.b)("li",{parentName:"ul"},"componentDidMount()"),Object(r.b)("li",{parentName:"ul"},"componentDidAppear()")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Content displayed behind an Overlay does not receive the ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidDisappear"),", since it's still visible to user and attached to the hierarchy."))))}d.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||s[m]||r;return n?i.a.createElement(u,c(c({ref:t},p),{},{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);