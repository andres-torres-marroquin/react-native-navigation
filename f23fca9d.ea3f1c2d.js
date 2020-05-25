(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(216)),o={id:"events",title:"Events",sidebar_label:"Events"},b={id:"events",title:"Events",description:"onAppLaunched",source:"@site/api/api-events.mdx",permalink:"/react-native-navigation/api/events",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/api/api-events.mdx",sidebar_label:"Events",sidebar:"api",previous:{title:"SplitView Options",permalink:"/react-native-navigation/api/options-splitView"}},c=[{value:"onAppLaunched",id:"onapplaunched",children:[]},{value:"componentDidAppear",id:"componentdidappear",children:[]},{value:"componentDidDisappear",id:"componentdiddisappear",children:[]},{value:"registerCommandListener",id:"registercommandlistener",children:[]},{value:"registerCommandCompletedListener",id:"registercommandcompletedlistener",children:[]},{value:"registerModalDismissedListener",id:"registermodaldismissedlistener",children:[]},{value:"registerModalAttemptedToDismissListener(iOS 13+ only)",id:"registermodalattemptedtodismisslistenerios-13-only",children:[]},{value:"registerScreenPoppedListener",id:"registerscreenpoppedlistener",children:[]},{value:"registerBottomTabSelectedListener",id:"registerbottomtabselectedlistener",children:[]},{value:"registerBottomTabLongPressedListener",id:"registerbottomtablongpressedlistener",children:[]},{value:"navigationButtonPressed event",id:"navigationbuttonpressed-event",children:[]},{value:"searchBarUpdated (iOS 11+ only)",id:"searchbarupdated-ios-11-only",children:[]},{value:"searchBarCancelPressed (iOS 11+ only)",id:"searchbarcancelpressed-ios-11-only",children:[]},{value:"previewCompleted (iOS 11.4+ only)",id:"previewcompleted-ios-114-only",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"onapplaunched"},"onAppLaunched"),Object(i.b)("p",null,"Called once the app is launched. Used to set the initial layout of the Application - after that the app is ready for user interaction."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const appLaunchedListener = Navigation.events().registerAppLaunchedListener(\n  () => {}\n);\n")),Object(i.b)("p",null,"RNN automatically unsubscribes components when they unmount, therefore unsubscribing isn't actually mandatory if you subscribed in ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidMount"),"."),Object(i.b)("p",null,"But you can use the following method to unsubscribe manually:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"appLaunchedListener.remove();\n")),Object(i.b)("h2",{id:"componentdidappear"},"componentDidAppear"),Object(i.b)("p",null,"Called each time this component appears on the screen (attached to the view hierarchy)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends Component {\n  componentDidMount() {\n    this.navigationEventListener = Navigation.events().bindComponent(this);\n  }\n\n  componentWillUnmount() {\n    // Not mandatory\n    if (this.navigationEventListener) {\n      this.navigationEventListener.remove();\n    }\n  }\n\n  componentDidAppear() {}\n}\n")),Object(i.b)("p",null,"This event can be observed globally as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst screenEventListener = Navigation.events().registerComponentDidAppearListener(({ componentId, componentName, passProps }) => {\n\n});\n...\n// Unsubscribe\nscreenEventListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"componentId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Id of the appearing component")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"componentName")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Registered name used when registering the component with ",Object(i.b)("inlineCode",{parentName:"td"},"Navigation.registerComponent()"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"passProps")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"props passed to the component")))),Object(i.b)("h2",{id:"componentdiddisappear"},"componentDidDisappear"),Object(i.b)("p",null,"Called each time this component disappears from the screen (detached from the view hierarchy)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends Component {\n  componentDidMount() {\n    this.navigationEventListener = Navigation.events().bindComponent(this);\n  }\n\n  componentWillUnmount() {\n    // Not mandatory\n    if (this.navigationEventListener) {\n      this.navigationEventListener.remove();\n    }\n  }\n\n  componentDidDisappear() {}\n}\n")),Object(i.b)("p",null,"This event can be observed globally as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst screenEventListener = Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {\n\n});\n...\n// Unsubscribe\nscreenEventListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"componentId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Id of the disappearing component")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"componentName")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Registered name used when registering the component with ",Object(i.b)("inlineCode",{parentName:"td"},"Navigation.registerComponent()"))))),Object(i.b)("h2",{id:"registercommandlistener"},"registerCommandListener"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"commandListener")," is called whenever a ",Object(i.b)("em",{parentName:"p"},"Navigation command")," (i.e push, pop, showModal etc) is invoked."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst commandListener = Navigation.events().registerCommandListener((name, params) => {\n\n});\n...\n// Unsubscribe\ncommandListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The name of the command that was invoked. For example ",Object(i.b)("inlineCode",{parentName:"td"},"push"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"params")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"commandId"),": Each command is assigned a unique Id",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"componentId"),": Optional, the componentId passed to the command",Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"layout"),": Optional, if the command invoked created a screen. Slim representation of the component and its options")))),Object(i.b)("h2",{id:"registercommandcompletedlistener"},"registerCommandCompletedListener"),Object(i.b)("p",null,"Invoked when a command finishes executing in native. If the command contains animations, for example pushed screen animation, the listener is invoked after the animation ends."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst commandCompletedListener = Navigation.events().registerCommandCompletedListener(({ commandId, completionTime, params }) => {\n\n});\n...\n// Unsubscribe\ncommandCompletedListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"commandId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Id of the completed command")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"completionTime")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Timestamp when the command, and consecutive animations, completed.")))),Object(i.b)("h2",{id:"registermodaldismissedlistener"},"registerModalDismissedListener"),Object(i.b)("p",null,"Invoked when a modal is dismissed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst modalDismissedListener = Navigation.events().registerModalDismissedListener(({ componentId, modalsDismissed }) => {\n\n});\n...\n// Unsubscribe\nmodalDismissedListener.remove();\n")),Object(i.b)("h2",{id:"registermodalattemptedtodismisslistenerios-13-only"},"registerModalAttemptedToDismissListener(iOS 13+ only)"),Object(i.b)("p",null,"Invoked only on iOS pageSheet modal when ",Object(i.b)("inlineCode",{parentName:"p"},"swipeToDismiss")," flag is set to true and modal was swiped down to dismiss."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst modalAttemptedToDismissListener = Navigation.events().registerModalAttemptedToDismissListener(({ componentId }) => {\n\n});\n...\n// Unsubscribe\nmodalDismissedListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"componentId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Id of the modal a user is attempting to dismiss")))),Object(i.b)("h2",{id:"registerscreenpoppedlistener"},"registerScreenPoppedListener"),Object(i.b)("p",null,"Invoked when the screen is popped."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst screenPoppedListener = Navigation.events().registerScreenPoppedListener(({ componentId }) => {\n\n});\n...\n// Unsubscribe\nscreenPoppedListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"componentId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Id of the modal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"modalsDismissed")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Number of modals that were dismissed")))),Object(i.b)("h2",{id:"registerbottomtabselectedlistener"},"registerBottomTabSelectedListener"),Object(i.b)("p",null,"Invoked when BottomTab is selected by a user."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst bottomTabEventListener = Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex, unselectedTabIndex }) => {\n\n});\n...\n// Unsubscribe\nbottomTabEventListener.remove();\n")),Object(i.b)("h2",{id:"registerbottomtablongpressedlistener"},"registerBottomTabLongPressedListener"),Object(i.b)("p",null,"Invoked when BottomTab is long pressed by a user."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst bottomTabEventListener = Navigation.events().registerBottomTabLongPressedListener(({ selectedTabIndex }) => {\n\n});\n...\n// Unsubscribe\nbottomTabEventListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"selectedTabIndex")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Index of the newly selected tab")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"unselectedTabIndex")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Index of the previously selected tab")))),Object(i.b)("h2",{id:"navigationbuttonpressed-event"},"navigationButtonPressed event"),Object(i.b)("p",null,"This event is emitted whenever a TopBar button is pressed by a user."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends Component {\n  componentDidMount() {\n    this.navigationEventListener = Navigation.events().bindComponent(this);\n  }\n\n  componentWillUnmount() {\n    // Unregistering listeners bound to components isn't mandatory since RNN handles the unregistration for you\n    if (this.navigationEventListener) {\n      this.navigationEventListener.remove();\n    }\n  }\n\n  navigationButtonPressed({ buttonId }) {}\n}\n")),Object(i.b)("p",null,"This event can be observed globally as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Subscribe\nconst navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {\n\n});\n...\n// Unsubscribe\nnavigationButtonEventListener.remove();\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Parameter"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("strong",{parentName:"td"},"buttonId")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(i.b)("inlineCode",{parentName:"td"},"buttonId"),": ",Object(i.b)("inlineCode",{parentName:"td"},"id")," of the pressed button")))),Object(i.b)("h2",{id:"searchbarupdated-ios-11-only"},"searchBarUpdated (iOS 11+ only)"),Object(i.b)("p",null,"Called whenever the SearchBar of NavigationBar is updated."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends Component {\n  componentDidMount() {\n    this.navigationEventListener = Navigation.events().bindComponent(this);\n  }\n\n  componentWillUnmount() {\n    // Not mandatory\n    if (this.navigationEventListener) {\n      this.navigationEventListener.remove();\n    }\n  }\n\n  searchBarUpdated({ text, isFocused }) {}\n}\n")),Object(i.b)("h2",{id:"searchbarcancelpressed-ios-11-only"},"searchBarCancelPressed (iOS 11+ only)"),Object(i.b)("p",null,"Called when the cancel button of the SearchBar from NavigationBar is pressed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends Component {\n  componentDidMount() {\n    this.navigationEventListener = Navigation.events().bindComponent(this);\n  }\n\n  componentWillUnmount() {\n    // Not mandatory\n    if (this.navigationEventListener) {\n      this.navigationEventListener.remove();\n    }\n  }\n\n  searchBarCancelPressed() {}\n}\n")),Object(i.b)("h2",{id:"previewcompleted-ios-114-only"},"previewCompleted (iOS 11.4+ only)"),Object(i.b)("p",null,"Called when preview peek is completed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends Component {\n  componentDidMount() {\n    this.navigationEventListener = Navigation.events().bindComponent(this);\n  }\n\n  componentWillUnmount() {\n    // Not mandatory\n    if (this.navigationEventListener) {\n      this.navigationEventListener.remove();\n    }\n  }\n\n  previewCompleted({ previewComponentId }) {}\n}\n")))}p.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},l=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,O=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?r.a.createElement(O,b(b({ref:t},s),{},{components:n})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);