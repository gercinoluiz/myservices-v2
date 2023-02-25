import { AntDesign } from '@expo/vector-icons'
import React from 'react'

import { ButtonCircle, Container } from './styles'

interface MyActionButtonProps {

    iconName: React.ComponentProps<typeof AntDesign>['name'];

}

export function MyActionButton( {iconName, ...rest}:MyActionButtonProps) {
     return (
          
               <ButtonCircle>
                    <AntDesign name={iconName} {...rest} size={24} color='white' />
               </ButtonCircle>
          
     )
}
