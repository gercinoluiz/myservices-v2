import React, { useState } from 'react'
import { Container } from './styles'
import AppIntroSlider from 'react-native-app-intro-slider';

import prodampravoce from '../../assets/prodamparavoce.png'
import tutorialHome from '../../assets/tutorialImages/home.png'
import { MyActionButton } from './MyActionButton';
import { View , Text} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { RenderItemView } from './RenderItemView';


// https://www.npmjs.com/package/react-native-app-intro-slider

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: tutorialHome,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: prodampravoce,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: prodampravoce,
    backgroundColor: '#22bcb5',
  }
];





export function Tutorial() {

  const[showTutorial, setShowTutorial] = useState(false)


  const onDone = () => {

  }
const onSkip = () => {
    
  }
     return (
          <Container>
              <AppIntroSlider
              data={slides}
               keyExtractor={({title})=> title}
              renderDoneButton={()=> <MyActionButton iconName='check'/>}
              renderNextButton={()=> <MyActionButton iconName='arrowright'/>}
              renderPrevButton={()=> <MyActionButton iconName='arrowleft'/>}
              showPrevButton
              renderSkipButton={()=> <MyActionButton iconName='close'/>}
              renderItem={({item})=>{
                return (
                  <RenderItemView item={item}/>
                )
              }}
              


              />

              
          </Container>
     )
}
