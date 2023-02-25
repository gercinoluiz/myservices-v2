import * as SecureStore from 'expo-secure-store'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const secureStorageUserKey = '_meulazer-user'
const secureStorageTokenKey = '_meulazer-token'

export const asyncStorageUser = {
     removeUser: async () => {
          try {
               await SecureStore.deleteItemAsync(secureStorageUserKey)
               await SecureStore.deleteItemAsync(secureStorageTokenKey)
          } catch (error) {
               console.log('removeUser', { error })
          }
     },

     getUser: async (): Promise<IUser | null> => {
          let formattedResponse

          try {
               const user = await SecureStore.getItemAsync(secureStorageUserKey)

               formattedResponse = user ? JSON.parse(user) : undefined
          } catch (error) {
               console.log('getUser', { error })
          }

          return formattedResponse
     },

     saveUser: async ({ user, token }: IUserApiResponse) => {
          try {
               if (user) {
                    await SecureStore.setItemAsync(
                         secureStorageUserKey,
                         JSON.stringify(user)
                    )
                    await SecureStore.setItemAsync(
                         secureStorageTokenKey,
                         JSON.stringify(token)
                    )
               } else {
                    console.log('saveUser / NOT DONE YET!!!', { user })
               }
          } catch (error) {
               console.log('saveUser', { error })
          }
     },
}

/// SAVE USER ASYNC STORAGE

// saveUser: async ({ user, token }: IUserApiResponse) => {
//      // console.log('4. userStorage/SaveUSer/', {
//      //      user,
//      //      token,
//      // })

//      if (user) {
//           await AsyncStorage.multiSet([
//                [`${secureStorageUserKey}`, JSON.stringify(user)],
//                [`${secureStorageTokenKey}`, token],
//           ])
//      } else {
//           console.log('saveUser / NOT DONE YET!!!', { user })
//      }
// },
// }

// const [user, token] = await AsyncStorage.multiGet([
//      secureStorageUserKey,
//      secureStorageTokenKey,
// ])

// const formattedResponse = user[1] ? JSON.parse(user[1]) : undefined

// return formattedResponse

// removeUser: () => {
//      const keys = [secureStorageUserKey, secureStorageTokenKey]

//      AsyncStorage.multiRemove(keys)
// },
