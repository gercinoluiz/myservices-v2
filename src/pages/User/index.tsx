import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import {
     Entypo,
     Feather,
     MaterialCommunityIcons,
     MaterialIcons,
} from '@expo/vector-icons'
import {
     DrawerContentScrollView,
     DrawerItem,
     useDrawerStatus,
} from '@react-navigation/drawer'
import { isEmpty } from 'lodash'

import {
     Avatar,
     Caption,
     Drawer,
     Paragraph,
     Title,
     TouchableRipple,
} from 'react-native-paper'

import { useAuthentication } from '../../hooks/authHook/UserHook'
import { asyncStorageUser } from '../../hooks/authHook/userStorage'
import { useTheme } from '../../hooks/ThemeHook'
import pallete from '../../style/pallete'
import styles from './styles'
import { GoogleButton } from '../../components/GoogleButton/GoogleButton'
import { Box, Center, Image, VStack } from 'native-base'
import { EntrarButton } from '../../components/EntrarButton/EntrarButton'

import logo from './logo.png'
import { CustomInput } from '../../components/CustomInput/CustomInput'

export function User() {
     //====================USER======================
     const { user, updateUser } = useAuthentication()



     // useEffect(() => {
     //      handleGetUser()
     // }, [isDrawerOpen])

     // const handleGetUser = async () => {
     //      const response = await asyncStorageUser.getUser()

     //      if (response) {
     //           updateUser(response)
     //      }
     // }

     // const handleLogout = () => {
     //      asyncStorageUser.removeUser()

     //      updateUser(undefined)

     //      props.navigation.closeDrawer()
     // }

     //===================THEME=====================



     // const loggedUser = () => {
     //      if (!isEmpty(user) && user !== undefined) {
     //           // console.log('IT WORKS!', { user })

     //           return (
     //                <View style={styles.userInfoSection}>
     //                     <View style={styles.userInfoView}>
     //                          <Avatar.Image
     //                               source={{
     //                                    uri: user.avatarUrl,
     //                               }}
     //                               size={70}
     //                          />
     //                          <View style={styles.userInfoViewText}>
     //                               <TouchableRipple
     //                                    onPress={() =>
     //                                         props.navigation.navigate('Login')
     //                                    }
     //                               >
     //                                    <Title style={styles.title}>
     //                                         {user.name}
     //                                    </Title>
     //                               </TouchableRipple>

     //                               <Caption style={styles.caption}>
     //                                    {user.contact_info?.email}
     //                               </Caption>
     //                          </View>
     //                     </View>

     //                     {/* <View style={styles.row}>
     //                          <View style={styles.section}>
     //                               <Paragraph
     //                                    style={[
     //                                         styles.paragraph,
     //                                         styles.caption,
     //                                    ]}
     //                               >
     //                                    Nível 🥇
     //                               </Paragraph>
     //                          </View>
     //                          <View style={styles.section}>
     //                               <Paragraph
     //                                    style={[
     //                                         styles.paragraph,
     //                                         styles.caption,
     //                                    ]}
     //                               >
     //                                    🪙 100
     //                               </Paragraph>
     //                               <Caption style={styles.caption}>
     //                                    Pontos
     //                               </Caption>
     //                          </View>
     //                     </View> */}
     //                </View>
     //           )
     //      } else {
     //           // console.log('FUCK!', { user })
     //           return (
     //                <View style={styles.userInfoSection}>
     //                     <View style={styles.userInfoView}>
     //                          {/* <Avatar.Image
     //                               source={avatar}
     //                               size={70}
     //                               style={{ backgroundColor: '#fff' }}
     //                          /> */}
     //                          <View style={styles.userInfoViewText}></View>
     //                     </View>

     //                     {/* <View style={styles.row}>
     //                          <View style={styles.section}>
     //                               <Paragraph
     //                                    style={[
     //                                         styles.paragraph,
     //                                         styles.caption,
     //                                    ]}
     //                               >
     //                                    Nível 🥇 *
     //                               </Paragraph>
     //                          </View>
     //                          <View style={styles.section}>
     //                               <Paragraph
     //                                    style={[
     //                                         styles.paragraph,
     //                                         styles.caption,
     //                                    ]}
     //                               >
     //                                     100
     //                               </Paragraph>
     //                               <Caption style={styles.caption}>
     //                                    Pontos *
     //                               </Caption>
     //                          </View>
     //                     </View> */}
     //                </View>
     //           )
     //      }
     // }

     // const subscriptionView = () => {
     //      if (isEmpty(user) || user === undefined) {
     //           return (
     //                <View style={styles.loginView}>
     //                     <TouchableRipple
     //                          onPress={() => props.navigation.navigate('Sigin')}
     //                          style={styles.touchableRippleLogin}
     //                     >
     //                          <Text style={styles.touchableRippleLoginText}>
     //                               Entrar
     //                          </Text>
     //                     </TouchableRipple>

     //                     <TouchableRipple
     //                          onPress={() => props.navigation.navigate('Login')}
     //                          style={styles.touchableRippleSubscribe}
     //                     >
     //                          <Text style={styles.touchableRippleSubscribeText}>
     //                               Cadastrar
     //                          </Text>
     //                     </TouchableRipple>
     //                </View>
     //           )
     //      }
     // }

     return (
          <Center flex={1} bgColor='#fff'>




               <Image alt="Login com google" w='90%' mt='-10' h='40%' resizeMode="contain" source={logo} />
               <CustomInput iconName='user' placeholder='Usuário'  />
               <CustomInput iconName='lock'  
  placeholder='Senha' secureTextEntry/>

               <Center mt='8' w='100%'>
                    <EntrarButton />
                    <GoogleButton />
               </Center>



          </Center>
     )
}
