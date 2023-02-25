import axios from 'axios'
import * as Location from 'expo-location'
import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../../services/api'
import enviroment from '../../services/enviroment'

import { useServices } from '../ServicesHook'

// MAPS API INTERFACE
interface results {
     geometry: {
          location: {
               lat: any
               lng: any
          }
     }
}
// MAPS API INTERFACE
interface data {
     results: Array<results>
}

const LocationContext = createContext({} as ILocationContextType)

const LocationProvider: React.FC<AppProviderProps> = ({ children }) => {
     const [latitude, setLatitude] = useState(-23.5503099)
     const [longitude, setLongitude] = useState(-46.6363896)

     const [isMyLocationActive, setIsMyLocationActive] = useState(false)

     const [locations, setLocations] = useState<ILocationsObjectType[]>()

     const [writtenAddress, setWrittenAddress] = useState('')

    



     // Asking permition at the initial state of the APP

     useEffect(() => {
          askLocationsPermition()
     }, [])

     const changeLocationStatus = () => {
          setIsMyLocationActive(false)
     }

     const askLocationsPermition = async (chosenService?: IService) => {
          try {
               // Asking the Location Permition
               const { status } =
                    await Location.requestForegroundPermissionsAsync()

               // Se a permicao de acesso foi negada

               if (status !== 'granted') {
                    console.log('askLocationsPermition', { isMyLocationActive })

                    fetchLocationsWithCoordinates({
                         latitude: coordinates().latitude,
                         longitude: coordinates().longitude,
                    })
                    return
               }

               // Getting the current Position

               let location

               try {
                    // May it be neessary to get back to Location.getLastKnownPositionAsync
                    location = await Location.getCurrentPositionAsync({
                         accuracy: Location.Accuracy.High,
                         

                    })
                    setIsMyLocationActive(true)
                    
               } catch (error) {
                    

                    location = await Location.getLastKnownPositionAsync({
                         requiredAccuracy: 4,
                    })

                    console.log('4 - getLastKnownPositionAsync', { location })
               }

               if (!location) {
                    console.log('5 - NoLocation found')

                    location = {
                         coords: {
                              latitude: coordinates().latitude,
                              longitude: coordinates().longitude,
                         },
                    }
               }

               setLatitude(location.coords.latitude)
               setLongitude(location.coords.longitude)

               console.log('###############HEHE################')

               if (chosenService) {
                    console.log({ chosenService })

                    // I get my full address in order to make reports, if not by doing so I could only get lat and long

                    let myAddress = await Location.reverseGeocodeAsync({
                         latitude: location.coords.latitude,
                         longitude: location.coords.longitude,
                    })

                    const fullAddress = myAddress[0]

                    console.log({ fullAddress })

                    const {
                         country,
                         district,
                         city,
                         region,
                         timezone,
                         subregion,
                         isoCountryCode,
                    } = fullAddress

                    // Só estou fazendo isso para não lidar agora com LGPD, senão poderia mandar o objeto address completo
                    const address = Object.assign(
                         {},
                         {
                              country,
                              district,
                              city,
                              region,
                              timezone,
                              subregion,
                              isoCountryCode,
                         }
                    )

                    try {
                         await api
                              .post(
                                   `/locations/coordinates/${location.coords.latitude},${location.coords.longitude}/service/${chosenService._id}`,
                                   { address, serviceName: chosenService.name }
                              )
                              .then((response) => {
                                   setLocations(response.data.data)
                              })
                    } catch (error) {
                         console.log('askLocationsPermition', { error })
                    }
               } else {
                    await fetchLocationsWithCoordinates({
                         latitude: location.coords.latitude,
                         longitude: location.coords.longitude,
                    })
               }
          } catch (error) {
               console.log('Error in getting the position', { error })

               fetchLocationsWithCoordinates({
                    latitude: coordinates().latitude,
                    longitude: coordinates().longitude,
               })
          }
     }

     const fetchLocationsWithCoordinates = async (data: ICoordinates) => {
        
          try {
               await api
                    .get(
                         `/locations/coordinates/${
                              data ? data.latitude : latitude
                         }, ${data ? data.longitude : longitude}`
                    )
                    .then((response) => {
                         setLocations(response.data.data)
                    })
          } catch (error) {
               console.log('fetchLocationsWithCoordinates', { error })
          }
     }

     const fecthAllLocations = async () => {
          try {
               await api.get('/locations').then((response) => {
                    setLocations(response.data.data)
               })
          } catch (error) {
               console.log('fecthAllLocations', error)
          }
     }

     const fetchLocationsPassingItem = async (item: IService) => {
          // I get my full address in order to make reports, if not by doing so I could only get lat and long

          let myAddress = await Location.reverseGeocodeAsync({
               latitude: latitude,
               longitude: longitude,
          })

          const fullAddress = myAddress[0]

          const {
               country,
               district,
               city,
               region,
               timezone,
               subregion,
               isoCountryCode,
          } = fullAddress

          // Só estou fazendo isso para não lidar agora com LGPD, senão poderia mandar o objeto address completo
          const address = Object.assign(
               {},
               {
                    country,
                    district,
                    city,
                    region,
                    timezone,
                    subregion,
                    isoCountryCode,
               }
          )

          try {
               await api
                    .post(
                         `/locations/coordinates/${latitude},${longitude}/service/${item._id}`,
                         { address, serviceName: item.name }
                    )
                    .then((response) => {
                         setLocations(response.data.data)
                    })
          } catch (error) {
               console.log('fetchLocationsPassingItem', { error })
          }
     }

     const fetchLocationsWithAddress = async (
          passedAddress: string,
          chosenService?: IService
     ) => {
          //1. Call Maps API
          const mapsResponse = await fetchGoogleMapsAPI(passedAddress)

          console.log({ passedAddress, chosenService })

          console.log('fetchLocationsWithAddress', {
               passedAddress,
               mapsResponse,
          })

          // If we have a service chosen, we should call the endpoint bellow

          if (chosenService) {
               // 2. Call my Api response
               try {
                    await api
                         .post(
                              `/locations/coordinates/${mapsResponse.lat}, ${mapsResponse.lng}/service/${chosenService._id}`
                         )
                         .then((response) => {
                              setLocations(response.data.data)
                         })
               } catch (error) {
                    console.log('fetchLocationsWithAddress', error)
               }
          } else {
               // If we haven't a service chosen, we should call the endpoint bellow
               try {
                    await api
                         .get(
                              `/locations/coordinates/${mapsResponse.lat}, ${mapsResponse.lng}`
                         )
                         .then((response) => {
                              setLocations(response.data.data)
                         })
               } catch (error) {
                    console.log('fetchLocationsWithAddress', error)
               }
          }

          setLatitude(mapsResponse.lat)
          setLongitude(mapsResponse.lng)
     }

     const fetchGoogleMapsAPI = async (fullAddress: string) => {
          const encodedAddress = encodeURI(fullAddress) // MAPS API only accepts encoded format

          // fetching the API

          const googleMapsresponse = await axios.get<data>(
               `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GEOCODING_KEY}`
          )

          const response = googleMapsresponse.data.results[0].geometry.location

          setLatitude(response.lat)
          setLongitude(response.lng)

          return response
     }

     const coordinates = () => ({
          latitude,
          longitude,
     })

     const changeWrittenAddress = (address: string) => {
          setWrittenAddress(address)

          console.log('changeWrittenAddress', { address })
     }

     const fetchAllLocationsPassisgCordinatesAndServiceType = async (
          serviceType: IServiceType
     ) => {
          try {
               await api
                    .get(
                         `/locations/getByServiceType/${latitude},${longitude}/${serviceType._id}`
                    )
                    .then((response) => {
                         setLocations(response.data.data)
                    })
          } catch (error) {
               console.log('fetchAllLocationsPassisgCordinatesAndServiceType', {
                    error,
               })
          }
     }

     const fetchAllLocationsPassisgCordinatesAndLocationType = async (
          locationType: ILocationType
     ) => {
          try {
               await api
                    .get(
                         `/locations/getByLocationType/${latitude},${longitude}/${locationType._id}`
                    )
                    .then((response) => {
                         setLocations(response.data.data)
                    })
          } catch (error) {
               console.log(
                    'fetchAllLocationsPassisgCordinatesAndLocationType',
                    {
                         error,
                    }
               )
          }
     }

     // Loggins tests

     return (
          <LocationContext.Provider
               value={{
                    locations,
                    fetchLocationsWithCoordinates,
                    fecthAllLocations,
                    fetchLocationsPassingItem,
                    fetchLocationsWithAddress,
                    fetchGoogleMapsAPI,
                    askLocationsPermition,
                    coordinates,
                    writtenAddress,
                    changeWrittenAddress,
                    fetchAllLocationsPassisgCordinatesAndServiceType,
                    changeLocationStatus,
                    isMyLocationActive,
                    fetchAllLocationsPassisgCordinatesAndLocationType,
               }}
          >
               {children}
          </LocationContext.Provider>
     )
}

function useLocations(): ILocationContextType {
     const context = useContext(LocationContext)

     return context
}

export { LocationProvider, useLocations }
