import React, { useState } from 'react'
import { TextInputProps, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { TextInputMaskProps } from 'react-native-masked-text'


import {
     MyCustomInputContainer,
     MyCustomInputIconContainer,
     MyCustomInputLoginInput,
     MyCustomInputVisibilityButton,
} from './styles'

import { useTheme } from 'styled-components'

interface IInputProps extends TextInputMaskProps {
     iconName: React.ComponentProps<typeof Feather>['name']
     
     value: string
}

export function MyCustomInputWithMask({ iconName, type, value, ...rest }: IInputProps) {
     const theme = useTheme()
     const [passwordVisible, setPasswordVisible] = useState(true)
     const [isFocused, setIsFocused] = useState(false)
     const [isFilled, setIsFilled] = useState(false)

     function handlePasswordVisibility() {
          setPasswordVisible(!passwordVisible)
     }

     function handleFocus() {
          setIsFocused(true)
     }

     function handleBlur() {
          setIsFocused(false)
          setIsFilled(!!value)
     }

     return (
          <MyCustomInputContainer isFocussed={isFocused}>
               <MyCustomInputIconContainer>
                    <Feather
                         name={iconName}
                         size={24}
                         color={
                              isFocused || isFilled
                              ? theme.colors.primary
                              : theme.colors.onSurfaceLight
                         }
                    />
               </MyCustomInputIconContainer>
               <MyCustomInputLoginInput
                    type={'cel-phone'}
                   
                    placeholder={rest.placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}
               />

    
          </MyCustomInputContainer>
     )
}
