import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
     

     width: ${Dimensions.get('screen').width}px;

     

     height: 50px;

     background-color: ${({ theme }) => theme.colors.primary};

     justify-content:center;

     display:flex;

     

     
`

export const IconContainer = styled.View`
     
margin-left:10px;

     
`

