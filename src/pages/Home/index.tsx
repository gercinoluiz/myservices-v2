import React from 'react'
import { useModal } from '../../hooks/ModalHook'

import {
     Container,
     SearBoxContainer,
     LogoContainer,
     ServiceTypesContainer,
     SearchBox,
     SearchIcon,
     ServiceTypesItem,
     ServiceTypesItemText,
     ServiceIconContainer,
} from './styles'
import {
     AntDesign,
     MaterialCommunityIcons,
     MaterialIcons,
} from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import logoexample from '../../assets/example-logo.png'
import { FlatList } from 'react-native-gesture-handler'
import { useServiceTypes } from '../../hooks/ServiceTypesHook'
import { useLocations } from '../../hooks/LocationHook'
import { useServices } from '../../hooks/ServicesHook'
import { useLocationTypes } from '../../hooks/LocationTypesHook'

export function Home({ ...props }) {
     const theme = useTheme()

     const { setVisible } = useModal()

     const handleOpenModal = () => {
          setVisible()
     }

     const { serviceTypes, changeServiceType } = useServiceTypes()

     const {locationTypes, changeLocationType, } = useLocationTypes()
     const { changeService } = useServices()

     const { fetchAllLocationsPassisgCordinatesAndLocationType } = useLocations()

     const handlefetchAllLocationsPassisCordinatesAndServiceType = (
          item: ILocationType
     ) => {
          fetchAllLocationsPassisgCordinatesAndLocationType(item)

          changeLocationType(item)
          changeService(undefined)

          props.navigation.navigate('Lista')
     }

     const handleIcons = (iconName: any) => {
          try {
               return (
                    <MaterialIcons
                         name={iconName}
                         size={18}
                         color={theme.colors.secondaryLight}
                    />
               )
          } catch (error) {
               return (
                    <MaterialIcons
                         name='arrow-right'
                         size={18}
                         color={theme.colors.secondaryLight}
                         


                    />
               )
          }
     }

     return (
          <Container>
               <LogoContainer source={logoexample} />

               <SearBoxContainer onPress={handleOpenModal}>
                    <SearchBox />
                    <SearchIcon color={theme.colors.primary} />
               </SearBoxContainer>

               <ServiceTypesContainer>
                    <FlatList
                         numColumns={3}
                         data={locationTypes ? locationTypes : null}
                         keyExtractor={(item) => item._id}
                         renderItem={({ item }) => (
                              <ServiceTypesItem
                                   onPress={() => {
                                        handlefetchAllLocationsPassisCordinatesAndServiceType(
                                             item
                                        )
                                   }}
                              >
                                

                                   <ServiceTypesItemText>
                                        {item.name}
                                   </ServiceTypesItemText>
                              </ServiceTypesItem>
                         )}
                    ></FlatList>
               </ServiceTypesContainer>
          </Container>
     )
}
