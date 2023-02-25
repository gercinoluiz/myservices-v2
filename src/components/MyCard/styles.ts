import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions, View } from 'react-native'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

const deviceWidth = Dimensions.get('window').width;

export const Card = styled.View.attrs({
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.5,
     shadowRadius: 2,
     elevation: 3,
     aspectRatio: 10 / 4.5,
})`
     background-color: ${({ theme }) => theme.colors.surface};
     color: ${({ theme }) => theme.typography.onSecondary};

     justify-content: space-around;
     margin-bottom: 10px;
     width: ${Dimensions.get('screen').width - 20}px;
`

export const CardItemsTop = styled.View`
     flex-direction: row;
`

export const CardItemsBottom = styled.View`
     flex-direction: row;
     justify-content: space-around;
`



export const CardTitle = styled.Text.attrs({})`
     font-weight: bold;
     margin-top: 5px;
     font-size: ${deviceWidth / 25}px;
     margin-left: 10px;
`

export const TitleDescView = styled.View`
     max-width: 70%;
`

export const DescriptionText = styled.Text`
          font-size: ${deviceWidth / 28}px;

     margin-top: 5px;
     margin-left: 10px;
     color: ${({ theme }) => theme.colors.onSurfaceLight};
`

export const CardMapContainer = styled(View).attrs({
     aspectRatio: 10 / 9

})`
     
     width: 30%;
     margin-right: 10px;
     margin-left: auto;
     margin-top: 10px;

     border-radius: 8px;
     align-items: center;
     justify-content: center;
     text-align: center;
   
`

export const CardMapDistanceText = styled.Text`
     color: #565656;
     text-align: center;
     font-size: ${deviceWidth / 33}px;

`

export const CardMapText = styled.Text`
     font-weight: bold;
     font-size: ${RFValue(18)}px;
     margin-top: 2px;
     max-width: 115px;
     color: ${({ theme }) => theme.typography.onSurfaceLight};
`
export const KmText = styled.Text`
     font-weight: bold;
     font-size: ${RFValue(16)}px;
     margin-top: 2px;
     max-width: 115px;
`

export const IconsContainer = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
`



// ICONS
export const DistanceIcon = styled(MaterialCommunityIcons).attrs({

     size:deviceWidth / 10
     
})`

   /* font-size:${RFPercentage(6)}px; */

`

export const PinIcon = styled(Entypo).attrs({
     size:deviceWidth / 11

     
})`

   /* font-size:${RFPercentage(5)}px; */

`

export const InfoIcon = styled(Feather).attrs({

     size:deviceWidth / 14

     
})`

   /* font-size:${RFPercentage(4)}px; */
   align-items: center;
     justify-content: center;

     color: ${({ theme }) => theme.colors.secondary};

`
