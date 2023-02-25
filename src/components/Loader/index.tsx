import React, { useEffect } from 'react'
import { View,  StyleSheet,  Dimensions, Image, Text } from 'react-native'

import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Easing } from 'react-native-reanimated'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
     useSharedValue,
     useAnimatedStyle,
     interpolate,
     withTiming,
     runOnJS,
} from 'react-native-reanimated'
import LottieView from 'lottie-react-native'

import loadingAnimation from '../../assets/animations/loading.json'

// const AnimatedLG = Animated.createAnimatedComponent(LinearGradient) // para animar o linear gradient

// const AnimatedValue = new Animated.Value(0)

export function Loader() {
    //  useEffect(() => {
    //       Animated.loop(
    //            Animated.timing(AnimatedValue, {
    //                 toValue: 1,
    //                 duration: 1000,

    //                 useNativeDriver: true,
                    
    //            })
    //       ).start()
    //  }, [])

    //  const translateX = AnimatedValue.interpolate({
    //       inputRange: [0, 1],
    //       outputRange: [
    //            -Dimensions.get('screen').width - 20,
    //            Dimensions.get('screen').width - 20,
    //       ],
    //  })

     return (
          <View style={styles.container}>
               

           
               {/* <MaterialCommunityIcons name="emoticon-happy-outline" size={34} color="black" />
                 <Text>
                    Estamos com dificuldades para carregar o conteúdo. {"\n"}
                    Aguarde por favor...
                 </Text> */}
               <Animated.View style={{marginTop:100, width:100,  justifyContent:'center', alignItems:'center', }}>
               <LottieView
                         source={loadingAnimation}
                         style={{ width: 180, height: 150,}}
                         autoPlay
                         loop
                    >
                         
                    </LottieView>
               <Text style={{fontSize:16}}>Carregando...</Text>

               </Animated.View>

               
          </View>
     )
}
