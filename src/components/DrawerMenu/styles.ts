import { Dimensions, StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

export const styles = StyleSheet.create({
     drawerContent: {
          flex: 1,
     },
     userInfoSection: {
          alignItems: 'center',
          maxWidth: 278,
          justifyContent: 'center',
     },
     userInfoView: {
          alignItems: 'center',
          marginTop: 20,
     },

     loginButton: {
          width: 200,
          alignItems: 'center',
     },

     userInfoViewText: {
          alignItems: 'center',
     },

     title: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
     },

     loginText: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
          color: pallete.primary,
     },
     caption: {
          fontSize: 12,
          lineHeight: 14,
     },
     row: {
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
     },
     section: {
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
     },
     paragraph: {
          fontWeight: 'bold',
          marginRight: 3,
     },
     drawerSection: {
          marginTop: 15,
     },
     bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1,
     },
     preference: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
     },

     loginView: {
          marginTop:150,
          marginBottom: 5,
          alignItems: 'center',
          
     },
     touchableRippleLogin: {
          height: 40,
          
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:10,
          
          borderRadius: 6,
          backgroundColor: pallete.primary,
          width:'90%'
     },
     touchableRippleSubscribe: {
          height: 40,
          width:'90%',
          justifyContent: 'center',
          alignItems: 'center',

          borderRadius: 6,
          backgroundColor: pallete.secondary,
     },
     touchableRippleLoginText: {
          fontSize: 18,
          fontWeight:'bold',
          color:'#FFF',
     },
     touchableRippleSubscribeText: {
          fontSize: 18,
          fontWeight:'bold',
          color:'#FFF',
     },
})
