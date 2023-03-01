import {
     AntDesign,
     Entypo,
     Feather,
     FontAwesome,
     FontAwesome5,
     Ionicons,
} from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTheme } from 'styled-components'
import { DrawerMenu } from '../components/DrawerMenu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import List from '../pages/List'
import Map from '../pages/Map'
// import Login from '../pages/SignUp.old'
import pallete from '../style/pallete'
// import Sigin from '../pages/SignIn.old'
import { Splash } from '../pages/Splash'
import { Home } from '../pages/Home'
import { MyHeader } from '../components/MyHeader'
import { Tutorial } from '../components/Tutorial'
import ServiceModal from '../components/ServiceModal'
import { Dimensions, TextInput } from 'react-native'
import { SignUp } from '../pages/SignUp'
import User from '../pages/User'
import { SignIn } from '../pages/SignIn'

const Stack = createStackNavigator()

const Bottom = createBottomTabNavigator()

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
     const theme = useTheme()
     return (
          <Drawer.Navigator
               initialRouteName='BottomNavigator'
               drawerContent={(props) => <DrawerMenu {...props} />}
               screenOptions={{
                    headerStyle: {
                         backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: theme.colors.primary,
                    headerTitleStyle: {
                         color: theme.colors.primary,
                    },
                    headerShown: false,
               }}
          >
               <Drawer.Screen
                    name='BottomNavigator'
                    component={BottomNavigator}
               />
               {/* <Drawer.Screen name='Login' component={Login} /> */}
               {/* <Drawer.Screen name='Sigin' component={Sigin} /> */}
          </Drawer.Navigator>
     )
}
// const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const BottomNavigator = () => {
     return (
          <Bottom.Navigator


               // BOTTOMTAB
               initialRouteName='SignIn'

               screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: pallete.onPrimary2,
                    tabBarInactiveTintColor: '#BDBDBD',
                    tabBarIconStyle: {
                         color: pallete.secondary
                    },
                    tabBarActiveBackgroundColor: pallete.secondary,



                    tabBarStyle: {
                         backgroundColor: pallete.primary,
                         height: deviceHeight * 0.08
                    }
               }}







          >

               <Bottom.Screen

                    name='Mapa'


                    options={{
                         tabBarIcon: ({ color }) => (
                              <FontAwesome name='map' size={24} color={color} />
                         ),



                    }}

                    component={Map}
               />



               <Bottom.Screen
                    name='Lista'
                    options={{
                         tabBarIcon: ({ color }) => (
                              <FontAwesome
                                   name='building'
                                   size={24}
                                   color={color}

                              />
                         ),

                    }}
                    component={List}
               />

               <Bottom.Screen
                    name='Contato'
                    options={{
                         tabBarIcon: ({ color }) => (
                              <Entypo name='message' size={28} color={color} />
                         ),
                    }}
                    component={Contact}
               />

               <Bottom.Screen
                    name='Sobre'
                    options={{
                         tabBarIcon: ({ color }) => (
                              <AntDesign
                                   name='infocirlce'
                                   size={24}
                                   color={color}
                              />
                         ),
                    }}
                    component={About}
               />


               <Bottom.Screen
                    name='SignIn'
                    options={{
                         tabBarIcon: ({ color }) => (
                              <Feather name="user" size={24} color={pallete.onPrimary} />


                         ),
                    }}

                    component={SignIn}

               />

               <Bottom.Screen
                    name='User'
                    options={{
                         tabBarIcon: ({ color }) => (
                              <Feather name="user" size={24} color={pallete.onPrimary} />


                         ),
                    }}

                    component={User}

               />

               {/* <Bottom.Screen name='Tutorial' component={Tutorial} /> */}
          </Bottom.Navigator>
     )
}

function NavigationRoutes() {
     const theme = useTheme()

     return (
          <Stack.Navigator
               screenOptions={{
                    headerShown: false,
                    headerStyle: {
                         height: 0,
                         backgroundColor: theme.colors.primary,
                    },
                    headerTitle: '',
                    header: () => <MyHeader />,
               }}
               initialRouteName='Splash'
          >
               {/* <Stack.Screen name='Drawer' component={DrawerNavigator} />
               <Stack.Screen name='Splash' component={Splash} /> */}
               <Stack.Screen
                    name='BottomNavigator'
                    component={BottomNavigator}
               />
                    <Stack.Screen
                    name='SignUp'
                    component={SignUp}
               />
          </Stack.Navigator>
     )
}

export { NavigationRoutes }
