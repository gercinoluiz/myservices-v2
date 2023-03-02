import {
     AntDesign,
     Entypo,
     Feather,
     FontAwesome
} from '@expo/vector-icons'



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { useTheme } from 'styled-components'
import About from '../pages/About'
import Contact from '../pages/Contact'
import List from '../pages/List'
import Map from '../pages/Map'
// import Login from '../pages/SignUp.old'
import pallete from '../style/pallete'
// import Sigin from '../pages/SignIn.old'
import { Dimensions } from 'react-native'
import { MyHeader } from '../components/MyHeader'
import { useAuthentication } from '../hooks/authHook/UserHook'
import { SignIn } from '../pages/SignIn'

import User from '../pages/User'

const Stack = createStackNavigator()

const Bottom = createBottomTabNavigator()


const deviceHeight = Dimensions.get('window').height;



const Routes = () => {




     return (
          <Bottom.Navigator


               // BOTTOMTAB
               initialRouteName={'User'}

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





function AuthRoutes() {
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
                    name='Auth'
                    component={Routes}
               />

          </Stack.Navigator>
     )
}

export { AuthRoutes }
