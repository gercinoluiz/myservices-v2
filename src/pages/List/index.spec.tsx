
import React from 'react'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import { ThemeProvider, useTheme } from 'styled-components/native'
import theme from '../../style/lightTheme'
import MyCard from '.'
import { Feather } from '@expo/vector-icons'
import List from '.'
import { debug } from 'react-native-reanimated'

const Provider: React.FC = ({ children }) => {
     return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

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


describe('List Page', () => {
     it(' should check if a alert is showed when nothing apears on the list ', () => {

            const {debug,getAllByA11yLabel} = render(<Provider><List /></Provider>)

           debug()


     })
})
