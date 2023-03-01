import { Button, Flex, HStack, Image } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import googleLogo from './google-logo.png'
import { ButtonProps, Dimensions, Pressable } from "react-native";

const deviceHeight = Dimensions.get('window').height;


interface EntrarButton {

   onPress?:(props?:any)=> void

}


export function EntrarButton ({onPress, ...rest}:EntrarButton){

   return (
    
        

        
        <Button bgColor={'colors.secondary'} onPress={onPress} w='100%' h={deviceHeight * 0.07} >Entrar</Button>
    
   )

}