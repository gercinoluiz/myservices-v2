import { Dimensions } from 'react-native'
import styled, {css} from 'styled-components/native'
import Modal, { ModalProps } from 'react-native-modal'
import { List  } from 'react-native-paper'

interface isExpandedProps {

     isExpanded:boolean

}



export const MyModal = styled<any>(Modal)`
     flex: 1;
     align-items: center;
     background-color: ${({ theme }) => theme.colors.backgroundWhite};
     height: ${Dimensions.get('window').height}px;
     width: ${Dimensions.get('window').width}px;
     margin: 0px;
`

//## Main Card

export const InfoContainer = styled.View`
     background-color: ${({ theme }) => theme.colors.backgroundWhite};
     width: ${Dimensions.get('screen').width - 5}px;
     max-height: 800px;

     margin-top: 10px;
`
export const InfoTitle = styled.Text`
     font-size: 20px;
     font-weight: bold;
     color: ${({ theme }) => theme.typography.h1};

     margin-top: 15px;
     margin-bottom: 15px;

     margin-left: 10px;
`

export const InfoText = styled.Text`
     font-size: 18px;
     margin-left: 6px;

     max-width: ${Dimensions.get('screen').width - 50}px;
     margin-top: 8px;

`

export const InfoItemContainer = styled.TouchableOpacity`
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     margin-left: 10px;
     margin-right: auto;
     margin-top: 6px;
     margin-bottom: 6px;

     max-width: ${Dimensions.get('screen').width - 15}px;
`


export const Marker = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;

     margin-top: 15px;

     width: ${Dimensions.get('screen').width}px;

     border-bottom-color: #d4d4d4;
     border-bottom-width: 0.2px;
     background-color: #fff;

     padding-bottom: 15px;
`

//##Buttons

export const CloseButtonContainer = styled.TouchableOpacity`
     flex-direction: row;
     margin-left: auto;
     margin-right: 12px;
     margin-top: 10px;
`

export const CloseButtonText = styled.Text`
     font-size: 18px;
     margin-left: 2px;
     color: ${({ theme }) => theme.typography.onSurface}; ;
`

//# Galery

export const GaleryContainer = styled.View`
     background-color: ${({ theme }) => theme.colors.backgroundWhite};
     width: ${Dimensions.get('screen').width - 5}px;
     max-height: 800px;

     margin-top: 10px;
`

export const GaleryTitle = styled.Text`
     font-size: 20px;
     font-weight: bold;
     color: ${({ theme }) => theme.typography.h1};

     margin-top: 15px;
     margin-bottom: 15px;

     margin-left: 10px;
`

export const ActivitiesContainer = styled.View`
     background-color: ${({ theme }) => theme.colors.backgroundWhite};
     width: ${Dimensions.get('screen').width - 5}px;
     max-height: 800px;

     margin-top: 10px;
`

export const ActivitiesTitle = styled.Text`
     font-size: 20px;
     font-weight: bold;
     color: ${({ theme }) => theme.typography.h1};

     margin-top: 15px;
     margin-bottom: 15px;

     margin-left: 10px;
`

export const SelectedActivitiesContainer = styled.View`
     width: ${Dimensions.get('screen').width - 5}px;

     background-color: ${({ theme }) => theme.colors.backgroundWhite};

 
     
`

//### LIST

export const ListContainer = styled(List.Section).attrs({
     width: '100%',
     padding: 0,
     marginTop: 0,
     marginBottom: 2,
})`

width: 100%;
     padding: 0;
     margin-top: 0;
     margin-bottom: 2px;

`

export const ListAccordionActivities = styled(List.Accordion).attrs({
     width: '100%',
     padding: 0,
     marginTop: 0,
     backgroundColor: '#fff',

     theme: {
          colors: {
               primary: '#003a70',
          },
     },
})`
     margin-bottom: 2px;
     border-left-color: ${({ theme }) => theme.colors.primary};
     border-left-width: 4px;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;


`

export const ListAccordionWeekDay = styled(List.Accordion).attrs({
     width: '100%',
     padding: 0,
     marginTop: 0,
     marginBottom: 2,

     backgroundColor: '#f7f7f7',
     theme: {
          colors: {
               primary: '#003a70',
          },
     },
})`
     margin-left: 10px;
     
`

//###HOURS OF WEEK

export const InfoItemContainerHours = styled.TouchableOpacity<isExpandedProps>`
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     margin-left: 10px;
     margin-right: auto;
     margin-top: 6px;
     margin-bottom: 6px;

     max-width: ${Dimensions.get('screen').width - 15}px;

     ${({isExpanded, theme}) => isExpanded && css`

          background-color: #F7F7F7;

     `};

     
`


export const ListAccordionHours = styled(List.Accordion).attrs<isExpandedProps>({
     theme: {
          colors: {
               primary: '#003a70',
          },
     },
})`
     
     margin: 0px;

     
     padding:0px;


   


     
`


export const HoursContainer = styled.View`
     flex-direction: row;
 
     

     
     width:70%;

     justify-content:space-between;
     

     
`
export const HoursWraper= styled.View`
     
     
     justify-content:center;
     

     
`


export const HourText = styled.Text`
     font-size: 16px;
     font-weight: bold;
     color: ${({ theme }) => theme.typography.h1};

`


export const WeekDay = styled.Text`
     
     
     padding:5px ;
     font-size: 18px;
     
     

`

export const Time = styled.Text`
     margin-left: 0;
     
     padding:5px ;
     font-size: 18px;

`
