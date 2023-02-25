import numeral from 'numeral'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { UseDetailedLocationModal } from '../../hooks/UseDetailedLocationModal'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import pallete from '../../style/pallete'
export interface CalloutProps extends ILocationsObjectType {}

const CalloutView = (data: ILocationsObjectType) => {
     

     return (
          <View style={styles.callout}>
               <Text style={styles.nameText}>{data.name.toUpperCase()}</Text>

               <Text style={styles.distanceText}>
               <MaterialCommunityIcons name="map-marker-distance" size={18} color={pallete.primaryLight} />
                    {numeral(data.distance).format('00.00')} KM
               </Text>
               <TouchableOpacity
               
                    style={styles.touchableOpacityDetails}
               >
                    <Text style={styles.touchableOpacityDetailsText}>
                         Informações
                    </Text>
               </TouchableOpacity>
          </View>
     )
}

export default CalloutView
