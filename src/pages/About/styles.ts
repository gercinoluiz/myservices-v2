import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
//scpt
//exsc
export const Container = styled.View`
     flex: 1;;
     justify-content:center;
     align-items:center;
`

export const DescriptionView = styled.View`
     max-width: 400px;
     margin-top: 40px;
     align-items: center;
     padding: 10px;
`

export const TextParagraph = styled.Text`
     color: ${({ theme }) => theme.typography.onSurface};
     font-size: ${RFValue(22)}px;
     text-align: center;
`

export const Logo = styled.Image.attrs({
     resizeMode: 'contain'
})`
     
     justify-content: center;
     width: 150px;
     height: 150px;
     margin-top:auto;
     margin-bottom:10px;

     

     
     
`
