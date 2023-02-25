import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Formik } from 'formik'


// use keyboard avoiding view

export const Container = styled.View`
     align-items: center;
     background-color: ${({ theme }) => theme.colors.backgroundWhite};
     height: ${Dimensions.get('window').height}px;
     width: ${Dimensions.get('window').width}px;
     
     justify-content: center;
     
     
`

export const DescriptionContainer = styled.View`
     max-width: 300px;
     margin-top: 10px;
     
     margin-bottom: 30px;
     


`

export const Title = styled.Text`
     color: ${({ theme }) => theme.colors.primary};
     font-size: 22px;

     margin-top: 20px;
     font-weight: bold;
`
export const Description = styled.Text`
     color: ${({ theme }) => theme.colors.primary};
     font-size: 14px;

     margin-top: 10px;
`

export const FieldsConteinar = styled.View`
     margin-top: 1px;
     align-items: center;
     
     
     height:${Dimensions.get('window').height - 300}px; ;

`

export const ErrorMessage = styled.Text`
     font-size: ${RFValue(10)}px;
     color: ${({ theme }) => theme.colors.error};
`

export const Message = styled.TextInput`
     border-bottom-color: ${({ theme }) => theme.colors.primary};
     background-color: ${({ theme }) => theme.colors.background};
     border-bottom-width: 1px;
     height: 80px;
`

export const SendButton = styled.TouchableOpacity`
     height: 40px;
     width: 300px;
     background-color: ${({ theme }) => theme.colors.secondary};
     justify-content: center;
     align-items: center;
     
     margin-top: auto;
     border-radius: 8px;
`

