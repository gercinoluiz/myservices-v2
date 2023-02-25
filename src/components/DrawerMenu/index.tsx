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
import { styles } from './styles'

export function DrawerMenu(props: any) {
     //====================USER======================
     const { user, updateUser } = useAuthentication()

     const isDrawerOpen = useDrawerStatus()

     useEffect(() => {
          handleGetUser()
     }, [isDrawerOpen])

     const handleGetUser = async () => {
          const response = await asyncStorageUser.getUser()

          if (response) {
               updateUser(response)
          }
     }

     const handleLogout = () => {
          asyncStorageUser.removeUser()

          updateUser(undefined)

          props.navigation.closeDrawer()
     }

     //===================THEME=====================

     const [themeSwitcher, setThemeSwitcher] = useState(false)

     const { toggleTheme, colorPallete, theme } = useTheme()

     const handleTheme = () => {
          setThemeSwitcher(!themeSwitcher)
          toggleTheme()
     }

     const loggedUser = () => {
          if (!isEmpty(user) && user !== undefined) {
               // console.log('IT WORKS!', { user })

               return (
                    <View style={styles.userInfoSection}>
                         <View style={styles.userInfoView}>
                              <Avatar.Image
                                   source={{
                                        uri: user.avatarUrl,
                                   }}
                                   size={70}
                              />
                              <View style={styles.userInfoViewText}>
                                   <TouchableRipple
                                        onPress={() =>
                                             props.navigation.navigate('Login')
                                        }
                                   >
                                        <Title style={styles.title}>
                                             {user.name}
                                        </Title>
                                   </TouchableRipple>

                                   <Caption style={styles.caption}>
                                        {user.contact_info?.email}
                                   </Caption>
                              </View>
                         </View>

                         {/* <View style={styles.row}>
                              <View style={styles.section}>
                                   <Paragraph
                                        style={[
                                             styles.paragraph,
                                             styles.caption,
                                        ]}
                                   >
                                        Nível 🥇
                                   </Paragraph>
                              </View>
                              <View style={styles.section}>
                                   <Paragraph
                                        style={[
                                             styles.paragraph,
                                             styles.caption,
                                        ]}
                                   >
                                        🪙 100
                                   </Paragraph>
                                   <Caption style={styles.caption}>
                                        Pontos
                                   </Caption>
                              </View>
                         </View> */}
                    </View>
               )
          } else {
               // console.log('FUCK!', { user })
               return (
                    <View style={styles.userInfoSection}>
                         <View style={styles.userInfoView}>
                              {/* <Avatar.Image
                                   source={avatar}
                                   size={70}
                                   style={{ backgroundColor: '#fff' }}
                              /> */}
                              <View style={styles.userInfoViewText}></View>
                         </View>

                         {/* <View style={styles.row}>
                              <View style={styles.section}>
                                   <Paragraph
                                        style={[
                                             styles.paragraph,
                                             styles.caption,
                                        ]}
                                   >
                                        Nível 🥇 *
                                   </Paragraph>
                              </View>
                              <View style={styles.section}>
                                   <Paragraph
                                        style={[
                                             styles.paragraph,
                                             styles.caption,
                                        ]}
                                   >
                                         100
                                   </Paragraph>
                                   <Caption style={styles.caption}>
                                        Pontos *
                                   </Caption>
                              </View>
                         </View> */}
                    </View>
               )
          }
     }

     const subscriptionView = () => {
          if (isEmpty(user) || user === undefined) {
               return (
                    <View style={styles.loginView}>
                         <TouchableRipple
                              onPress={() => props.navigation.navigate('Sigin')}
                              style={styles.touchableRippleLogin}
                         >
                              <Text style={styles.touchableRippleLoginText}>
                                   Entrar
                              </Text>
                         </TouchableRipple>

                         <TouchableRipple
                              onPress={() => props.navigation.navigate('Login')}
                              style={styles.touchableRippleSubscribe}
                         >
                              <Text style={styles.touchableRippleSubscribeText}>
                                   Cadastrar
                              </Text>
                         </TouchableRipple>
                    </View>
               )
          }
     }

     return (
          <View style={{ flex: 1 }}>
               <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                         {loggedUser()}

                         <Drawer.Section style={styles.drawerSection}>
                              <DrawerItem
                                   activeTintColor={pallete.primary}
                                   icon={({ color, size }) => (
                                        <Entypo
                                             name='home'
                                             size={24}
                                             color={pallete.primary}
                                        />
                                   )}
                                   label='Lista'
                                   onPress={() => {
                                        props.navigation.navigate('Lista')
                                   }}
                              />
                              {/* <DrawerItem
                                   icon={({ color, size }) => (
                                        <MaterialCommunityIcons
                                             name='account'
                                             size={24}
                                             color={pallete.primary}
                                        />
                                   )}
                                   label='Perfil  *'
                                   onPress={() => {
                                        props.navigation.navigate('Lista')
                                   }}
                              /> */}

                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <Feather
                                             name='map'
                                             size={24}
                                             color={pallete.primary}
                                        />
                                   )}
                                   label='Mapa'
                                   onPress={() => {
                                        props.navigation.navigate('Mapa')
                                   }}
                              />
                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <Entypo
                                             name='mail'
                                             size={24}
                                             color={pallete.primary}
                                        />
                                   )}
                                   label='Suporte'
                                   onPress={() => {
                                        props.navigation.navigate('Contato')
                                   }}
                              />

                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <MaterialIcons
                                             name='contact-support'
                                             size={24}
                                             color={pallete.primary}
                                        />
                                   )}
                                   label='Sobre'
                                   onPress={() => {
                                        props.navigation.navigate('Sobre')
                                   }}
                              />
                         </Drawer.Section>
                    </View>
                    {subscriptionView()}
               </DrawerContentScrollView>
               <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                         icon={({ color, size }) => (
                              <MaterialCommunityIcons
                                   name='logout'
                                   size={24}
                                   color={pallete.primary}
                              />
                         )}
                         label='Sair'
                         onPress={() => handleLogout()}
                    />
               </Drawer.Section>
          </View>
     )
}
