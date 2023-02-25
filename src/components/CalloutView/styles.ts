import { StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

const styles = StyleSheet.create({
     //MAIN CARD
     callout: {
          marginHorizontal: 5,
          
     },

     nameText: {
          fontWeight:'bold',
          marginTop:10,
          maxWidth:230
     },

     distanceText: {
          fontSize: 14,
          
          marginVertical:5

     },

     touchableOpacityDetails: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: pallete.secondary,
          borderRadius: 8,
          width: '100%',
          marginBottom: 10,
     },

     touchableOpacityDetailsText: {
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 14,
          padding: 5,
     },
})

export default styles
