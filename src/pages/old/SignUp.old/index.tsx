// import * as Device from 'expo-device'
// import { Formik } from 'formik'
// import React from 'react'
// import {
//      Alert,
//      GestureResponderEvent,
//      Image,
//      Text,
//      TextInput,
//      TouchableOpacity,
//      View,
// } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'
// import * as yup from 'yup'
// import logoPrefeitura from '../../assets/meditation.png'
// import api from '../../services/api'
// import styles from './styles'

// import { useAuthentication } from '../../hooks/authHook/UserHook'
// import { AntDesign, MaterialIcons } from '@expo/vector-icons'
// import pallete from '../../style/pallete'

// export interface LoginProps {}

// // name: '',
// // email: '',

// // phone: '',
// // message: ''

// const submitMessageFormValidator = yup.object().shape({
//      password: yup.string().required('Nome Obrigatório'),
//      email: yup
//           .string()
//           .email('Por favor, digite um email válido')
//           .required('Endereço de email é obrigatório'),
// })

// const successAlert = () =>
//      Alert.alert(
//           'Mensagem',
//           'Sua mensagem foi enviada com sucesso, Obrigado!',
//           [
//                {
//                     text: 'OK',
//                     style: 'destructive',
//                },
//           ]
//      )

// const Login: React.FC<LoginProps> = () => {
//      const { signUp } = useAuthentication()

//      const handleLogin = (provider: TProvider) => {
//           signUp(provider)
//      }

//      return (
//           //TODO: Consertar com FlatList: Não acho como fazer em typescript

//           <View style={styles.mainView}>
//                <ScrollView showsVerticalScrollIndicator={false}>
//                     <View style={styles.descriptionView}>
//                          {/* <Image
//                               style={styles.logoImage}
//                               source={logoPrefeitura}
//                          /> */}
//                               <MaterialIcons
//                               name='login'
//                               size={84}
//                               style={{ marginTop: 20 }}
//                               color={pallete.primary}
//                          />

//                          <Text style={styles.descriptionText}>Cadastro</Text>
//                     </View>

//                     <Formik
//                          validationSchema={submitMessageFormValidator}
//                          initialValues={{
//                               password: '',
//                               email: '',
//                          }}
//                          onSubmit={async (
//                               { password, email },
//                               { resetForm }
//                          ) => {
//                               await api.post('/feedbackmessages/create', {
//                                    password,

//                                    email,
//                               })

//                               resetForm()
//                               successAlert()
//                          }}
//                     >
//                          {(formikprops) => (
//                               <View style={styles.fieldsView}>
//                                    <TextInput
//                                         placeholder='Email'
//                                         style={styles.fieldsViewTextBox}
//                                         onChangeText={formikprops.handleChange(
//                                              'email'
//                                         )}
//                                         value={formikprops.values.email}
//                                    />

//                                    {formikprops.errors && (
//                                         <Text
//                                              style={{
//                                                   fontSize: 10,
//                                                   color: 'red',
//                                              }}
//                                         >
//                                              {formikprops.errors.email}
//                                         </Text>
//                                    )}

//                                    <TextInput
//                                         placeholder='Senha'
//                                         style={styles.fieldsViewTextBox}
//                                         onChangeText={formikprops.handleChange(
//                                              'password'
//                                         )}
//                                         value={formikprops.values.password}
//                                         caretHidden={
//                                              Device.manufacturer === 'Xiaomi'
//                                                   ? true
//                                                   : false
//                                         }
//                                    />

//                                    <TouchableOpacity
//                                         style={styles.sendButton}
//                                         onPress={(e: GestureResponderEvent) => {
//                                              formikprops.handleSubmit()
//                                         }}
//                                    >
//                                         <Text style={styles.sendButtonText}>
//                                              Cadastrar{' '}
//                                         </Text>
//                                    </TouchableOpacity>
//                               </View>
//                          )}
//                     </Formik>

//                     <TouchableOpacity
//                          style={styles.loginWithGoogleButton}
//                          onPress={() => handleLogin('google')}
//                     >
//                          <AntDesign
//                               style={styles.loginWithGoogleIcon}
//                               name='google'
//                               size={24}
//                               color='black'
//                          />
//                          <Text style={styles.loginWithGoogleButtonText}>
//                               Cadastrar com Google
//                          </Text>
//                     </TouchableOpacity>
//                </ScrollView>
//           </View>
//      )
// }

// export default Login
