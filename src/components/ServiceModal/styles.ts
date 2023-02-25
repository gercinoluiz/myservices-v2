import { Dimensions, StyleSheet } from 'react-native'
import pallete from '../../style/pallete'

const screenWidth = Dimensions.get('screen').width
const screenHight = Dimensions.get('screen').height

const styles = StyleSheet.create({
     // Modal Items
     modalContainer: {
          backgroundColor: pallete.backgroundlight,
          alignItems: 'center',
          borderRadius: 8,
          flex: 1,
          width: screenWidth,
          height: screenHight,
     },

     topIconsContainer: {
          flexDirection: 'row',
          width: screenWidth,
          alignItems: 'center',
          height: 60,
     },

     closeTouchableOpacity: {
          marginRight: 30,
          marginLeft: 'auto',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
     },

     removeFilterView: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginLeft: 30,
          width: 130,
     },

     modal: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },

     dropDownList: {
          flexDirection: 'row',
          height: 45,
          width: Dimensions.get('screen').width -20,
          borderBottomColor: pallete.primary,
          borderBottomWidth: 1,
          borderRadius: 8,
          
          alignItems: 'center',
          marginBottom: 20,
          
     },

     dropDownListTextInput: {
          color: pallete.onSurfaceLight,
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft: 10,
          
          
          width: Dimensions.get('screen').width - 80,

     },

     expandMore: {
          
     },

     // title: {
     //     color: pallete.onSecondary,
     //     fontWeight: 'bold',
     //     fontSize: 18,
     //     marginBottom: 20,
     //     width:350,
     //     marginLeft:10
     // },

     onlineService: {
          flexDirection: 'row',
          alignItems: 'center',
          width: 300,
          marginLeft: 20,
     },

     onlineServiceText: {
          color: pallete.backgroundlight,
          fontSize: 17,
          marginLeft: 20,
     },

     flatListView: {
          backgroundColor: pallete.backgroundlight,
          elevation: 3,
          flex: 1,

          width: Dimensions.get('screen').width - 10,
          marginRight: 6,

          marginBottom: 10,

          //Corrigir o height
     },

     flatListViewItem: {
          backgroundColor: pallete.backgroundlight,
          borderBottomColor: pallete.onPrimary,
          borderBottomWidth: 1.5,
          padding: 10,
          borderLeftColor: pallete.primary,
          borderLeftWidth: 4,
          flexDirection: 'row',

          alignItems: 'center',
     },

     flatListViewItemText: {
          fontSize: 16,
          maxWidth: 215,
     },

     flatListViewItemIcon:{
        
        marginRight:2
     },
     flatListViewItemCategory:{
        marginLeft:'auto',
        marginRight:15,
        color:pallete.onSurfaceLight,
        fontSize:12
        
     },
     clearText: {},

     
     onlineView:{
          alignItems:'center'
     },

     onlineText:{
          fontSize:8,
          color:pallete.onSurfaceLight
     }
})

export default styles
