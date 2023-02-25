import React from 'react'

import {
     Container,
     OffilineIcon,
     Title,
     MessageView,
     IconImage,
     CustomText,
} from './styles'
import { MaterialIcons } from '@expo/vector-icons';

import noInternetAccessImage from '../../assets/icons/no-internte-conection.png'

import Animated, {
     useSharedValue,
     useAnimatedStyle,
     interpolate,
     withTiming,
     runOnJS,
} from 'react-native-reanimated'
import LottieView from 'lottie-react-native'

import offAnimation from '../../assets/animations/offline.json'

export function IsOffiline() {
     return (
          <Container>
               <MessageView>
               <Animated.View >
                    <LottieView
                         source={offAnimation}
                         style={{ width: 400, height: 300, marginBottom:10 }}
                         autoPlay
                         loop
                    >

                    </LottieView>
               </Animated.View>

                    <Title>Nossa, que chato! </Title>
                    <CustomText>
                         
                         {'\n'}Mas parece que você está sem internet... Verifique
                         e tente novamente.     
                         
                    </CustomText>

                    
               </MessageView>
          </Container>
     )
}
