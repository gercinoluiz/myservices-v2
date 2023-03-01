import { Dimensions, StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

const styles = StyleSheet.create({
     mainView: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: pallete.background,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          marginTop:4,
     },

     selectedServiceView: {
          flexDirection: 'row',
          marginVertical: 10,
          width: Dimensions.get('window').width ,

          backgroundColor: pallete.backgroundlight,

          alignItems: 'center',
          // borderRadius: 8,
          borderBottomColor: pallete.secondary,
          borderBottomWidth: 4,
     },
     selectedService: {
          color: pallete.secondary,
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: 10,
          marginRight: 'auto',

          maxWidth: Dimensions.get('window').width - 50,

          padding: 4,
     },

     selectedServiceIndicator: {
          color: pallete.typography.h1,
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: 10,
          marginRight: 'auto',
          marginBottom: 10,
          maxWidth: Dimensions.get('window').width - 20,
          maxHeight: 44,
     },
     divider: {
          height: 5,
          borderBottomColor: pallete.primaryLight,
          borderTopColor: pallete.primaryLight,
          borderBottomWidth: 1,
          // borderTopWidth: 1,
          marginBottom: 10,

          width: Dimensions.get('window').width - 20,
     },

     noresultsView: {
          justifyContent: 'center',
          alignItems: 'center',
     },

     noResultsText: {
          fontWeight: 'bold',
          fontSize: 18,
          color: pallete.primary,
     },

     keepSearchingText: {
          fontSize: 16,
          color: pallete.primaryLight,
          textAlign: 'center',
          marginTop: 5,
     },

     sadImage: {
          resizeMode: 'contain',
          justifyContent: 'center',
          width: 60,
          height: 40,
          marginTop: 20,
     },

     clearFilterButton: {
          
          marginLeft: 'auto',
     },

     iconsView:{
          flexDirection:'row',
          marginLeft: 'auto',
          marginRight:10,
          marginTop:2,
          height:30
     },
     icons:{
          padding:3,
     }
})

export default styles
