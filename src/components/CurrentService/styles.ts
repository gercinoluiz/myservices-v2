import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

const deviceWidth = Dimensions.get('window').width;


export const Container = styled.View`
     flex-direction: row;
     margin-top: 8px;
     margin-bottom: 8px;

     

     width: ${Dimensions.get('window').width}px;

     background-color: ${({ theme }) => theme.colors.surface};
     align-items: center;
     border-bottom-color: ${({ theme }) => theme.colors.primaryLight};
     border-bottom-width: 4px;
     padding-top:4px;
     padding-bottom:4px;
`

export const SelectedService = styled.Text`
     color: ${({ theme }) => theme.typography.h1};
     font-size: ${deviceWidth / 20}px;

     

     ${
         deviceWidth > 400 && css`
               font-size: ${deviceWidth / 30}px;
          
          `
          
     }

     
     margin-left: 10px;
     margin-right: auto;

     max-width: ${Dimensions.get('window').width - 50}px;

     padding: 4px;
`

export const SelectedServiceIndicator = styled.Text`
     color: ${({ theme }) => theme.typography.h1};
     font-size: ${deviceWidth / 20}px;

     ${
         deviceWidth > 400 && css`
               font-size: ${deviceWidth / 30}px;
          
          `
          
     }

     font-weight: bold;
     margin-left: 10px;
     margin-right: auto;
     margin-bottom: 10px;
     max-width: ${Dimensions.get('window').width - 20}px;
     max-height: 44px;
`

export const ClearFilterButton = styled.TouchableOpacity`
     margin-left: auto;
     margin-right: 1px;
`
