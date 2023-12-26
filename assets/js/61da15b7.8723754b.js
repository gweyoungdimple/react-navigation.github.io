"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[86259],{98557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=t(85893),i=t(11151),o=t(74866),r=t(85162);const s={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},c=void 0,l={id:"hello-react-navigation",title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (``) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-7.x/hello-react-navigation.md",sourceDirName:".",slug:"/hello-react-navigation",permalink:"/docs/7.x/hello-react-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/hello-react-navigation.md",tags:[],version:"7.x",frontMatter:{id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/7.x/getting-started"},next:{title:"Moving between screens",permalink:"/docs/7.x/navigating"}},d={},h=[{value:"Installing the native stack navigator library",id:"installing-the-native-stack-navigator-library",level:2},{value:"Creating a native stack navigator",id:"creating-a-native-stack-navigator",level:3},{value:"Configuring the navigator",id:"configuring-the-navigator",level:3},{value:"Specifying options",id:"specifying-options",level:3},{value:"Passing additional props",id:"passing-additional-props",level:3},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Summary",id:"summary",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In a web browser, you can link to different pages using an anchor (",(0,a.jsx)(n.code,{children:"<a>"}),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."]}),"\n",(0,a.jsx)(n.p,{children:"React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."}),"\n",(0,a.jsxs)(n.p,{children:["Let's start by demonstrating the most common navigator, ",(0,a.jsx)(n.code,{children:"createNativeStackNavigator"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"installing-the-native-stack-navigator-library",children:"Installing the native stack navigator library"}),"\n",(0,a.jsxs)(n.p,{children:["The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install ",(0,a.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation/tree/main/packages/native-stack",children:(0,a.jsx)(n.code,{children:"@react-navigation/native-stack"})})," :"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(r.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @react-navigation/native-stack@next\n"})})}),(0,a.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @react-navigation/native-stack@next\n"})})}),(0,a.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @react-navigation/native-stack@next\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@react-navigation/native-stack"})," depends on ",(0,a.jsx)(n.code,{children:"react-native-screens"})," and the other libraries that we installed in ",(0,a.jsx)(n.a,{href:"/docs/7.x/getting-started",children:"Getting started"}),". If you haven't installed those yet, head over to that page and follow the installation instructions."]})}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-native-stack-navigator",children:"Creating a native stack navigator"}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsxs)(r.Z,{value:"static",label:"Static",default:!0,children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"createNativeStackNavigator"})," is a function that takes a configuration object containing the screens and customization options. The screens are React Components that render the content displayed by the navigator."]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"createStaticNavigation"})," is a function that takes the navigator defined earlier and returns a component that can be rendered in the app. It's only called once in the app."]}),(0,a.jsx)(n.pre,{"data-name":"Native Stack Example","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Native Stack Example" snack version=7',children:"// In App.js in a new project\n\nimport * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})]}),(0,a.jsxs)(r.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"createNativeStackNavigator"})," is a function that returns an object containing 2 properties: ",(0,a.jsx)(n.code,{children:"Screen"})," and ",(0,a.jsx)(n.code,{children:"Navigator"}),". Both of them are React components used for configuring the navigator. The ",(0,a.jsx)(n.code,{children:"Navigator"})," should contain ",(0,a.jsx)(n.code,{children:"Screen"})," elements as its children to define the configuration for routes."]}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"NavigationContainer"})," is a component that manages our navigation tree and contains the ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-state",children:"navigation state"}),". This component must wrap all the navigators in the app. Usually, we'd render this component at the root of our app, which is usually the component exported from ",(0,a.jsx)(n.code,{children:"App.js"}),"."]}),(0,a.jsx)(n.pre,{"data-name":"Native Stack Example","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Native Stack Example" snack version=7',children:"// In App.js in a new project\n\nimport * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    </Stack.Navigator>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"})})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Basic app using stack navigator",src:t(63621).Z+"",width:"320",height:"569"})}),"\n",(0,a.jsxs)(n.p,{children:["If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your ",(0,a.jsx)(n.code,{children:"HomeScreen"})," component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The casing of the route name doesn't matter -- you can use lowercase ",(0,a.jsx)(n.code,{children:"home"})," or capitalized ",(0,a.jsx)(n.code,{children:"Home"}),", it's up to you. We prefer capitalizing our route names."]})}),"\n",(0,a.jsx)(n.h3,{id:"configuring-the-navigator",children:"Configuring the navigator"}),"\n",(0,a.jsx)(n.p,{children:"All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration."}),"\n",(0,a.jsxs)(n.p,{children:["Let's add a second screen to our native stack navigator and configure the ",(0,a.jsx)(n.code,{children:"Home"})," screen to render first:"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsxs)(r.Z,{value:"static",label:"Static",default:!0,children:[(0,a.jsx)(n.pre,{"data-name":"Native Stack Example","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Native Stack Example" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootStack = createNativeStackNavigator({\n  // highlight-next-line\n  initialRouteName: 'Home',\n  screens: {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})}),(0,a.jsxs)(n.p,{children:["Now our stack has two ",(0,a.jsx)(n.em,{children:"routes"}),", a ",(0,a.jsx)(n.code,{children:"Home"})," route and a ",(0,a.jsx)(n.code,{children:"Details"})," route. A route can be specified by under the ",(0,a.jsx)(n.code,{children:"screens"})," property. The name of the property under ",(0,a.jsx)(n.code,{children:"screens"})," corresponds to the name of the route we will use to navigate, and the value corresponds to the component it'll render."]})]}),(0,a.jsxs)(r.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsx)(n.pre,{"data-name":"Native Stack Example","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Native Stack Example" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\n// codeblock-focus-start\nfunction RootStack() {\n  return (\n    // highlight-next-line\n    <Stack.Navigator initialRouteName=\"Home\">\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n      <Stack.Screen name=\"Details\" component={DetailsScreen} />\n    </Stack.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"})}),(0,a.jsxs)(n.p,{children:["Now our stack has two ",(0,a.jsx)(n.em,{children:"routes"}),", a ",(0,a.jsx)(n.code,{children:"Home"})," route and a ",(0,a.jsx)(n.code,{children:"Details"})," route. A route can be specified by using the ",(0,a.jsx)(n.code,{children:"Screen"})," component. The ",(0,a.jsx)(n.code,{children:"Screen"})," component accepts a ",(0,a.jsx)(n.code,{children:"name"})," prop which corresponds to the name of the route we will use to navigate, and a ",(0,a.jsx)(n.code,{children:"component"})," prop which corresponds to the component it'll render."]}),(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["When using the dynamic API, the ",(0,a.jsx)(n.code,{children:"component"})," prop accepts a component, not a render function. Don't pass an inline function (e.g. ",(0,a.jsx)(n.code,{children:"component={() => <HomeScreen />}"}),"), or your component will unmount and remount losing all state when the parent component re-renders. See ",(0,a.jsx)(n.a,{href:"#passing-additional-props",children:"Passing additional props"})," for alternatives."]})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, the ",(0,a.jsx)(n.code,{children:"Home"})," route corresponds to the ",(0,a.jsx)(n.code,{children:"HomeScreen"})," component, and the ",(0,a.jsx)(n.code,{children:"Details"})," route corresponds to the ",(0,a.jsx)(n.code,{children:"DetailsScreen"})," component. The initial route for the stack is the ",(0,a.jsx)(n.code,{children:"Home"})," route. Try changing it to ",(0,a.jsx)(n.code,{children:"Details"})," and reload the app (React Native's Fast Refresh won't update changes from ",(0,a.jsx)(n.code,{children:"initialRouteName"}),", as you might expect), notice that you will now see the ",(0,a.jsx)(n.code,{children:"Details"})," screen. Then change it back to ",(0,a.jsx)(n.code,{children:"Home"})," and reload once more."]}),"\n",(0,a.jsx)(n.h3,{id:"specifying-options",children:"Specifying options"}),"\n",(0,a.jsx)(n.p,{children:"Each screen in the navigator can specify some options for the navigator, such as the title to render in the header."}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsxs)(r.Z,{value:"static",label:"Static",default:!0,children:[(0,a.jsxs)(n.p,{children:["To specify the options, we'll change how we have specified the screen component. Instead of specifying the screen component as the value, we can also specify an object with a ",(0,a.jsx)(n.code,{children:"screen"})," property:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  screens: {\n    Home: {\n      // highlight-next-line\n      screen: HomeScreen,\n    },\n    Details: DetailsScreen,\n  },\n});\n"})}),(0,a.jsx)(n.p,{children:"This will let us specify additional options for the screen."}),(0,a.jsxs)(n.p,{children:["Now, we can add an ",(0,a.jsx)(n.code,{children:"options"})," property:"]}),(0,a.jsx)(n.pre,{"data-name":"Options for Screen","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Options for Screen" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      // highlight-start\n      options: {\n        title: 'Overview',\n      },\n      // highlight-end\n    },\n    Details: DetailsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})}),(0,a.jsxs)(n.p,{children:["Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can add a ",(0,a.jsx)(n.code,{children:"screenOptions"})," property to the configuration:"]}),(0,a.jsx)(n.pre,{"data-name":"Common options for Screens","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Common options for Screens" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootStack = createNativeStackNavigator({\n  initialRouteName: 'Home',\n  // highlight-start\n  screenOptions: {\n    headerStyle: { backgroundColor: 'tomato' },\n  },\n  // highlight-end\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        title: 'Overview',\n      },\n    },\n    Details: DetailsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})]}),(0,a.jsxs)(r.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsxs)(n.p,{children:["Any customization options can be passed in the ",(0,a.jsx)(n.code,{children:"options"})," prop for each screen component:"]}),(0,a.jsx)(n.pre,{"data-name":"Options for Screen","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Options for Screen" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    // codeblock-focus-start\n    <Stack.Navigator initialRouteName=\"Home\">\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        // highlight-next-line\n        options={{ title: 'Overview' }}\n      />\n      <Stack.Screen name=\"Details\" component={DetailsScreen} />\n    </Stack.Navigator>\n    // codeblock-focus-end\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"})}),(0,a.jsxs)(n.p,{children:["Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop to the navigator:"]}),(0,a.jsx)(n.pre,{"data-name":"Common options for Screens","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Common options for Screens" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createNativeStackNavigator();\n\nfunction RootStack() {\n  return (\n    // codeblock-focus-start\n    <Stack.Navigator\n      initialRouteName=\"Home\"\n      // highlight-start\n      screenOptions={{\n        headerStyle: { backgroundColor: 'tomato' },\n      }}\n      // highlight-end\n    >\n      <Stack.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{ title: 'Overview' }}\n      />\n      <Stack.Screen name=\"Details\" component={DetailsScreen} />\n    </Stack.Navigator>\n    // codeblock-focus-end\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootStack />\n    </NavigationContainer>\n  );\n}\n"})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"passing-additional-props",children:"Passing additional props"}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.p,{children:"Passing additional props to a screen is not supported in the static API."})}),(0,a.jsxs)(r.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsx)(n.p,{children:"Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/context.html",children:"React context"})," and wrap the navigator with a context provider to pass data to the screens (recommended)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Use a render callback for the screen instead of specifying a ",(0,a.jsx)(n.code,{children:"component"})," prop:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Stack.Screen name="Home">\n  // highlight-next-line\n  {(props) => <HomeScreen {...props} extraData={someData} />}\n</Stack.Screen>\n'})}),"\n"]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactmemo",children:(0,a.jsx)(n.code,{children:"React.memo"})})," or ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent",children:(0,a.jsx)(n.code,{children:"React.PureComponent"})})," for your screen components to avoid performance issues."]})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsxs)(n.p,{children:['The natural question at this point is: "how do I go from the ',(0,a.jsx)(n.code,{children:"Home"})," route to the ",(0,a.jsx)(n.code,{children:"Details"}),' route?". That is covered in the ',(0,a.jsx)(n.a,{href:"/docs/7.x/navigating",children:"next section"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(r.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"createNativeStackNavigator"})," is a function that takes the screens configuration and renders our content."]}),"\n",(0,a.jsx)(n.li,{children:"Each property under screens refers to the name of the route, and the value is the component to render for the route."}),"\n",(0,a.jsxs)(n.li,{children:["To specify what the initial route in a stack is, provide an ",(0,a.jsx)(n.code,{children:"initialRouteName"})," option for the navigator."]}),"\n",(0,a.jsxs)(n.li,{children:["To specify screen-specific options, we can specify an ",(0,a.jsx)(n.code,{children:"options"})," property, and for common options, we can specify ",(0,a.jsx)(n.code,{children:"screenOptions"}),"."]}),"\n"]})}),(0,a.jsx)(r.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Stack.Navigator"})," is a component that takes route configuration as its children with additional props for configuration and renders our content."]}),"\n",(0,a.jsxs)(n.li,{children:["Each ",(0,a.jsx)(n.code,{children:"Stack.Screen"})," component takes a ",(0,a.jsx)(n.code,{children:"name"})," prop which refers to the name of the route and ",(0,a.jsx)(n.code,{children:"component"})," prop which specifies the component to render for the route. These are the 2 required props."]}),"\n",(0,a.jsxs)(n.li,{children:["To specify what the initial route in a stack is, provide an ",(0,a.jsx)(n.code,{children:"initialRouteName"})," as the prop for the navigator."]}),"\n",(0,a.jsxs)(n.li,{children:["To specify screen-specific options, we can pass an ",(0,a.jsx)(n.code,{children:"options"})," prop to ",(0,a.jsx)(n.code,{children:"Stack.Screen"}),", and for common options, we can pass ",(0,a.jsx)(n.code,{children:"screenOptions"})," to ",(0,a.jsx)(n.code,{children:"Stack.Navigator"}),"."]}),"\n"]})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(86010);const i={tabItem:"tabItem_Ymn6"};var o=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),i=t(86010),o=t(12466),r=t(16550),s=t(20469),c=t(91980),l=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=u(e),[r,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=a.find((e=>e.default)))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[l,h]=m({queryString:t,groupId:i}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,o]=(0,d.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),f=(()=>{const e=null!=l?l:g;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),h(e),v(e)}),[h,v,o]),tabValues:o}}var v=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=s[t].value;i!==a&&(l(n),r(i))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,i.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function S(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(k,{...e,...n})]})}function w(e){const n=(0,v.Z)();return(0,x.jsx)(S,{...e,children:h(e.children)},String(n))}},63621:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/basic_stack_nav-7388d409c412d0c728a0903301338433.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);