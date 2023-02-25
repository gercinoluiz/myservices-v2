import { Dimensions, StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

const styles = StyleSheet.create({
     mainView: {
          flex: 1,

          backgroundColor: pallete.background,
     },
     map: {
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
     },

     callout: {
          minWidth: 230,
          
          maxWidth: 300,
          maxHeight: 300,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,0.85)',
          flexDirection: 'row',
          justifyContent:'center',
          alignItems:'center'
     },
})

export default styles
