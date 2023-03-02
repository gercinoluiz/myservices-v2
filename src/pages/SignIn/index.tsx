import React, { useState } from 'react'
import { Alert, GestureResponderEvent } from 'react-native'


import { Formik } from 'formik'
import { Box, Center, Flex, Image, Text, Button } from 'native-base'
import * as yup from 'yup'
import { CustomInput } from '../../components/CustomInput/CustomInput'
import { EntrarButton } from '../../components/EntrarButton/EntrarButton'
import { GoogleButton } from '../../components/GoogleButton/GoogleButton'
import { useAuthentication } from '../../hooks/authHook/UserHook'
import api from '../../services/api'
import logo from './logo-1.png'
import logo2 from './logo-2.png'



const submitMessageFormValidator = yup.object().shape({
     password: yup.string().required('Nome Obrigatório'),
     email: yup
          .string()
          .email('Por favor, digite um email válido')
          .required('Endereço de email é obrigatório'),
})

const successAlert = () =>
     Alert.alert(
          'Mensagem',
          'Sua mensagem foi enviada com sucesso, Obrigado!',
          [
               {
                    text: 'OK',
                    style: 'destructive',
               },
          ]
     )




export function SignIn(props: any) {





     const { signIn, signUp, changeEvent } = useAuthentication()

     const [entrar, setEntrar] = useState(true)



     const handleLogin = (provider: TProvider, event: string) => {

          if (event === 'signIn') {
               changeEvent('signIn')
               signIn(provider)
          } else if (event === 'signUp') {
               changeEvent('signUp')
               signUp(provider)
          }

     }



     return (
          <Center flex={1} bgColor='#fff'>
               <Image alt="Entrar" w='90%' mt='-10' h='40%' resizeMode="contain" source={logo2} />




               <Formik
                    validationSchema={submitMessageFormValidator}
                    initialValues={{
                         password: '',
                         email: '',
                    }}
                    onSubmit={async (
                         { password, email },
                         { resetForm }
                    ) => {
                         await api.post('/users/signup', {
                              password,

                              email,
                         })

                         resetForm()
                         successAlert()
                    }}
               >
                    {(formikprops) => (
                         <Center w='80%'>
                              <Text bold fontSize={'30'} ml='1' mr='auto'>
                                   {entrar ? 'Entrar' : 'Cadastrar'}
                              </Text>
                              <CustomInput iconName='user' placeholder='Email'
                                   onChangeText={formikprops.handleChange(
                                        'email'
                                   )}

                                   value={formikprops.values.email}
                              />

                              {formikprops.errors && (
                                   <Text
                                        style={{
                                             fontSize: 10,
                                             color: 'red',
                                        }}
                                   >
                                        {formikprops.errors.email}
                                   </Text>
                              )}

                              <CustomInput
                                   iconName='lock'
                                   placeholder='Senha'
                                   type='password'

                                   onChangeText={formikprops.handleChange(
                                        'password'
                                   )}
                                   value={formikprops.values.password}
                              //  caretHidden={
                              //       Device.manufacturer === 'Xiaomi'
                              //            ? true
                              //            : false
                              //  }
                              />
                              <Box mt='10' />
                              <EntrarButton
                                   onPress={(e: GestureResponderEvent) => {
                                        formikprops.handleSubmit()
                                   }}
                              />
                              <GoogleButton

                                   onPress={() => {
                                        handleLogin('google', entrar ? 'signIn' : 'signUp')
                                        // props.navigation.navigate('User')
                                        // console.log('teste')
                                   }} name={entrar ? 'Entrar com Google': 'Cadastrar com Google'} />

                              <Flex mt='4' w='100%' align={'center'} direction='row' justify={'center'}>

                                   <Text fontSize={'lg'}>
                                        {entrar ? 'Não tem uma conta?' : 'Ou faça'}
                                   </Text>
                                   
                                   <Button variant={'ghost'} onPress={() => {
                                        // props.navigation.navigate('SignUp')

                                        setEntrar(!entrar)

                                   }}>
                                        <Text padding={0} ml='-2' fontSize={'lg'} bold color='colors.primary'>
                                             {entrar ? 'Cadastre-se' : 'Login'}
                                        </Text>
                                   </Button>


                              </Flex>



                         </Center>
                    )}
               </Formik>




          </Center>)

}

