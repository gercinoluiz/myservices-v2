import React, { useState } from 'react'
import { TextInputProps, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import {
     MyCustomInputContainer,
     MyCustomInputIconContainer,
     MyCustomInputLoginInput,
     MyCustomInputVisibilityButton,
} from './styles'

import { useTheme } from 'styled-components'

interface IInputProps extends TextInputProps {
     iconName: React.ComponentProps<typeof Feather>['name']
     type?: 'default' | 'password'
     value: string
     isMultiline?:boolean
}

export function MyCustomInput({ isMultiline,iconName, type, value, ...rest }: IInputProps) {
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
          <MyCustomInputContainer isFocussed={isFocused} isMultiline={isMultiline}>
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
                    secureTextEntry={passwordVisible && type === 'password'}
                    placeholder={rest.placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    isMultiline={isMultiline}
                    {...rest}
                    
               />

               {type && (
                    <MyCustomInputVisibilityButton
                         onPress={handlePasswordVisibility}
                    >
                         <Feather
                              name={passwordVisible ? 'eye' : 'eye-off'}
                              color={theme.colors.primary}
                              size={24}
                         />
                    </MyCustomInputVisibilityButton>
               )}
          </MyCustomInputContainer>
     )
}
