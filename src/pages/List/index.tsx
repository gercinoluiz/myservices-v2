import NetInfo from '@react-native-community/netinfo'
import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CurrentService } from '../../components/CurrentService'
import FilterButton from '../../components/FAB'
import GooglePlacesInput from '../../components/GooglePlacesInput'
import { IsOffiline } from '../../components/IsOffiline'
import { Loader } from '../../components/Loader'
// './styles''./styles'// import { SafeAreaView } from 'react-native-safe-area-context';
import MyCard from '../../components/MyCard'
import { NotFound } from '../../components/NotFound'
import { useLocations } from '../../hooks/LocationHook'
import { useLocationTypes } from '../../hooks/LocationTypesHook'
import { useServices } from '../../hooks/ServicesHook'
import pallete from '../../style/pallete'
// import SkeletonContent from 'react-native-skeleton-content'
import Map from '../Map/index'
import styles from './styles'




export interface ListProps {}

const List: React.FC<ListProps> = () => {
     const { service, changeService } = useServices()

     const { locations, fetchLocationsWithCoordinates, coordinates } =
          useLocations()

     const { locationType, changeLocationType } = useLocationTypes()

     const { latitude, longitude } = coordinates()

     const [mapIconColor, setIconMapColor] = useState(pallete.onSurfaceLight)
     const [mapIconSize, setIconMapSize] = useState(24)
     const [listIconColor, setListIconColor] = useState(pallete.primary)
     const [listIconSize, setListIconSize] = useState(24)

     const [networkState, setNetWorkState] = useState<boolean | null>(true)

     const [showMap, setShowMap] = useState(false)

     useEffect(() => {
          chekInternetConnection()
     }, [])

     const skeletonLoader = () => {
          return <Loader />
     }

     const handleCallingSkelethonAndLocations = () => {
          if (locations) {
               if (locations.length !== 0) {
                    return (
                         <FlatList
                              removeClippedSubviews
                              data={locations}
                              keyExtractor={(item) => item._id}
                              renderItem={({ item }) => (
                                   <MyCard
                                        imagesUrl={item.imagesUrl}
                                        workingTime={item.workingTime}
                                        services={item.services}
                                        key={item._id}
                                        type={item.type}
                                        distance={numeral(item.distance).format(
                                             '00.00'
                                        )}
                                        address={item.address}
                                        contact_info={item.contact_info}
                                        geographic_position={
                                             item.geographic_position
                                        }
                                        name={item.name}
                                        _id={item._id}
                                        secretarias={item.secretarias}
                                   />
                              )}
                         />
                    )
               }

               return <NotFound />
          }

          // return skeletonLoader()
     }

     // as tres funcoes abaixo serao removidas com Styled Components e serão usadas em v2

     const handleClearFilter = () => {
          changeService(undefined)
          changeLocationType(undefined)
          fetchLocationsWithCoordinates({ latitude, longitude })
     }

     const handleShowMap = () => {
          setIconMapColor(pallete.primary)
          setListIconColor(pallete.onSurfaceLight)
          setIconMapSize(26)
          setListIconSize(24)
          setShowMap(true)
     }

     const handleShowList = () => {
          setIconMapColor(pallete.onSurfaceLight)
          setListIconColor(pallete.primary)
          setListIconSize(26)
          setIconMapSize(24)
          setShowMap(false)
     }

     const handleShowMapView = () => {
          if (showMap && locations) {
               return <Map />
          } else if (locations) {
               return (
                    <SafeAreaView style={styles.mainView}>
                         {handleCallingSkelethonAndLocations()}

                         <FilterButton />
                    </SafeAreaView>
               )
          } else {
               skeletonLoader()
          }
     }

     const chekInternetConnection = async () => {
          await NetInfo.fetch().then((state) => {
               const { isInternetReachable } = state

               setNetWorkState(isInternetReachable)
          })
     }

     // Here I make some check before rendering the Content

     const handleContent = () => {
          if (networkState) {
               return (
                    <>

                         {locations ? (
                              <SafeAreaView style={styles.mainView}>
                                   <GooglePlacesInput />
                                   <CurrentService />
                                   {handleCallingSkelethonAndLocations()}

                                   <FilterButton />
                              </SafeAreaView>
                         ) : (
                              skeletonLoader()
                         )}

                         {/* 
                   
              
               */}
                    </>
               )
          } else {
               return <IsOffiline />
          }
     }

     return <>{handleContent()}</>
}

export default List
