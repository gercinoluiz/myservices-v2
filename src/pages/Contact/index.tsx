import * as Device from 'expo-device'
import { Formik } from 'formik'
import React, { useState } from 'react'
import {
     Alert,
     GestureResponderEvent,
     Keyboard,
     KeyboardAvoidingView,
     Text,
     TouchableOpacity,
     TouchableWithoutFeedback,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInputMask } from 'react-native-masked-text'
import * as yup from 'yup'
import api from '../../services/api'
// import styles from './styles'
import {
     Container,
     Description,
     Title,
     DescriptionContainer,
     ErrorMessage,
     FieldsConteinar,
     SendButton,
} from './styles'

import prodamparavoce from '../../assets/prodamparavoce.png'
import { MyCustomInput } from '../../components/MyCustomInput/indext'
import { MyCustomInputWithMask } from '../../components/MyCustomInputWithMask/indext'
import { MyCustomAlert } from '../../components/MyCustomAlert'

export interface ContactProps {}

const submitMessageFormValidator = yup.object().shape({
     name: yup
          .string()
          .required('Nome obrigatório')
          .max(50, 'Apenas 50 caracteres permitidos'),
     email: yup
          .string()
          .max(50, 'Apenas 50 caracteres permitidos')
          .email('Por favor, digite um email válido')
          .required('Endereço de email é obrigatório'),
     message: yup
          .string()
          .required('Mensagem obrigatória')
          .max(1000, 'Apenas 1.000 caracteres permitidos'),
     phone: yup.string().max(20, 'Apenas 20 caracteres permitidos'),
})

const Contact: React.FC<ContactProps> = () => {
     const [showMessageStatus, setShowMessageStatus] = useState(false)

     const confirmShowMessage = () => {
          setShowMessageStatus(false)
     }

     const [enableKeboardAvoidingView, setEnableKeyBoardAvoidView] = useState(false)

     return (
          //TODO: Consertar com FlatList: Não acho como fazer em typescript

          <KeyboardAvoidingView behavior='position' enabled={enableKeboardAvoidingView}>
               <Container>
                    <ScrollView showsVerticalScrollIndicator={false}>
                         <DescriptionContainer>
                              <Title>Entre em contato conosco </Title>
                              <Description>
                                   Responderemos assim que conseguirmos analizar
                                   sua mensagem 😄
                              </Description>
                         </DescriptionContainer>

                         <Formik
                              validationSchema={submitMessageFormValidator}
                              initialValues={{
                                   name: '',
                                   email: '',

                                   phone: '',
                                   message: '',
                              }}
                              onSubmit={async (
                                   { name, message, phone, email },
                                   { resetForm }
                              ) => {
                                   resetForm({
                                        values: {
                                             name: '',
                                             email: '',

                                             phone: '',
                                             message: '',
                                        },
                                   })

                                   await api.post('/feedbackmessages/create', {
                                        name,
                                        message,
                                        phone,
                                        email,
                                   })

                                   setShowMessageStatus(true)
                              }}
                         >
                              {(formikprops) => (
                                   <FieldsConteinar>
                                        <MyCustomInput
                                             iconName='user'
                                             placeholder='Nome'
                                             onChangeText={formikprops.handleChange(
                                                  'name'
                                             )}
                                             value={formikprops.values.name}
                                             onFocus={()=> setEnableKeyBoardAvoidView (false)}
                                        />

                                        {formikprops.errors && (
                                             <ErrorMessage>
                                                  {formikprops.errors.name}
                                             </ErrorMessage>
                                        )}

                                        <MyCustomInput
                                             iconName='mail'
                                             placeholder='Email'
                                             onFocus={()=> setEnableKeyBoardAvoidView (false)}

                                             onChangeText={formikprops.handleChange(
                                                  'email'
                                             )}
                                             value={formikprops.values.email}
                                             keyboardType='email-address'
                                             caretHidden={
                                                  Device.manufacturer ===
                                                  'Xiaomi'
                                                       ? true
                                                       : false
                                             }
                                             autoCompleteType='email'
                                        />

                                        {formikprops.errors && (
                                             <ErrorMessage>
                                                  {formikprops.errors.email}
                                             </ErrorMessage>
                                        )}

                                        <MyCustomInputWithMask
                                             iconName='phone'
                                             placeholder='Telefone'
                                             onFocus={()=> setEnableKeyBoardAvoidView (true)}

                                             type={'cel-phone'}
                                             options={{
                                                  maskType: 'BRL',
                                                  withDDD: true,
                                                  dddMask: '(99) ',
                                             }}
                                             onChangeText={formikprops.handleChange(
                                                  'phone'
                                             )}
                                             value={formikprops.values.phone}
                                             keyboardType='number-pad'
                                        />

                                        {formikprops.errors && (
                                             <ErrorMessage>
                                                  {formikprops.errors.phone}
                                             </ErrorMessage>
                                        )}

                                        <MyCustomInput
                                             iconName='message-square'
                                             multiline
                                             isMultiline
                                             onFocus={()=> setEnableKeyBoardAvoidView (true)}

                                             placeholder='Digite sua Mensagem'
                                             onChangeText={formikprops.handleChange(
                                                  'message'
                                             )}
                                             value={formikprops.values.message}
                                        />

                                        {formikprops.errors && (
                                             <Text
                                                  style={{
                                                       fontSize: 10,
                                                       color: 'red',
                                                  }}
                                             >
                                                  {formikprops.errors.message}
                                             </Text>
                                        )}

                                        <SendButton
                                             onPress={(
                                                  e: GestureResponderEvent
                                             ) => {
                                                  formikprops.handleSubmit()
                                             }}
                                        >
                                             <Text>Enviar </Text>
                                        </SendButton>
                                   </FieldsConteinar>
                              )}
                         </Formik>
                         <MyCustomAlert
                              showProgress={false}
                              show={showMessageStatus}
                              title='Mensagem enviada com sucesso! '
                              confirmText='OK'
                              onConfirmPressed={confirmShowMessage}
                              showCancelButton={false}
                         ></MyCustomAlert>
                    </ScrollView>
               </Container>
          </KeyboardAvoidingView>
     )
}

export default Contact
