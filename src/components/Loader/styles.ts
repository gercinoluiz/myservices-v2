import { Dimensions, StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

const styles = StyleSheet.create({
     container: {
          flex: 1,
          
          alignItems: 'center',
          
          
     },
     //MAIN CARD
     card: {
          // Elevation-Thing
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 3,

          backgroundColor: '#a0a0a0',
          borderColor: '#b0b0b0',
          color: pallete.onSecondary,
          width: Dimensions.get('screen').width - 20,
          // borderRadius: 5,
          height: 185,
          justifyContent: 'space-around',
          marginBottom: 10,
          marginTop: 10,
     },

     logoImage: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: 120,
        height: 100,
        marginTop:100,
        
   },
})

export default styles
