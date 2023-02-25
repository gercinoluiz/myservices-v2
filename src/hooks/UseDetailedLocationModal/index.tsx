import React, { createContext, useContext, useState } from 'react'

interface IDetailedModal {
     detailedLocation: ILocationsObjectType
     useDetailedLocation: (location: ILocationsObjectType) => void

     visible: boolean
     setVisible(): void
     setHidden(): void
}

const DetailedLocationContext = createContext({} as IDetailedModal)

const DetailedLocationProvider: React.FC <AppProviderProps>= ({ children }) => {
     const [visible, setModaVisible] = useState(false)
     const [detailedLocation, setDetailedLocatione] =
          useState<ILocationsObjectType>({
               _id: '',
               address: {
                    city: '',
                    country: '',
                    description: '',
                    number: '',
                    street: '',
               },
               contact_info: {
                    email: '',
                    phone: '',
                    scheduleWebSite: '',
                    website: '',
               },
               distance: '',
               geographic_position: { coordinates: [] },
               name: '',
               type: '',
               secretarias: [{ name: '', services: [''] }],
               services:[{workingTime:[{weekDay:'', hours:[{end:'', start:''}]}],service:{_id:'', active:false, isOnline:false,name: '', serviceType:{active:false, name:'',id:''}}}] ,
               workingTime: [{hours:{end:'',start:''}, weekDay:''}],
               imagesUrl: [{ url: '', descricao: '' }],
          })

     const setVisible = () => {
          setModaVisible(true)
     }

     const setHidden = () => {
          setModaVisible(false)
     }

     const useDetailedLocation = (location: ILocationsObjectType) => {
          // console.log(location)

          setDetailedLocatione(location)
     }

     return (
          <DetailedLocationContext.Provider
               value={{
                    setHidden,
                    setVisible,
                    visible,
                    detailedLocation,
                    useDetailedLocation,
               }}
          >
               {children}
          </DetailedLocationContext.Provider>
     )
}

function UseDetailedLocationModal(): IDetailedModal {
     const context = useContext(DetailedLocationContext)

     return context
}

export { DetailedLocationProvider, UseDetailedLocationModal }
