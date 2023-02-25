import { Dimensions, StyleSheet } from 'react-native';
import pallete from '../../style/pallete';


const styles = StyleSheet.create({

    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom:45,
        backgroundColor:pallete.secondary,
        color:pallete.onSecondary
    }

})

export default styles