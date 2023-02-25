import React from 'react'

import AwesomeAlert, { AwesomeAlertProps } from 'react-native-awesome-alerts'
import { useTheme } from 'styled-components'

interface MyCustomAlertProps extends AwesomeAlertProps {}

import { Container } from './styles'

export function MyCustomAlert({ ...rest }: MyCustomAlertProps) {

    const theme = useTheme()
     return (
          <AwesomeAlert
               {...rest}
               contentStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    padding: 0,
                    marginBottom: 5,
               }}
               messageStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
               }}
               closeOnTouchOutside={true}
               closeOnHardwareBackPress={false}
               showConfirmButton={true}
               
               cancelButtonColor={theme.colors.primary}
               confirmButtonColor={theme.colors.secondary}


          >
               
          </AwesomeAlert>
     )
}
