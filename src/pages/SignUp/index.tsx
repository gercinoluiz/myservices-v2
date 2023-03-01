import React from 'react'
import { Alert, GestureResponderEvent } from 'react-native'


import { Formik } from 'formik'
import { Box, Center, Flex, Image, Text } from 'native-base'
import * as yup from 'yup'
import { CustomInput } from '../../components/CustomInput/CustomInput'
import { EntrarButton } from '../../components/EntrarButton/EntrarButton'
import { GoogleButton } from '../../components/GoogleButton/GoogleButton'
import { useAuthentication } from '../../hooks/authHook/UserHook'
import api from '../../services/api'
import logo from './logo.png'

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

export function SignUp(props: any) {

     //================USER===================

     const { user, updateUser } = useAuthentication()

     const {  signUp } = useAuthentication()

     // const { register, handleSubmit, formState: { errors }, reset } = useForm({
     //      resolver: yupResolver(submitMessageFormValidator),
     //      defaultValues: {
     //           email: '',
     //           password: ''
     //      }
     // });



     const handleLogin = (provider: TProvider) => {
          signUp(provider)
     }



     return (
          <Center flex={1} bgColor='#fff'>
               <Image alt="Entrar" w='90%' mt='-10' h='40%' resizeMode="contain" source={logo} />




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
                         await api.post('/feedbackmessages/create', {
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
                                   Cadastre-se
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
                                        handleLogin('google');
                                        props.navigation.navigate('User')
                                        // console.log('teste')
                                   }}
                              />





                         </Center>
                    )}
               </Formik>




          </Center>
     )
}

