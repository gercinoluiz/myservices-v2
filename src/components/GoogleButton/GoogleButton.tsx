import { Button, Flex, HStack, Image } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import googleLogo from './google-logo.png'
import { ButtonProps, Dimensions, Pressable } from "react-native";

const deviceHeight = Dimensions.get('window').height;


interface GoogleButtonProps {

}


export function GoogleButton ({...rest}:GoogleButtonProps){

   return (
    <HStack  w='80%'borderWidth={1} h={deviceHeight * 0.07}  marginTop={'1'} borderColor={'gray.300'} justifyContent='center' alignItems={'center'} padding={2}>
        <Image alt="Login com google" size={30} source={googleLogo}/>

        
        <Button  variant={'ghost'}  >Login com Google</Button>
    </HStack>
   )

}