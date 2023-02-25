import { AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons'
import React, { useMemo } from 'react'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import { createOpenLink } from 'react-native-open-maps'

import { UseDetailedLocationModal } from '../../hooks/UseDetailedLocationModal'
import pallete from '../../style/pallete'

import {
     Card,
     CardItemsTop,
     CardItemsBottom,
     TitleDescView,
     CardTitle,
     DescriptionText,
     CardMapContainer,
     CardMapDistanceText,
     CardMapText,
     KmText,
     IconsContainer,
     DistanceIcon,
     PinIcon,
     InfoIcon,
} from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

export interface MyCardProps extends ILocationsObjectType {}

const MyCard: React.FC<MyCardProps> = (data: ILocationsObjectType) => {
     const theme = useTheme()

     const openMap = createOpenLink({
          query: data.address.street,
          end: data.address.street,
     })

     const { setVisible, useDetailedLocation } = UseDetailedLocationModal()

     return (
          <Card>
               <CardItemsTop>
                    <TitleDescView>
                         <CardTitle>{data.name}</CardTitle>

                         <DescriptionText>
                              {data.address.street}
                         </DescriptionText>
                    </TitleDescView>

                    <CardMapContainer>
                         <DistanceIcon
                              name='map-marker-distance'
                              color='#37AAF2'
                         />
                         {/* <MaterialCommunityIcons name="map-marker-distance" size={52} color={pallete.secondary} /> */}

                         <CardMapDistanceText>
                              Distância aproximada
                         </CardMapDistanceText>

                         <CardMapText>
                              {data.distance} km
                              {/* <KmText style={styles.KMText}> km</KmText> */}
                         </CardMapText>
                    </CardMapContainer>
               </CardItemsTop>

               <CardItemsBottom>
                    <IconsContainer onPress={openMap}>
                         <PinIcon
                              name='location-pin'
                              size={32}
                              color='#ff6b61'
                         />
                         <Text style={{ color: pallete.secondary }}>
                              Ver no mapa
                         </Text>
                    </IconsContainer>

                    {/* <TouchableOpacity onPress={() => Linking.openURL(data.contact_info.scheduleWebSite)} style={styles.iconsContainer}>
                    <AntDesign name="calendar" size={32} color='#4287f5' />
                    <Text>Agendar</Text>
                </TouchableOpacity> */}

                    <IconsContainer
                         onPress={() => {
                              useDetailedLocation(data)

                              setVisible()
                         }}
                         style={{marginLeft:100}}
                    >
                         <InfoIcon name='info' size={24}  />
                         <Text style={{ color: pallete.secondary }}>
                              Informações
                         </Text>
                    </IconsContainer>
               </CardItemsBottom>
          </Card>
     )
}

export default MyCard

// () => Linking.openURL(data.contact_info.website)} style={styles.iconsContainer}
