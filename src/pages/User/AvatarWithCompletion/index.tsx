import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'native-base';

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//   },
//   completionBorder: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
// });

interface AvatarWithCompletionProps{
  source:any
  percentage:number
  name?:string
}

const AvatarWithCompletion = ({ source,name, percentage }:AvatarWithCompletionProps) => {
  const completionColor = percentage < 100 ? 'red' : 'green';
  const completionAngle = percentage * 3.6; // 3.6 degrees per percent

  return (
    
      <Avatar
  

      size="2xl"
        source={source} 
        borderWidth={5}
        borderColor={'teal.400'}
  
        
        
      >
        {name}
      </Avatar>
    
  );
};

export default AvatarWithCompletion;