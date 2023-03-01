import { Input, InputRightAddon } from "native-base";
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from "react-native";
import { useState } from "react";


interface CustomInputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    type?: "text" | "password"
    secureTextEntry?:boolean
    placeholder?: string
    
}


export function CustomInput({ iconName, type='text', placeholder, secureTextEntry = false,  ...rest }: CustomInputProps) {


    const [iconShow, setIconShow] = useState(false)


    return (

        <Input  fontSize={'lg'}

       
        placeholder={placeholder}
        type={type}
        secureTextEntry={!iconShow && type === "password"} 
        _focus={{
            borderColor:'colors.primary', backgroundColor:'white'
        }} 
        
        InputLeftElement={<Feather name={iconName}  size={24} color="black" style={{ marginLeft: 2, marginRight:4 }} />} 

        

        InputRightElement={type==='password' ? <Feather onPress={()=>setIconShow(!iconShow)} name={iconShow ? 'eye': 'eye-off'}  size={24} color="black" style={{ marginLeft: 2, marginRight:4 }} /> :<></>} 
        
        w='100%' 
        
        />

       
        
    )

}