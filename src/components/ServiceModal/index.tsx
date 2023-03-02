import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

import * as RootNavigation from '../../routes/RootNavigation.routes'
import React, { useState, useEffect, useRef } from 'react'
import {
     FlatList,
     Linking,
     ListRenderItemInfo,
     NativeSyntheticEvent,
     SafeAreaView,
     Text,
     TextInput,
     TextInputChangeEventData,
     TextInputProps,
     TouchableOpacity,
     View,
} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts'
import Modal from 'react-native-modal'
import { useLocations } from '../../hooks/LocationHook'
import { useModal } from '../../hooks/ModalHook'
import { useServices } from '../../hooks/ServicesHook'
import { useServiceTypes } from '../../hooks/ServiceTypesHook'
import pallete from '../../style/pallete'
import { MyCustomAlert } from '../MyCustomAlert'
import styles from './styles'

export interface ServiceModalProps {}

const ServiceModal: React.FC<ServiceModalProps> = (props: any) => {
     const searchInputRef = useRef<any>(null)

     const handleSetFocus = () => {
          searchInputRef.current?.focus()
     }

     const {
          fetchLocationsPassingItem,
          fetchLocationsWithCoordinates,
          coordinates,
     } = useLocations()

     const { visible, setHidden } = useModal()
     const [inputText, setInputText] = useState('')
     const [filteredServicesArray, setFilteredServicesArray] = useState<
          IService[] | any
     >()

     const { services, changeService, service, fetchServices } = useServices()

     const [showIsOnlineAlert, setShowIsOnlineAlert] = useState(false)
     const [selectedItem, setSelectedItem] = useState<IService>()

     const { latitude, longitude } = coordinates()

     const { changeServiceType } = useServiceTypes()

     const handleCloseModal = () => {
          setShowIsOnlineAlert(false)
          setHidden()
     }

     const handleChangeService = (text: string) => {
          setInputText(text)

          const filteredServices = services.filter((item) => {
               return item.name
                    .toLocaleLowerCase()
                    .includes(text.toLocaleLowerCase())
          })

          setFilteredServicesArray(filteredServices)
     }

     const handleChosenService = (item: IService) => {
          changeService(item)
          changeServiceType(undefined)

          fetchLocationsPassingItem(item)

          handleCloseModal()
     }

     const handleClearFilter = () => {
          changeService(undefined)

          fetchLocationsWithCoordinates({ latitude, longitude })

          handleCloseModal()
     }

     const flatListRenderItem  = (item: IService ) => {
          
               return (
                    <TouchableOpacity
                         style={styles.flatListViewItem}
                         onPress={() => {
                              if (item.isOnline === !'') {
                                   setShowIsOnlineAlert(true)

                                   setSelectedItem(item)

                                   return
                              }

                              // Jogar para a página de Lista caso esteja na home

                              const currentRoute = RootNavigation.getRootState()

                              if (currentRoute?.name === 'Home') {
                                   RootNavigation.navigate('Lista')
                              }

                              handleChosenService(item)
                         }}
                    >
                         <Text style={styles.flatListViewItemText}>
                              {item.name}
                         </Text>
                         <Text style={styles.flatListViewItemCategory}>
                              {item.serviceType?.name}
                         </Text>

                         {item.isOnline === !'' ? (
                              // <Entypo name="controller-record" style={styles.flatListViewItemIcon} size={24} color="#69F0AE" />

                              <View style={styles.onlineView}>
                                   <MaterialCommunityIcons
                                        name='web'
                                        style={styles.flatListViewItemIcon}
                                        size={16}
                                        color='#69F0AE'
                                   />
                                   <Text style={styles.onlineText}>
                                        Feito Online
                                   </Text>
                              </View>
                         ) : null}
                    </TouchableOpacity>
               )
         
     }

     const showCloseButton = () => {
          if (inputText !== '') {
               return (
                    <TouchableOpacity
                         style={styles.clearText}
                         onPress={() => {
                              setInputText('')
                              handleChangeService('')
                         }}
                    >
                         <AntDesign
                              name='close'
                              size={24}
                              color={pallete.onSurfaceLight}
                         />
                    </TouchableOpacity>
               )
          }
     }



     return (
          <Modal
               style={styles.modal}
               isVisible={visible}
               onBackButtonPress={() => {
                    handleCloseModal()
               }}
          >
               <SafeAreaView style={styles.modal}>
                    <View nativeID='Main View' style={styles.modalContainer}>
                         <View style={styles.topIconsContainer}>
                              <TouchableOpacity onPress={handleClearFilter}>
                                   <View style={styles.removeFilterView}>
                                        <MaterialCommunityIcons
                                             name='filter-remove'
                                             size={32}
                                             color={
                                                  service
                                                       ? pallete.secondary
                                                       : 'rgba(250, 133, 61, 0.3)'
                                             }
                                        />
                                        <Text> Remover filtro</Text>
                                   </View>
                              </TouchableOpacity>

                              <TouchableOpacity
                                   style={styles.closeTouchableOpacity}
                                   onPress={handleCloseModal}
                              >
                                   <AntDesign
                                        name='close'
                                        size={24}
                                        color='#2B3040'
                                   />
                                   <Text>Fechar</Text>
                              </TouchableOpacity>
                         </View>

                         <View>
                              <View style={styles.dropDownList}>
                                   <AntDesign
                                        name='search1'
                                        size={24}
                                        color={pallete.primaryDark}
                                   />
                                   <TextInput
                                        style={styles.dropDownListTextInput}
                                        placeholder='Qual serviço'
                                        value={inputText}
                                        ref={searchInputRef}
                                        onChange={(
                                             e: NativeSyntheticEvent<TextInputChangeEventData>
                                        ) => {
                                             handleChangeService(
                                                  e.nativeEvent.text
                                             )
                                        }}
                                   />

                                   {showCloseButton()}
                              </View>
                         </View>
                         <View
                              style={styles.flatListView}
                              nativeID='FlatList Services'
                         >
                              
                              <FlatList
                                   data={
                                        filteredServicesArray

                                             ? filteredServicesArray
                                             : services
                                   }
                                   keyExtractor={(item) => item._id}
                                   renderItem={({ item }) =>
                                         flatListRenderItem(item)
                                   }
                              ></FlatList>


                              {/* {services.map(item=>{
                                   return <Text>{item.name}</Text>
                              })} */}
                         </View>
                    </View>

                    <MyCustomAlert
                         show={showIsOnlineAlert}
                         showProgress={false}
                         title='Serviço Realizado Online'
                         message='Esse serviço pode ser realizado de forma online, consulte o site do 156 para mais informações'
                         showCancelButton={true}
                         cancelText='Acessar 156'
                         confirmText='Buscar'
                         onConfirmPressed={() => {
                              if (selectedItem) {
                                   handleChosenService(selectedItem)
                              }
                         }}
                         onCancelPressed={() =>
                              Linking.openURL(
                                   'https://sp156.prefeitura.sp.gov.br'
                              )
                         }
                    ></MyCustomAlert>
               </SafeAreaView>
          </Modal>
     )
}

export default ServiceModal
