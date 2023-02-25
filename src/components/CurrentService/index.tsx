import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'styled-components'
import { useLocations } from '../../hooks/LocationHook'
import { useLocationTypes } from '../../hooks/LocationTypesHook'
import { useServices } from '../../hooks/ServicesHook'

import {
     ClearFilterButton,
     Container,
     SelectedService,
     SelectedServiceIndicator,
} from './styles'

export function CurrentService() {
     const { fetchLocationsWithCoordinates, coordinates } = useLocations()
     const { locationType, changeLocationType } = useLocationTypes()

     const theme = useTheme()
     const { service, changeService } = useServices()
     const { latitude, longitude } = coordinates()

     const handleClearFilter = () => {
          changeService(undefined)
          changeLocationType(undefined)
          fetchLocationsWithCoordinates({ latitude, longitude })
     }

     return (
          <Container>
               <View>
                    <SelectedService>
                         <SelectedServiceIndicator>
                              {service ? 'Atividade: ' : 'Atividade: '}
                         </SelectedServiceIndicator>
                         {service?.name
                              ? service.name
                              : locationType?.name
                              ? locationType?.name
                              : 'Todas'}
                    </SelectedService>
               </View>

               <ClearFilterButton onPress={() => handleClearFilter()}>
                    <AntDesign
                         name='close'
                         size={24}
                         color={service?.name ? 'red' : '#999999'}
                         style={{ marginRight: 15 }}
                    />
               </ClearFilterButton>
          </Container>
     )
}
