import React from 'react'
import { LocationProvider } from '../hooks/LocationHook'
import { DetailedLocationProvider } from './UseDetailedLocationModal'
import { ModalProvider } from './ModalHook'
import { ServiceProvider } from './ServicesHook'
import { ImageModalProvider } from './ImageModalHook'

import { AuthProvider } from './authHook/UserHook'

import { ThemeProvider } from './ThemeHook'
import { ServiceTypeProvider } from './ServiceTypesHook'
import { LocationTypeProvider } from './LocationTypesHook'

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
     return (
          <ThemeProvider>
               <LocationProvider>
                    <DetailedLocationProvider>
                         <ModalProvider>
                              <ImageModalProvider>
                                   <AuthProvider>
                                        <ServiceProvider>
                                             <ServiceTypeProvider>
                                                  <LocationTypeProvider>
                                                       {children}
                                                  </LocationTypeProvider>
                                             </ServiceTypeProvider>
                                        </ServiceProvider>
                                   </AuthProvider>
                              </ImageModalProvider>
                         </ModalProvider>
                    </DetailedLocationProvider>
               </LocationProvider>
          </ThemeProvider>
     )
}

export default AppProvider
