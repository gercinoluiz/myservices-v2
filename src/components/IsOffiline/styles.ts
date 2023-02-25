import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
     flex: 1;
     align-items: center;
     justify-content: center;
`

export const MessageView = styled.View`
     align-items: center;
     justify-content: center;
     max-height: 200px;
     max-width: 300px;
`

export const Title = styled.Text`
     font-size: ${RFValue(20)}px;
`

export const CustomText = styled.Text`
     font-size: ${RFValue(16)}px;
     text-align:center;
`

export const OffilineIcon = styled(Feather).attrs({
     name: 'wifi-off',
     size: 14,
     color: 'black',

     
})`

  

`

export const IconImage = styled.Image.attrs({
     resizeMode: 'contain',
})`
     max-height: 120px;
     max-width: 120px;
     margin-bottom: 10px;
`
