import { Dimensions, StyleSheet } from 'react-native';
import pallete from '../../style/pallete';


const styles = StyleSheet.create({

    //MAIN CARD
    card: {

        // Elevation-Thing
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,


        backgroundColor: pallete.surface,
        color: pallete.onSecondary,
        width: Dimensions.get('screen').width - 20,
        // borderRadius: 5,
        height: 185,
        justifyContent: 'space-around',
        marginBottom: 10


    },



    cardItemsTop: {
        flexDirection: 'row',

    },

    cardItemsBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },

    cardTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        marginLeft: 10
    },

    // DESCRIPTION 
    titleDescView: {
        maxWidth: 228
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 10,
        color: pallete.onSurfaceLight
    },



    //MAP
    cardMapContainer: {

        // // Elevation-Thing
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1},
        // shadowOpacity: 0.1,
        // shadowRadius: 1,
        // elevation: 1,

        height: 95,
        width: 115,
        marginRight: 10,
        marginLeft: 'auto',
        marginTop: 10,

        borderRadius: 8,
        alignItems: 'center'
    },

    cardMapImage: {
        flex: 1,
        
        borderRadius: 5,
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'

    },

    cardMapText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 2,
        maxWidth: 115,
        color: pallete.primaryDark

    },

    KMText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 2,
        maxWidth: 115,
        
        color: pallete.onSurface

    },



    cardMapDistanceText: {
        color: pallete.secondary,
        fontWeight: 'bold'
    },


    //BOTTOM ICONS

    iconsContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }




})

export default styles