import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import DetailedLocation from './src/components/DetailedLocation'
import FilterButton from './src/components/FAB'
import ServiceModal from './src/components/ServiceModal'
import AppProvider from './src/hooks'
import { UseDetailedLocationModal } from './src/hooks/UseDetailedLocationModal'
import { NavigationRoutes } from './src/routes/app.routes'
import { ThemeProvider, useTheme } from 'styled-components/native'
import lightTheme from './src/style/lightTheme'
import { MyHeader } from './src/components/MyHeader'
import { navigationRef } from './src/routes/RootNavigation.routes'
import { useLocations } from './src/hooks/LocationHook'
import { Dimensions } from 'react-native'

// import * as Updates from 'expo-updates'

export default function App() {

     const deviceWidth = Dimensions.get('window').width;

          console.log({deviceWidth})
  


     return (
          <ThemeProvider theme={lightTheme}>
               <AppProvider>
                    <SafeAreaProvider>
                         <NavigationContainer ref={navigationRef}>
                              <StatusBar
                                   style='light'
                                   backgroundColor={'#363636'}
                                   
                              />
                              {/* <MyHeader /> */}
                              <NavigationRoutes />

                              <ServiceModal />
                              <DetailedLocation />
                         </NavigationContainer>
                    </SafeAreaProvider>
               </AppProvider>
          </ThemeProvider>
     )
}

// id={detailedLocation?._id} address={detailedLocation?.address} contact_info={detailedLocation?.contact_info} distance={detailedLocation?.distance} geographic_position={detailedLocation?.geographic_position} type={detailedLocation?.type} name={detailedLocation?.name} secretarias={detailedLocation?.secretarias}
