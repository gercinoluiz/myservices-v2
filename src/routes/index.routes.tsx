
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useAuthentication } from '../hooks/authHook/UserHook'


export function NavigationRoutes() {
     const { user } = useAuthentication()

     console.log('function Routes()',{user})

     return user?.name ? <AuthRoutes /> : <AppRoutes /> 
         
     

}