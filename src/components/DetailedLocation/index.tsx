import {
     AntDesign,
     Entypo,
     FontAwesome5,
     Foundation,
     Ionicons,
     MaterialCommunityIcons,
} from '@expo/vector-icons'
import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import {
     BackHandler,
     Dimensions,
     Image,
     Linking,
     ScrollView,
     Text,
     TouchableOpacity,
     View,
} from 'react-native'
import Modal from 'react-native-modal'
import { createOpenLink } from 'react-native-open-maps'
import { useImageModal } from '../../hooks/ImageModalHook'
import { UseDetailedLocationModal } from '../../hooks/UseDetailedLocationModal'
import pallete from '../../style/pallete'
import ImageModalTemporary from '../ImageModalTemporary'

import {
     CloseButtonContainer,
     CloseButtonText,
     InfoContainer,
     InfoText,
     MyModal,
     InfoTitle,
     InfoItemContainer,
     Marker,
     GaleryContainer,
     GaleryTitle,
     ActivitiesContainer,
     ActivitiesTitle,
     SelectedActivitiesContainer,
     ListContainer,
     ListAccordionActivities,
     ListAccordionWeekDay,
     HourText,
     ListAccordionHours,
     HoursContainer,
     WeekDay,
     Time,
     InfoItemContainerHours,
     HoursWraper,
} from './styles'

import { useTheme } from 'styled-components'
import { List } from 'react-native-paper'

export interface DetailedLocationProps {}

