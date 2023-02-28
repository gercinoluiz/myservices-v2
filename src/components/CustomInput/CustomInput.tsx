import { Input } from "native-base";
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from "react-native";


interface CustomInputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    type?: string
    secureTextEntry?:boolean
    placeholder?: string
}


export function CustomInput({ iconName, type, placeholder, secureTextEntry = false, ...rest }: CustomInputProps) {


    return (

        <Input  variant="underlined" fontSize={'lg'} secureTextEntry={secureTextEntry} leftElement={<Feather name={iconName} placeholder={placeholder} size={24} color="black" type={type} style={{ marginLeft: 2, marginRight:4 }} />} w='80%' mt='1' mb='1' />
    )

}