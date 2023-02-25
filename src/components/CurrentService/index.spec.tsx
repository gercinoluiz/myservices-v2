import React from 'react'

import { render } from '@testing-library/react-native'

import { ThemeProvider } from 'styled-components/native'
import theme from '../../style/lightTheme'
import { CurrentService } from '.'
import { useServices } from '../../hooks/ServicesHook'

import renderer from 'react-test-renderer'
import { useLocations } from '../../hooks/LocationHook'
import 'jest-styled-components'





const Provider: React.FC = ({ children }) => {
     return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}



const useLocationsMock = useLocations as jest.Mock
const useServicesMock = useServices as jest.Mock

jest.mock('../../hooks/LocationHook',  () => ({
     useLocations:  () =>  {
          return  {
               coordinates: () => ({
                    latitude: -23.550522,
                    longitude: -46.6342979,
               }),
          }
     },
}))

jest.mock('../../hooks/ServicesHook',  () => ({
     useServices: () => {
          return {
               service:{
                    name:'futebol',
               }
          }
     },
}))

describe('Current Service', () => {

  
     test('it works', async () => {


          const tree =  renderer
               .create(
                    <Provider>
                         <CurrentService />
                    </Provider>
               )
               .toJSON();

          expect(tree).toMatchSnapshot()
     })
})
