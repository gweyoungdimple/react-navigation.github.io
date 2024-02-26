"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[26463],{16052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),o=t(74866),i=t(85162);const c={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},s=void 0,u={id:"screen-tracking",title:"Screen tracking for analytics",description:"To track the currently active screen, we need to:",source:"@site/versioned_docs/version-7.x/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/docs/7.x/screen-tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/screen-tracking.md",tags:[],version:"7.x",frontMatter:{id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},sidebar:"docs",previous:{title:"Server rendering",permalink:"/docs/7.x/server-rendering"},next:{title:"Themes",permalink:"/docs/7.x/themes"}},l={},d=[{value:"Example",id:"example",level:2}];function m(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"To track the currently active screen, we need to:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add a callback to get notified of state changes"}),"\n",(0,a.jsx)(n.li,{children:"Get the root navigator state and find the active route name"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To get notified of state changes, we can use the ",(0,a.jsx)(n.code,{children:"onStateChange"})," prop on ",(0,a.jsx)(n.code,{children:"NavigationContainer"}),". To get the root navigator state, we can use the ",(0,a.jsx)(n.code,{children:"getRootState"})," method on the container's ref. Please note that ",(0,a.jsx)(n.code,{children:"onStateChange"})," is not called on initial render so you have to set your initial screen separately."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"This example shows how the approach can be adapted to any mobile analytics SDK."}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Screen tracking for analytics","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen tracking for analytics" snack version=7',children:"import * as React from 'react';\nimport { View } from 'react-native';\n// codeblock-focus-start\nimport {\n  createStaticNavigation,\n  useNavigationContainerRef,\n  useNavigation,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { Button } from '@react-navigation/elements';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction Home() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction Settings() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: Home,\n    Settings: Settings,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\n// codeblock-focus-start\n\nexport default function App() {\n  const navigationRef = useNavigationContainerRef();\n  const routeNameRef = React.useRef();\n\n  return (\n    <Navigation\n      ref={navigationRef}\n      onReady={() => {\n        routeNameRef.current = navigationRef.current.getCurrentRoute().name;\n      }}\n      onStateChange={async () => {\n        const previousRouteName = routeNameRef.current;\n        const currentRouteName = navigationRef.current.getCurrentRoute().name;\n        const trackScreenView = () => {\n          // Your implementation of analytics goes here!\n        };\n\n        if (previousRouteName !== currentRouteName) {\n          // Replace the line below to add the tracker from a mobile analytics SDK\n          await trackScreenView(currentRouteName);\n        }\n\n        // Save the current route name for later comparison\n        routeNameRef.current = currentRouteName;\n      }}\n    />\n  );\n}\n// codeblock-focus-end\n"})})}),(0,a.jsx)(i.Z,{value:"dynamic",label:"Dynamic",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Screen tracking for anylytics","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Screen tracking for anylytics" snack version=7',children:"import * as React from 'react';\nimport { View } from 'react-native';\n// codeblock-focus-start\nimport {\n  NavigationContainer,\n  useNavigationContainerRef,\n} from '@react-navigation/native';\n// codeblock-focus-end\nimport { Button } from '@react-navigation/elements';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction Home({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n}\n\nfunction Settings({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\n// codeblock-focus-start\n\nexport default function App() {\n  const navigationRef = useNavigationContainerRef();\n  const routeNameRef = React.useRef();\n\n  return (\n    <NavigationContainer\n      ref={navigationRef}\n      onReady={() => {\n        routeNameRef.current = navigationRef.current.getCurrentRoute().name;\n      }}\n      onStateChange={async () => {\n        const previousRouteName = routeNameRef.current;\n        const currentRouteName = navigationRef.current.getCurrentRoute().name;\n        const trackScreenView = () => {\n          // Your implementation of analytics goes here!\n        };\n\n        if (previousRouteName !== currentRouteName) {\n          // Replace the line below to add the tracker from a mobile analytics SDK\n          await trackScreenView(currentRouteName);\n        }\n\n        // Save the current route name for later comparison\n        routeNameRef.current = currentRouteName;\n      }}\n    >\n      {/* ... */}\n      // codeblock-focus-end\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={Home} />\n        <Stack.Screen name=\"Settings\" component={Settings} />\n      </Stack.Navigator>\n      // codeblock-focus-start\n    </NavigationContainer>\n  );\n}\n// codeblock-focus-end\n"})})})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(67294),r=t(86010),o=t(12466),i=t(16550),c=t(20469),s=t(91980),u=t(67392),l=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=a.find((e=>e.default)))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=g({queryString:t,groupId:r}),[v,p]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,l.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),h=(()=>{const e=null!=u?u:v;return f({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var p=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function k(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),l=e=>{const n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==a&&(u(n),i(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{var a;const n=s.indexOf(e.currentTarget)+1;t=null!=(a=s[n])?a:s[0];break}case"ArrowLeft":{var r;const n=s.indexOf(e.currentTarget)-1;t=null!=(r=s[n])?r:s[s.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:l,...o,className:(0,r.Z)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",h.tabList),children:[(0,b.jsx)(k,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function x(e){const n=(0,p.Z)();return(0,b.jsx)(S,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var a=t(67294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);