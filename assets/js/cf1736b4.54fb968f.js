"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4037],{50607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=t(85893),r=t(11151),a=t(74866),s=t(85162);const i={id:"use-theme",title:"useTheme",sidebar_label:"useTheme"},c=void 0,l={id:"use-theme",title:"useTheme",description:"The useTheme hook lets us access the currently active theme. You can use it in your own components to have them respond to changes in the theme.",source:"@site/versioned_docs/version-7.x/use-theme.md",sourceDirName:".",slug:"/use-theme",permalink:"/docs/7.x/use-theme",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-theme.md",tags:[],version:"7.x",frontMatter:{id:"use-theme",title:"useTheme",sidebar_label:"useTheme"},sidebar:"docs",previous:{title:"useScrollToTop",permalink:"/docs/7.x/use-scroll-to-top"},next:{title:"CommonActions",permalink:"/docs/7.x/navigation-actions"}},u={},m=[{value:"Using with class component",id:"using-with-class-component",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"useTheme"})," hook lets us access the currently active theme. You can use it in your own components to have them respond to changes in the theme."]}),"\n",(0,o.jsxs)(a.Z,{groupId:"config",queryString:"config",children:[(0,o.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,o.jsx)(n.pre,{"data-name":"useTheme hook","data-snack":"true","data-version":"7",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="useTheme hook" snack version=7',children:"import * as React from 'react';\nimport {\n  useNavigation,\n  createStaticNavigation,\n  DefaultTheme,\n  DarkTheme,\n} from '@react-navigation/native';\nimport { Button, View, Text, TouchableOpacity, Appearance } from 'react-native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\n// codeblock-focus-start\nimport { useTheme } from '@react-navigation/native';\n\n// codeblock-focus-end\n\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Settings Screen</Text>\n      <Text style={{ color: colors.text }}>\n        userParam: {JSON.stringify(user)}\n      </Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\n\nfunction ProfileScreen() {\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Profile Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nfunction MyButton() {\n  // highlight-next-line\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Home Screen</Text>\n      <MyButton />\n      <Button\n        title=\"Go to Settings\"\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      />\n    </View>\n  );\n}\n\nconst PanelStack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n    Settings: SettingsScreen,\n  },\n});\n\nconst Drawer = createDrawerNavigator({\n  initialRouteName: 'Panel',\n  screens: {\n    Home: HomeScreen,\n    Panel: {\n      screen: PanelStack,\n      options: {\n        headerShown: false,\n      },\n    },\n  },\n});\n\nconst Navigation = createStaticNavigation(Drawer);\n\nexport default function App() {\n  const scheme = Appearance.getColorScheme();\n  return <Navigation theme={scheme === 'dark' ? DarkTheme : DefaultTheme} />;\n}\n"})})}),(0,o.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,o.jsx)(n.pre,{"data-name":"useTheme hook","data-snack":"true","data-version":"7",children:(0,o.jsx)(n.code,{className:"language-js",metastring:'name="useTheme hook" snack version=7',children:"import * as React from 'react';\nimport { Button, View, Text, TouchableOpacity, Appearance } from 'react-native';\nimport {\n  NavigationContainer,\n  DefaultTheme,\n  DarkTheme,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\n\n// codeblock-focus-start\nimport { useTheme } from '@react-navigation/native';\n\n// codeblock-focus-end\nfunction SettingsScreen({ route }) {\n  const navigation = useNavigation();\n  const { user } = route.params;\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Settings Screen</Text>\n      <Text style={{ color: colors.text }}>\n        userParam: {JSON.stringify(user)}\n      </Text>\n      <Button\n        title=\"Go to Profile\"\n        onPress={() => navigation.navigate('Profile')}\n      />\n    </View>\n  );\n}\nfunction ProfileScreen() {\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Profile Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nfunction MyButton() {\n  // highlight-next-line\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n  const { colors } = useTheme();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text style={{ color: colors.text }}>Home Screen</Text>\n      <MyButton />\n      <Button\n        title=\"Go to Settings\"\n        onPress={() =>\n          navigation.navigate('Root', {\n            screen: 'Settings',\n            params: { user: 'jane' },\n          })\n        }\n      />\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\nconst Stack = createNativeStackNavigator();\n\nfunction Root() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      <Stack.Screen name=\"Settings\" component={SettingsScreen} />\n    </Stack.Navigator>\n  );\n}\n\nexport default function App() {\n  const scheme = Appearance.getColorScheme();\n\n  return (\n    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>\n      <Drawer.Navigator useLegacyImplementation>\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen\n          name=\"Root\"\n          component={Root}\n          options={{ headerShown: false }}\n        />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/7.x/themes",children:"theming guide"})," for more details and usage guide around how to configure themes."]}),"\n",(0,o.jsx)(n.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,o.jsx)(n.p,{children:"You can wrap your class component in a function component to use the hook:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class MyButton extends React.Component {\n  render() {\n    // Get it from props\n    const { theme } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function (props) {\n  const theme = useTheme();\n\n  return <MyButton {...props} theme={theme} />;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var o=t(86010);const r={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var o=t(67294),r=t(86010),a=t(12466),s=t(16550),i=t(20469),c=t(91980),l=t(67392),u=t(50012);function m(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[s,c]=(0,o.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=o.find((e=>e.default)))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,m]=f({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,a]=(0,u.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=null!=l?l:p;return d({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),m(e),g(e)}),[m,g,a]),tabValues:a}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==o&&(l(n),s(r))},m=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var o;const n=c.indexOf(e.currentTarget)+1;t=null!=(o=c[n])?o:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:m,onClick:u,...a,className:(0,r.Z)("tabs__item",v.tabItem,null==a?void 0:a.className,{"tabs__item--active":o===n}),children:null!=t?t:n},n)}))})}function T(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(T,{...e,...n})]})}function S(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:m(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(67294);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);