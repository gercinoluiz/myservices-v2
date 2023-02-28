import { Button, Flex, HStack, Image } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import googleLogo from './google-logo.png'
import { ButtonProps, Dimensions, Pressable } from "react-native";

const deviceHeight = Dimensions.get('window').height;


interface EntrarButton
 {

}


export function EntrarButton ({...rest}:EntrarButton){

   return (
    
        

        
        <Button bgColor={'colors.secondary'}  w='80%' h={deviceHeight * 0.07} >Entrar</Button>
    
   )

}