import { Dimensions, StyleSheet } from 'react-native';
import pallete from '../../style/pallete';


const styles = StyleSheet.create({



    // Search Items
    searchBoxContainer: {
        flexDirection: 'row',
        backgroundColor: pallete.backgroundlight,
        alignItems:'center',
        marginTop: Dimensions.get('screen').height * 0.0025 // a prop windows exclui o tamanho da status bar
        

    },

    textInput: {
        backgroundColor: pallete.backgroundlight,
        width: Dimensions.get('window').width - 150,
        color:pallete.typography.h1,
        height:70,
        marginLeft:20

    },

    textInputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:1,
        marginLeft:'auto'
    },

    myLocationIcon:{
        marginLeft:'auto',
        marginRight:8
        
        
    },

    menu:{
        marginLeft:20
    },

    searchBoxIcon:{
        marginRight:-1,
        marginLeft:'auto',
        
        backgroundColor: pallete.secondary,
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center'
 
    },
    clearText:{
        marginRight:10,

    }

})

export default styles