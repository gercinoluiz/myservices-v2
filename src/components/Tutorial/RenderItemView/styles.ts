import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items:center;
`;


export const ImageContainer = styled.Image.attrs({
  resizeMode:'cover'
})`

  width:100%;
  height:100%;
  margin-top:100px;


`

export const DescriptionContainer = styled.View`
  margin-top:50px;
  background-color:red;
  width:${Dimensions.get('screen').width};

`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.fonts.xLarge};
  margin-bottom:50px;
`

export const Description = styled.Text`

`