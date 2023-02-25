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

import notFound from '../../assets/animations/not-found.json'

export function NotFound() {
     return (
          <Container>
               <MessageView>
               <Animated.View >
                    <LottieView
                         source={notFound}
                         style={{ width: 300, height: 200, marginBottom:10 }}
                         autoPlay
                         loop
                    >

                    </LottieView>
               </Animated.View>

                    <Title>Nossa, que chato! </Title>
                    <CustomText>
                         
                         {'\n'}Mas parece que não encontramos o que você procurava... Mas não desanime! Continue procurando!     
                         
                    </CustomText>

                    
               </MessageView>
          </Container>
     )
}
