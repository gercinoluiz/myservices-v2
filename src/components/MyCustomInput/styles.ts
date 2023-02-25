import { Dimensions, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface ContainerProps {
     isFocussed?: boolean
     isMultiline?: boolean
}

export const MyCustomInputContainer = styled.View<ContainerProps>`
     width: 100%;
     height: ${RFValue(50)}px;
     background: ${({ theme }) => theme.colors.backgroundWhite};
     margin-bottom: 8px;

     flex-direction: row;
     align-items: center;

     border-bottom-width: 1px;
     border-bottom-color: ${({ theme }) => theme.colors.onSurfaceLight};

     ${({ isFocussed, theme }) =>
          isFocussed &&
          css`
               border-bottom-width: 2px;
               border-bottom-color: ${theme.colors.primary};
          `}

     ${({ isMultiline, theme }) =>
          isMultiline &&
          css`
               height: 105px;
          `}
`

export const MyCustomInputIconContainer = styled.View`
     margin-left: 5px;
`

// You user textInput like this bellow, or else you wont get its props
export const MyCustomInputLoginInput = styled(TextInput)<ContainerProps>`
     background: ${({ theme }) => theme.colors.backgroundWhite};
     color: ${({ theme }) => theme.typography.onSurface};
     width: ${Dimensions.get('window').width - 100}px;
     margin-left: 10px;

     font-size: ${RFValue(18)}px;

     ${({ isMultiline, theme }) =>
          isMultiline &&
          css`
               height: 100px;
          `}
`

export const MyCustomInputVisibilityButton = styled(RectButton)``
