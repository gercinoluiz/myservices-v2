import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;


//I have solved this, since the button component already using TouchableOpacity, you should't using another clickable component, just use regular component such View, and Text.

export const ButtonCircle = styled.View`
     width: 40px;
     height: 40px;
     background-color: rgba(0, 0, 0, 0.2);
     border-radius: 20px;
     justify-content: center;
     align-items: center;
`
