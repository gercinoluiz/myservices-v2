import { Ionicons } from "@expo/vector-icons";
import { Avatar, Box, Button, Center, Flex, Icon, Image,Text } from "native-base";

import medalImage from './assets/medal.png'


interface GamingItemButtonProps {
    name?: string
    src?:any
    iconName?: React.ComponentProps<typeof Ionicons>['name']
    color?: string
    text?:string

}


export function GamingItemButton({src,text, name, color, iconName = 'trophy' }: GamingItemButtonProps) {


    return (
        <Center>

            <Text ml='auto' mr='2' bold >{text}</Text>
            
            <Image source={src} size={70} alt='logo'  />
            

            


            <Button variant={'ghost'}>
                {name}
            </Button>
        </Center >
    )

}