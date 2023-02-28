import React from 'react';
import { Text } from 'react-native'
import {
  Container, IconContainer
} from './styles'
import { Feather } from '@expo/vector-icons';
import pallete from '../../style/pallete';

export function MyHeader() {
  return (
    <Container>

      <IconContainer>

        <Feather name="menu" size={24} color={pallete.onPrimary} />
      </IconContainer>



    </Container>
  )
}