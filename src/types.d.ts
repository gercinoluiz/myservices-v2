 declare module '*.svg'
 declare module '*.png'


 interface AppProviderProps {
     children: React.ReactNode;
 }
 
 
// O que vou usar no contexto
interface ICoordinates {
     latitude: number
     longitude: number
}

interface ILocationsObjectType {
     distance: string
     _id: string
     name: string
     type: string // to add in backend
     contact_info: {
          scheduleWebSite: string
          website: string

          // to add in the backend
          phone: string
          email: string
     }
     address: {
          street: string
          number: string
          city: string
          country: string
          description: string
     }
     secretarias: [
          {
               name: string
               services: [string]
          }
     ]

     services: [
          {
               service: IService
               workingTime: [
                    {
                         weekDay: string
                         hours:  [{ start: string, end: string }] 
                    }
               ]
          }
     ]

     geographic_position: {
          coordinates: Array
     }
     workingTime: [
          {
               weekDay: string
               hours:  { start: string, end: string } 
          }
     ]

     imagesUrl: [
          {
               url: string
               descricao: string
          }
     ]
}

// O que vou exportar no contexto
interface ILocationContextType {
     fetchLocationsWithCoordinates({}: ICoordinates): any | undefined //consider to change the any returntype;
     fecthAllLocations(): any | undefined
     fetchLocationsPassingItem(item: IService): any | undefined
     fetchLocationsWithAddress(
          address: string,
          chosenService?: IService
     ): any | undefined
     fetchGoogleMapsAPI(fullAddress: string): any | undefined
     askLocationsPermition(chosenService?: IService): any | undefined
     fetchAllLocationsPassisgCordinatesAndServiceType(
          serviceType: IServiceType
     ): any | undefined
     fetchAllLocationsPassisgCordinatesAndLocationType(
          locationType: ILocationType
     ): any | undefined
     coordinates(): ICoordinates

     locations: ILocationsObjectType[] | undefined

     writtenAddress: string
     changeWrittenAddress(address: string): void
     changeLocationStatus(): void
     isMyLocationActive: boolean
}

interface IModalContext {
     visible: boolean
     setVisible(): void
     setHidden(): void
}

interface IImageModalContext {
     visible: boolean
     setVisible(): void
     setHidden(): void
     getIndex(index: number): void
     index: number
}

interface IService {
     _id: string
     name: string
     active: boolean
     isOnline: boolean

     serviceType: {
          id: string
          name: string
          active: boolean
     }
}

interface IServices {
     services: IService[]
     service: IService | undefined
     fetchServices(): void
     fetchService(id: string): Ivoid

     changeService(passedService: IService | undefined): void
}

interface IServiceType {
     _id: string
     name: string
     active: boolean
     icon: string
}

interface ILocationType {
     _id: string
     name: string
     active: boolean
}

interface IServiceTypes {
     serviceTypes: IServiceType[]
     serviceType?: IServiceType | undefined
     fetchServiceTypes(): void
     // fetchServiceType(id: string): Ivoid

     changeServiceType(passedServiceType: IServiceType | undefined): void
}

interface ILocationTypes {
     locationTypes: ILocationType[]
     locationType?: ILocationType | undefined
     fetchLocationTypes(): void
     // fetchLocationType(id: string): Ivoid

     changeLocationType(passedLocationType: ILocationType | undefined): void
}

interface IUser {
     name?: string
     password?: string
     address?: {}
email?:string
     contact_info?: {
          mobile?: string
          phone?: string
          email?: string
     }

     avatarUrl?: string
     nickname?: string
     description?: string

     provider?: string

     id: string
}

interface IUserApiResponse {
     data: any
     token: string
     user: IUser
}

type TProvider = 'google' | 'facebook' | 'apple'

// type TTheme = 'light' | 'dark'

// interface IThemeContext {
//      toggleTheme: () => Promise<void>

//      theme: TTheme
//      // pallete: {
//      //      primary:  string;
//      //      onPrimary:string
//      //      onPrimary2:string

//      //      secondary:string
//      //      onSecondary:string

//      //      background:string
//      //      onBackground:string

//      //      surface:string
//      //      onSurface:string

//      //      error:string
//      //      onError:string

//      //      primaryLight:string
//      //      primaryDark:string

//      //      onSurfaceLight:string

//      //      contrast:string

//      //      backgroundlight:string

//      //      typography: {
//      //           h1: string,
//      //           contrast: string,
//      //      },
//      // }
// }
