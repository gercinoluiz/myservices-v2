import styled from 'styled-components/native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

export const Container = styled.View`
     flex:1;
     align-items: center;
     
     justify-content:center;
     
     
`

export const SearBoxContainer = styled.TouchableOpacity`
     justify-content: space-between;
     
     align-items: center;
     flex-direction: row;
     width: ${Dimensions.get('screen').width - 20}px;
     
`

export const SearchBox = styled.TextInput.attrs({
     placeholder: 'Digite o serviço que busca',
     editable:false,
})`
     height: 50px;
     
`

export const SearchIcon = styled(AntDesign).attrs({
     name: 'search1',
     size: 24,
})``

export const LogoContainer = styled.Image.attrs({
     resizeMode: 'contain'
})`
     margin-top: 10px;
     margin-bottom: 10px;
     height:50px;
     width:200px;
     
`

export const ServiceTypesContainer = styled.View`
     flex-direction: row;

     justify-content: center;

     height: 80%;
`
export const ServiceTypesItem = styled.TouchableOpacity`
     margin: 8px;
     padding: 5px;
     background-color: ${({ theme }) => theme.colors.primaryLight};
     width: 115px;
     align-items: center;
     justify-content: center;
     text-align: center;
     height: 100px;
     border-radius: 8px;
     
     
`
export const ServiceTypesItemText = styled.Text`
     font-size: ${({ theme }) => RFValue(theme.typography.fonts.small)}px;
     color: ${({ theme }) => theme.typography.onSecondary};
     font-weight: bold;
     text-align: center;
`

export const ServiceIconContainer = styled.View`
     margin-left: 2px;
     margin-right: auto;
`
