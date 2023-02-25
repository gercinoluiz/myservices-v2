import React, { useMemo, memo, useRef } from 'react'
import { Image, NativeSyntheticEvent, View } from 'react-native'
import MapView, {
     Callout,
     MapCalloutProps,
     MapEvent,
     Marker,
     MarkerProps,
} from 'react-native-maps'
// Icon Images
import { AntDesign, Ionicons } from '@expo/vector-icons'

import CalloutView, { CalloutProps } from '../../components/CalloutView'
import { useLocations } from '../../hooks/LocationHook'
import pallete from '../../style/pallete'
import styles from './styles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


import { UseDetailedLocationModal } from '../../hooks/UseDetailedLocationModal'

import FilterButton from '../../components/FAB'
import GooglePlacesInput from '../../components/GooglePlacesInput'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import MyMapView from './components/MyMapView'
import { CurrentService } from '../../components/CurrentService'
import { useTheme } from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'

import myLocationIcon from '../../assets/icons/my-location.png'
export interface MapProps {}

const Map: React.FC<MapProps> = () => {
     const theme = useTheme()
     const { coordinates, locations } = useLocations()
     const { setVisible, useDetailedLocation } = UseDetailedLocationModal()

     const calloutRef = useRef<Marker>(null)

     return (
          <>

               <SafeAreaView style={styles.mainView}>
               <GooglePlacesInput />
               <CurrentService />
                    <MyMapView
                         style={styles.map}
                         region={{
                              latitude: coordinates().latitude,
                              longitude: coordinates().longitude,
                              latitudeDelta: 0.04,
                              longitudeDelta: 0.05,
                         }}
                    >
                         <Marker
                              key={1}
                              coordinate={{
                                   latitude: coordinates().latitude,
                                   longitude: coordinates().longitude,
                              }}
                              title='Minha localização'
                              pinColor='red'
                         >
                              {/* <FontAwesome name="circle"  size={20} color="#4287f5" /> */}
                              <Image
                                   source={myLocationIcon}
                                   style={{
                                        width: 30,
                                        height: 40,
                                        resizeMode: 'contain',
                                   }}
                              ></Image>
                         </Marker>

                         {locations
                              ? locations!.map((marker, index) => (
                                     <Marker
                                            onCalloutPress={() => {
                                                 useDetailedLocation(marker)

                                                 setVisible()
                                            }}
                                          key={index}
                                          tracksViewChanges={false} // Increases speed a lot
                                          coordinate={{
                                               latitude:
                                                    marker.geographic_position
                                                         .coordinates[1],
                                               longitude:
                                                    marker.geographic_position
                                                         .coordinates[0],
                                          }}
                                          pinColor={pallete.primaryDark}
                                          title={marker.name}
                                          ref={calloutRef}

                                          
                                     >
                                          <Callout
                                               tooltip={true}
                                               style={styles.callout}
                                          >
                                               <CalloutView
                                                    imagesUrl={marker.imagesUrl}
                                                    _id={marker._id}
                                                    address={marker.address}
                                                    contact_info={
                                                         marker.contact_info
                                                    }
                                                    distance={marker.distance}
                                                    geographic_position={
                                                         marker.geographic_position
                                                    }
                                                    name={marker.name}
                                                    secretarias={
                                                         marker.secretarias
                                                    }
                                                    type={marker.type}
                                                    workingTime={
                                                         marker.workingTime
                                                    }
                                                    services={marker.services}
                                               />
                                    
                                          </Callout>
                                     </Marker>
                                ))
                              : null}
                    </MyMapView>
                    <FilterButton />
               </SafeAreaView>
          </>
     )
}

export default Map
