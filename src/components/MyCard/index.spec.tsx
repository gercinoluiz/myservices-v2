jest.useFakeTimers()
import React from 'react'
import { render } from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import { ThemeProvider, useTheme } from 'styled-components/native'
import theme from '../../style/lightTheme'
import MyCard from '.'
import { Feather } from '@expo/vector-icons'


const Provider: React.FC = ({ children }) => {
     return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}






describe('My Card ', () => {

     

     it('should compare a snapshot  ', () => {

          
     
          const tree = renderer
               .create(
                    <Provider>
                         <MyCard
                              distance={''}
                              _id={''}
                              name={''}
                              type={''}
                              contact_info={{
                                   scheduleWebSite: '',
                                   website: '',
                                   phone: '',
                                   email: '',
                              }}
                              address={{
                                   street: '',
                                   number: '',
                                   city: '',
                                   country: '',
                                   description: '',
                              }}
                              secretarias={[{ name: '', services: [''] }]}
                              services={[
                                   {
                                        service: {
                                             _id: '',
                                             name: '',
                                             active: true,
                                             isOnline: true,
                                             serviceType: {
                                                  active: true,
                                                  id: '',
                                                  name: '',
                                             },
                                        },
                                        workingTime: [{hours:[{start:'', end:''}], weekDay:''}],
                                   },
                              ]}
                              geographic_position={{
                                   coordinates: undefined,
                              }}
                              workingTime={[{weekDay:'',hours:{start:'', end:''} }]}
                              imagesUrl={[{url:'', descricao:''}]}
                         />
                    </Provider>
               )
               .toJSON()

          expect(tree).toMatchSnapshot()


          // const {debug, } = render(<Provider> <MyCard
          //      distance={''}
          //      _id={''}
          //      name={''}
          //      type={''}
          //      contact_info={{
          //           scheduleWebSite: '',
          //           website: '',
          //           phone: '',
          //           email: '',
          //      }}
          //      address={{
          //           street: '',
          //           number: '',
          //           city: '',
          //           country: '',
          //           description: '',
          //      }}
          //      secretarias={[{ name: '', services: [''] }]}
          //      services={[
          //           {
          //                service: {
          //                     _id: '',
          //                     name: '',
          //                     active: true,
          //                     isOnline: true,
          //                     serviceType: {
          //                          active: true,
          //                          id: '',
          //                          name: '',
          //                     },
          //                },
          //                workingTime: [{hours:[{start:'', end:''}], weekDay:''}],
          //           },
          //      ]}
          //      geographic_position={{
          //           coordinates: undefined,
          //      }}
          //      workingTime={[{weekDay:'',hours:{start:'', end:''} }]}
          //      imagesUrl={[{url:'', descricao:''}]}
          // /></Provider>)

          // debug()

     })
})
