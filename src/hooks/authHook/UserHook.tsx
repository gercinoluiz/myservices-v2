import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {
     createContext,
     ReactNode,
     useContext,
     useEffect,
     useState,
} from 'react'
import api from '../../services/api'
import * as Google from 'expo-auth-session/providers/google'
import { asyncStorageUser } from './userStorage'




interface AuthProviderProps {
     children: ReactNode
}

interface AuthData {
     user: IUser | undefined
     signUp: (provider: TProvider) => Promise<void>
     signIn: (provider: TProvider) => Promise<void>
     updateUser: (updatedUser: IUser | undefined) => void

     changeEvent: (event: TEvent) => void
     event: TEvent

}

type TEvent = 'signIn' | 'signUp'

const AuthContext = createContext({} as AuthData)

export const AuthProvider = ({ children }: AuthProviderProps) => {



     const [request, response, promptAsync] = Google.useAuthRequest({
          expoClientId: process.env.EXPO_CLIENT_ID,
          androidClientId: process.env.ANDROID_CLIENT_ID,



     })

     const [user, setUser] = useState<IUser | undefined>()

     const [event, setEvent] = useState<TEvent>('signIn')

     const changeEvent = (gottenEvent: TEvent) => {
          setEvent(gottenEvent)
     }

     // Checkin the auth status => I use UseEffect in order to update the response
     useEffect(() => {





          getUser() 

          if (event === 'signUp') {
               if (response?.type === 'success') {
                    const { authentication } = response



                    // As the search for the user is an async functiopn, I gotta get it out of useEffect
                    handleUserSignUp(authentication?.accessToken)
               }
          } else if (event === 'signIn') {
               if (response?.type === 'success') {
                    const { authentication } = response

                    // As the search for the user is an async functiopn, I gotta get it out of useEffect
                    handleUserSigIn(authentication?.accessToken)
               }
          }
     }, [response])

     async function getUser() {

          const gottenUser = await asyncStorageUser.getUser();
          if (gottenUser) {

               setUser(gottenUser);
          }
     }

     // Gettign user Info
     const handleUserSignUp = async (accessToken: string | undefined) => {
          // console.log({ event })
          // Getting user from backEnd
          try {
               const response = await api.post(`/users/signup`, {
                    provider: 'google',
                    accessToken,
               })

               // console.log('2. googleProvider/SigInWithGoogle', {})

               const { user: userResponse, token } = response.data.data



               setUser(userResponse)



               if (response.data) {
                    console.log('3. userAuth/SigUp', {
                         user,
                    })

                    await asyncStorageUser.saveUser(response.data.data)
               }
          } catch (error) {
               console.log({ error })
          }
     }

     // Gettign user Info
     const handleUserSigIn = async (accessToken: string | undefined) => {


          // Getting user from backEnd
          try {
               const response = await api.post(`/users/authenticate`, {
                    provider: 'google',
                    accessToken,
               })

               // console.log('2. googleProvider/SigInWithGoogle', {})

               const { user: userResponse, token } = response.data.data

               setUser(userResponse)



               if (response.data) {
                    console.log('3. userAuth/Sig', {
                         user,
                    })

                    await asyncStorageUser.saveUser(response.data.data)
               }
          } catch (error) {
               console.log({ error })
          }
     }

     const signUp = async (provider: TProvider) => {
          switch (provider) {
               case 'google':
                    // Call google promptAsync
                    await promptAsync()


                    break
               case 'apple':
                    break
               case 'facebook':
                    break
               default:
                    throw new Error('Provider not allowed')
          }

          //TODO: Create an Else
     }

     const signIn = async (provider: TProvider) => {
          switch (provider) {
               case 'google':
                    // Call google promptAsync
                    await promptAsync()


                    break
               case 'apple':
                    break
               case 'facebook':
                    break
               default:
                    throw new Error('Provider not allowed')
          }

          //TODO: Create an Else
     }

     const updateUser = (updatedUser: IUser | undefined) => {
          setUser(updatedUser)
     }

     return (
          <AuthContext.Provider value={{ user, signUp, updateUser, signIn, changeEvent, event }}>
               {children}
          </AuthContext.Provider>
     )
}

export function useAuthentication() {
     const context = useContext(AuthContext)

     return context
}