const DetailedLocation = () => {
     const { visible, setHidden, detailedLocation } = UseDetailedLocationModal()

     const [isListHourExpanded, setIsListHourExpanded] = useState(false)

     const { setVisible: imageModalSetVisible, getIndex } = useImageModal()

     const theme = useTheme()

     const handeleOpenModalImage = (index: number) => {
          getIndex(index)
          imageModalSetVisible()
     }

     const openMap = createOpenLink({
          query: detailedLocation.address.street,
          end: detailedLocation.address.street,
     })

     function handleToggleListHour() {
          setIsListHourExpanded(!isListHourExpanded)

          
     }

     return (
          //TODO: Consertar com FlatList: Não acho como fazer em typescript

          <MyModal
               isVisible={visible}
               onBackButtonPress={() => {
                    setHidden();
                    setIsListHourExpanded(false)
               }}
          >
               <ScrollView
                    nestedScrollEnabled={true}
                    style={{ marginBottom: 10 }}
               >
                    <CloseButtonContainer
                         onPress={() => {
                              setHidden()
                    setIsListHourExpanded(false)

                         }}
                    >
                         <AntDesign
                              name='close'
                              size={24}
                              color={theme.typography.onSurface}
                         />
                         <CloseButtonText>Fechar</CloseButtonText>
                    </CloseButtonContainer>

                    <InfoContainer>
                         {detailedLocation?.name && (
                              <InfoTitle>
                                   {detailedLocation?.name.toLocaleUpperCase()}
                              </InfoTitle>
                         )}

                         {detailedLocation?.address?.street && (
                              <InfoItemContainer>
                                   <Entypo
                                        name='address'
                                        size={24}
                                        color={theme.colors.primary}
                                   />
                                   <InfoText>
                                        {detailedLocation?.address?.street}
                                   </InfoText>
                              </InfoItemContainer>
                         )}

                         {/* TeleFone */}

                         {detailedLocation.contact_info?.phone === '' ||
                              (undefined && (
                                   <InfoItemContainer
                                        onPress={() =>
                                             Linking.openURL(
                                                  `tel:${detailedLocation.contact_info?.phone}`
                                             )
                                        }
                                   >
                                        <Entypo
                                             name='phone'
                                             size={24}
                                             color={theme.colors.primary}
                                        />
                                        <InfoText>
                                             {
                                                  detailedLocation?.contact_info
                                                       ?.phone
                                             }
                                        </InfoText>
                                   </InfoItemContainer>
                              ))}

                         {detailedLocation.contact_info?.website === '' ||
                              (undefined && (
                                   <InfoItemContainer
                                        onPress={() =>
                                             Linking.openURL(
                                                  detailedLocation.contact_info
                                                       ?.website
                                             )
                                        }
                                   >
                                        <Foundation
                                             name='web'
                                             size={28}
                                             color={pallete.primary}
                                        />
                                        <InfoText>
                                             {detailedLocation.contact_info
                                                  ?.website
                                                  ? `${detailedLocation.contact_info.website.substring(
                                                         0,
                                                         40
                                                    )}...`
                                                  : 'Não cadastrado'}
                                        </InfoText>
                                   </InfoItemContainer>
                              ))}

                         {/* Agendamento */}

                         {detailedLocation?.contact_info?.scheduleWebSite && (
                              <InfoItemContainer
                                   onPress={() =>
                                        Linking.openURL(
                                             detailedLocation?.contact_info
                                                  ?.scheduleWebSite
                                        )
                                   }
                              >
                                   <Entypo
                                        name='calendar'
                                        size={24}
                                        color={pallete.primary}
                                   />
                                   <InfoText>
                                        {detailedLocation.contact_info
                                             ?.scheduleWebSite
                                             ? `${detailedLocation.contact_info.scheduleWebSite.substring(
                                                    0,
                                                    40
                                               )}...`
                                             : 'Não cadastrado'}
                                   </InfoText>
                              </InfoItemContainer>
                         )}

                         {/* Distancia */}

                         <InfoItemContainer>
                              <MaterialCommunityIcons
                                   name='map-marker-distance'
                                   size={24}
                                   color={pallete.primary}
                              />
                              <InfoText>
                                   A{' '}
                                   <InfoText style={{ fontWeight: 'bold' }}>
                                        {' '}
                                        {detailedLocation.distance
                                             ? numeral(
                                                    detailedLocation.distance
                                               ).format('00.00')
                                             : 'Não encontrado'}
                                   </InfoText>{' '}
                                   KM de distância
                              </InfoText>
                         </InfoItemContainer>

                         {/* HORÁRIOS */}

                         <InfoItemContainerHours
                              isExpanded={isListHourExpanded}
                         >
                              <ListContainer>
                                   <ListAccordionHours
                                        title='Horário de funcionamento'
                                        titleStyle={{fontSize:18, fontWeight: isListHourExpanded  ? 'bold': '100'}}
                                        left={() => (
                                             <FontAwesome5
                                                  name='clock'
                                                  size={24}
                                                  color={theme.colors.primary}
                                             />
                                        )}
                                        onPress={handleToggleListHour}
                                        style={{
                                             backgroundColor: isListHourExpanded
                                                  ? '#F7F7F7'
                                                  : theme.colors
                                                         .backgroundWhite,
                                             justifyContent: 'center',
                                        }}
                                   >
                                        <HoursWraper>
                                             {detailedLocation.workingTime?.map(
                                                  (item, index) => {
                                                       return (
                                                            <HoursContainer
                                                                 key={index}
                                                            >
                                                                 <WeekDay>
                                                                      {
                                                                           item.weekDay
                                                                      }
                                                                 </WeekDay>
                                                                 <Time>
                                                                      {` ${item.hours.start} às ${item.hours.end}`}
                                                                 </Time>
                                                            </HoursContainer>
                                                       )
                                                  }
                                             )}
                                        </HoursWraper>
                                   </ListAccordionHours>
                              </ListContainer>
                         </InfoItemContainerHours>

                         {/* VER NO MAPA */}

                         <Marker onPress={openMap}>
                              <Entypo
                                   name='location-pin'
                                   size={34}
                                   color='#ff6b61'
                              />
                              <InfoText
                                   style={{
                                        fontSize: 14,
                                        color: pallete.secondary,
                                   }}
                              >
                                   Ver no mapa
                              </InfoText>
                         </Marker>
                    </InfoContainer>

                    {detailedLocation?.imagesUrl?.length > 0 ? (
                         <GaleryContainer>
                              <GaleryTitle>Galeria</GaleryTitle>
                              <ScrollView
                                   horizontal
                                   style={{
                                        width:
                                             Dimensions.get('screen').width -
                                             10,

                                        marginTop: 20,
                                   }}
                              >
                                   {detailedLocation.imagesUrl.map(
                                        (image, index) => (
                                             <TouchableOpacity
                                                  onPress={() =>
                                                       handeleOpenModalImage(
                                                            index
                                                       )
                                                  }
                                                  key={index}
                                             >
                                                  <Image
                                                       style={{
                                                            width: 200,
                                                            height: 200,
                                                            marginLeft: 5,
                                                       }}
                                                       resizeMode={'cover'}
                                                       source={{
                                                            uri: image.url,
                                                       }}
                                                  />
                                             </TouchableOpacity>
                                        )
                                   )}

                                   <ImageModalTemporary
                                        images={detailedLocation.imagesUrl}
                                   />
                              </ScrollView>
                         </GaleryContainer>
                    ) : null}

                    {/* ======================================Services======================*/}

                    <ActivitiesContainer>
                         <ActivitiesTitle>
                              ATIVIDADES CADASTRADAS
                         </ActivitiesTitle>
                         {detailedLocation.services ? (
                              <ScrollView
                                   nestedScrollEnabled
                                   style={{
                                        backgroundColor: '#FFF',
                                        width:
                                             Dimensions.get('screen').width -
                                             10,
                                        height: 300,

                                        marginTop: 20,
                                   }}
                              >
                                   {detailedLocation.services?.map(
                                        (item, index) => {
                                             if (item.service) {
                                                  return (
                                                       <SelectedActivitiesContainer
                                                            key={index}
                                                       >
                                                            <ListContainer>
                                                                 <ListAccordionActivities
                                                                      title={
                                                                           item
                                                                                ?.service
                                                                                ?.name
                                                                      }
                                                                      style={{
                                                                           backgroundColor:
                                                                                '#FFF',
                                                                      }}
                                                                      right={() => (
                                                                           <></>
                                                                      )}
                                                                      expanded={
                                                                           false
                                                                      }
                                                                 >
                                                                      {item.workingTime?.map(
                                                                           (
                                                                                item,
                                                                                index
                                                                           ) => {
                                                                                return (
                                                                                     <ListAccordionWeekDay
                                                                                          title={
                                                                                               item?.weekDay
                                                                                          }
                                                                                          style={{
                                                                                               backgroundColor:
                                                                                                    '#f7f7f7',
                                                                                          }}
                                                                                          key={
                                                                                               index
                                                                                          }
                                                                                     >
                                                                                          {item?.hours
                                                                                               ?.map(
                                                                                                    (
                                                                                                         item,
                                                                                                         index
                                                                                                    ) => {
                                                                                                         return (
                                                                                                              <HourText
                                                                                                                   key={
                                                                                                                        index
                                                                                                                   }
                                                                                                              >{`Das: ${item.start} às: ${item.end}`}</HourText>
                                                                                                         )
                                                                                                    }
                                                                                               )
                                                                                               .sort()}
                                                                                     </ListAccordionWeekDay>
                                                                                )
                                                                           }
                                                                      )}
                                                                 </ListAccordionActivities>
                                                            </ListContainer>

                                                            {/*<Text>{JSON.stringify(item, null, 2)}</Text> */}
                                                       </SelectedActivitiesContainer>
                                                  )
                                             } else {
                                                  return <Text>{item}</Text>
                                             }
                                        }
                                   )}
                              </ScrollView>
                         ) : (
                              <Text> "Itens não cadastrados" </Text>
                         )}
                    </ActivitiesContainer>
               </ScrollView>
          </MyModal>
     )
}

export default DetailedLocation
