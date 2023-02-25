import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
     NativeSyntheticEvent,
     TextInput,
     TextInputChangeEventData,
     TouchableOpacity,
     View,
} from 'react-native'
import { useLocations } from '../../hooks/LocationHook'
import { useServices } from '../../hooks/ServicesHook'
import pallete from '../../style/pallete'
import styles from './styles'

export interface InputHeaderProps {}

const InputHeader: React.FC<InputHeaderProps> = () => {
     const {
          changeWrittenAddress,
          fetchLocationsWithAddress,
          askLocationsPermition,
          fetchLocationsPassingItem,
     } = useLocations()
     const [inputText, setInputText] = useState('')
     const [openMenu, setOpenMenu] = useState(false)
     const { service } = useServices()

     const handleTextInputOnChange = (address: string) => {
          setInputText(address)
     }

     const handleChangeWrittenAddress = () => {
          //1. Change the Wirtten Address to what I've written
          changeWrittenAddress(inputText)

          //2. Call the function passing an address
          fetchLocationsWithAddress(inputText)
     }

     const showCloseButton = () => {
          if (inputText !== '') {
               return (
                    <TouchableOpacity
                         style={styles.clearText}
                         onPress={() => setInputText('')}
                    >
                         <AntDesign
                              name='close'
                              size={22}
                              color={pallete.onSurfaceLight}
                         />
                    </TouchableOpacity>
               )
          }
     }

     const handleGetBackMyLocation = () => {
          askLocationsPermition()
     }

     return (
          <View style={styles.searchBoxContainer}>
               <TextInput
                    value={inputText}
                    onSubmitEditing={handleChangeWrittenAddress}
                    onChange={(
                         e: NativeSyntheticEvent<TextInputChangeEventData>
                    ) => {
                         handleTextInputOnChange(e.nativeEvent.text)
                    }}
                    placeholder={'Digite um endereço'}
                    style={styles.textInput}
               ></TextInput>

               {showCloseButton()}

               {/* </View> */}

               <View style={styles.textInputView}>
                    <TouchableOpacity
                         style={styles.myLocationIcon}
                         onPress={() => handleGetBackMyLocation()}
                    >
                         <MaterialIcons
                              name='my-location'
                              size={24}
                              color={pallete.secondary}
                         />
                    </TouchableOpacity>

                    <TouchableOpacity
                         style={styles.searchBoxIcon}
                         testID='Search-Button'
                         onPress={handleChangeWrittenAddress}
                    >
                         <Feather
                              name='search'
                              size={32}
                              color={pallete.secondary}
                         />
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default InputHeader
