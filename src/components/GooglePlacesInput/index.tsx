import React, { useRef, useState } from 'react'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
import {
     NativeSyntheticEvent,
     TextInputChangeEventData,
     TouchableOpacity,
     View,
} from 'react-native'
import {
     GooglePlacesAutocomplete,
     GooglePlacesAutocompleteRef,
     GooglePlacesAutocompleteProps,
} from 'react-native-google-places-autocomplete'
import { useLocations } from '../../hooks/LocationHook'
import { useServices } from '../../hooks/ServicesHook'
import enviroment from '../../services/enviroment'
import pallete from '../../style/pallete'
import styles from './styles'

export interface InputHeaderProps {}

type name = React.ComponentProps<typeof MaterialIcons>['name']

const GooglePlacesInput: React.FC<InputHeaderProps> = () => {
     const {
          changeWrittenAddress,
          fetchLocationsWithAddress,
          askLocationsPermition,
          fetchLocationsPassingItem,
          writtenAddress,
          isMyLocationActive,
          changeLocationStatus,
     } = useLocations()

     const [locationIcon, setLocationIcon] = useState<name>('my-location')

     const { service } = useServices()

     const [inputText, setInputText] = useState('')
     const [clearText, setClearText] = useState(true)

     const googleACRef = useRef<GooglePlacesAutocompleteRef>(null)

     

     const handleTextInputOnChange = (address: any) => {
          setInputText(address)
     }

     const handleOnpressForChanginLocationStatusAndIcon = () => {
          // 3. turn the locaition  Icon to gray
          changeLocationStatus()

          setLocationIcon('location-disabled')

          handleChangeWrittenAddress()
     }

     const handleChangeWrittenAddress = () => {
          

          //1. Change the Wirtten Address to what I've written

          

          changeWrittenAddress(inputText)

          //2. Call the function passing an address

          // Ficar atento quando é service e service type e location
          fetchLocationsWithAddress(inputText, service)
     }

     const handleGetBackMyLocation = () => {
          askLocationsPermition(service)
          setLocationIcon('my-location')
          handleClearText()
     }

     const handleClearText = () => {
          googleACRef.current?.setAddressText('')
          setClearText(false)
     }

     return (
          <View style={styles.searchBoxContainer}>
               <GooglePlacesAutocomplete
                    ref={googleACRef}
                    textInputProps={{
                         onSubmitEditing: () =>
                              handleOnpressForChanginLocationStatusAndIcon(),
                         onChange: (
                              e: NativeSyntheticEvent<TextInputChangeEventData>
                         ) => {
                              handleTextInputOnChange(e.nativeEvent.text)
                         },
                    }}
                    placeholder={'Mudar endereço'}
                    onPress={(data, details = null) => {
                         handleTextInputOnChange(data.description)
                    }}
                    styles={styles.textInput}
                    // colocar em *.env

                    query={{
                         key: process.env.PLACES_KEY,
                         language: 'pt-BR',
                         components: 'country:br',
                    }}
                    renderRightButton={() => {
                         return (
                              <View style={styles.textInputView}>
                                   {inputText ? (
                                        <TouchableOpacity
                                             style={styles.clearText}
                                             onPress={handleClearText}
                                        >
                                             <AntDesign
                                                  name='close'
                                                  size={22}
                                                  color={pallete.onSurfaceLight}
                                             />
                                        </TouchableOpacity>
                                   ) : null}

                                   <TouchableOpacity
                                        style={styles.myLocationIcon}
                                        onPress={() =>
                                             handleGetBackMyLocation()
                                        }
                                   >
                                        <MaterialIcons
                                             name={
                                                  locationIcon
                                                       ? locationIcon
                                                       : 'my-location'
                                             }
                                             size={24}
                                             color={
                                                  isMyLocationActive
                                                       ? pallete.secondary
                                                       : '#3b3b3b'
                                             }
                                        />
                                   </TouchableOpacity>

                                   <TouchableOpacity
                                        style={styles.searchBoxIcon}
                                        testID='Search-Button'
                                        onPress={
                                             handleOnpressForChanginLocationStatusAndIcon
                                        }
                                   >
                                        <Feather
                                             name='search'
                                             size={32}
                                             color={pallete.onSecondary}
                                        />
                                   </TouchableOpacity>
                              </View>
                         )
                    }}
                    listViewDisplayed='auto'
                    minLength={5}
               ></GooglePlacesAutocomplete>
          </View>
     )
}

export default GooglePlacesInput
