import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Animated, {
     useSharedValue,
     useAnimatedStyle,
     interpolate,
     withTiming,
     runOnJS,
} from 'react-native-reanimated'
// withTiming => deixar a animacao suave, dizer o tempo da animacao
// Easing=> dentro do withTiming, dentro de ease: acelerar ou diminuir a animacao
import LottieView from 'lottie-react-native'

import cityAnimation from '../../assets/animations/city.json'
import prodamLogo from '../../assets/prodamLogo-blue-fullName.png'

export function Splash({ ...props }) {
     const logoAnimation = useSharedValue(0)

     const logoStyles = useAnimatedStyle(() => {
          return {
               opacity: interpolate(
                    logoAnimation.value,
                    [0, 25, 50],
                    [0, 0.5, 1]
               ),

               //transform recebe um array porque posso animar o eixo x e y
               transform: [
                    {
                         translateX: interpolate(
                              logoAnimation.value,
                              [0, 50],
                              [-100, 0]
                         ),
                    },
               ],
          }
     })

     const textStyles = useAnimatedStyle(() => {
          return {
               opacity: interpolate(
                    logoAnimation.value,
                    [0, 25, 50],
                    [0, 0.5, 1]
               ),

               //transform recebe um array porque posso animar o eixo x e y
               transform: [
                    {
                         translateX: interpolate(
                              logoAnimation.value,
                              [0, 50],
                              [150, 15]
                         ),
                    },
               ],
          }
     })

     function startApp() {
          // I have to put this line up back when get the drawer menu back
             props.navigation.navigate('Drawer', { screen: 'BottomNavigator' })
     }

     useEffect(() => {
          logoAnimation.value = withTiming(
               50,
               {
                    duration: 3000,
               },
               () => {
                    'worklet'
                    runOnJS(startApp)()
               }
          )
     }, [])

     return (
          <View style={{ flex: 1, justifyContent: 'center',  }}>
               <Animated.View>
                    {/* Lottie sempre deve ficar dentro de uma view animada */}
                    <LottieView
                         source={cityAnimation}
                         style={{ width: 180, height: 180 }}
                         autoPlay
                         loop
                    />
               </Animated.View>
               <View
                    style={{
                         marginLeft: 'auto',
                         marginRight: 10,
                         
                    }}
               >
                    <Animated.View style={[animatedText.main, textStyles]}>
                         <Text>powered by</Text>
                    </Animated.View>

                    <Animated.View style={[animatedLogo.main, logoStyles]}>
                         <View>
                              <Image
                                   source={prodamLogo}
                                   style={{
                                        width: 180,
                                        height: 50,
                                        resizeMode: 'contain',
                                   }}
                              />
                         </View>
                    </Animated.View>
               </View>
          </View>
     )
}

const animatedLogo = StyleSheet.create({
     main: {},
})
const animatedText = StyleSheet.create({
     main: {},
})
