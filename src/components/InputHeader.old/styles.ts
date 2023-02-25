import { Dimensions, StyleSheet } from 'react-native';
import pallete from '../../style/pallete';


const styles = StyleSheet.create({



    // Search Items
    searchBoxContainer: {
        flexDirection: 'row',
        backgroundColor: pallete.backgroundlight,
        alignItems:'center',
        

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
        marginRight:20,
        marginLeft:'auto',
    },
    clearText:{
        marginRight:10,

    }

})

export default styles