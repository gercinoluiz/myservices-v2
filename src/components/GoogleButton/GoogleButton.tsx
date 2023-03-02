import { Button, Flex, HStack, Image } from "native-base";
import { Ionicons } from '@expo/vector-icons';

import googleLogo from './google-logo.png'
import { ButtonProps, Dimensions, Pressable } from "react-native";

const deviceHeight = Dimensions.get('window').height;


interface GoogleButtonProps {
    onPress?:(props?:any)=> void
    name:string
}


export function GoogleButton ({onPress, name, ...rest}:GoogleButtonProps){

   return (
    <HStack  w='100%' borderWidth={1} h={deviceHeight * 0.07}  marginTop={'1'} borderColor={'gray.300'} justifyContent='center' alignItems={'center'} padding={2}>
        <Image alt="Login com google" size={30} source={googleLogo}/>

        
        <Button  onPress={onPress} variant={'ghost'}  >{name}</Button>
    </HStack>
   )

}