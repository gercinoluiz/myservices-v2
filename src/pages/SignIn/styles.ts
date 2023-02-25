import { Dimensions, StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

const styles = StyleSheet.create({
     mainView: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: pallete.backgroundlight,
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          marginTop: 2,
     },

     logoView: {
          justifyContent: 'center',
          alignItems: 'center',
     },

     logoImage: {
          resizeMode: 'contain',
          justifyContent: 'center',
          width: 120,
          height: 100,
          marginTop: 3,
     },

     descriptionView: {
          maxWidth: 300,
          marginTop: 10,
          alignItems: 'center',
     },
     descriptionText: {
          color: pallete.primary,
          fontSize: 22,
          textAlign: 'center',
          marginTop: 10,
          fontWeight: 'bold',
     },

     fieldsView: {
          marginTop: 1,
     },

     fieldsViewTextTitle: {
          color: pallete.onSecondary,
          fontSize: 18,
          fontWeight: 'bold',
     },

     fieldsViewTextBox: {
          borderBottomColor: pallete.primary,
          backgroundColor: pallete.backgroundlight,
          borderBottomWidth: 1,
          marginTop: 5,
          height: 40,
     },
     fieldsViewInputTextBoxMesage: {
          borderBottomColor: pallete.primary,
          backgroundColor: pallete.backgroundlight,
          borderBottomWidth: 1,
          height: 80,
     },
     sendButton: {
          height: 50,
          width: 300,
          backgroundColor: pallete.secondary,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          marginTop:30,
          borderRadius: 8,
     },

     sendButtonText: {
          color: pallete.onSecondary,
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 3,
     },

     loginWithGoogleButton: {

 
          


          color: pallete.onPrimary,
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 3,
          flexDirection: 'row',
          
          alignItems: 'center',
          height: 50,

          // borderColor:'#000',

          // borderWidth: 0.2,
      
          backgroundColor:'#fae0e0',

          borderRadius: 8,
          

     },

     loginWithGoogleButtonText: {
          marginLeft: 40,
          color: '#f48585',
          fontSize:20,
          
     },
     loginWithGoogleIcon:{
          marginLeft:10,
          color: '#f48585',

     }

})

export default styles
