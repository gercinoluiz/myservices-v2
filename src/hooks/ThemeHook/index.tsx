import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useContext, useEffect, useState } from 'react'

type TProvider = 'google' | 'facebook' | 'apple'

type TTheme = 'light' | 'dark'

type TColorPallete = {
     primary: string
     onPrimary: string
     onPrimary2: string

     secondary: string
     onSecondary: string

     background: string
     onBackground: string

     surface: string
     onSurface: string

     error: string
     onError: string

     primaryLight: string
     primaryDark: string

     onSurfaceLight: string

     contrast: string

     backgroundlight: string

     typography: {
          h1: string
          contrast: string
     }
}

interface IThemeContext {
     toggleTheme: () => Promise<void>

     theme: TTheme
     colorPallete: TColorPallete
}

const ThemeContext = createContext({} as IThemeContext)

const themekey = '@meuLazer:theme'

const ThemeProvider: React.FC <AppProviderProps>= ({ children }) => {
     const [theme, setTheme] = useState<TTheme>('light')

     const [colorPallete, setCollorPalete] = useState<TColorPallete>({
          primary: '#f17e13',
          onPrimary: '#e0e0e0',
          onPrimary2: '#FFF',

          secondary: '#0084d1',
          onSecondary: '#FFFF',

          background: '#ebebeb',
          onBackground: '#0000',

          surface: '#fff',
          onSurface: '#000',

          error: '#b00020',
          onError: '#fff',

          primaryLight: '#ffac4d',
          primaryDark: '#000',

          onSurfaceLight: '#999999',

          contrast: ' #ffc107',

          backgroundlight: '#FFFF',

          typography: {
               h1: '#000',
               contrast: '#e0e0e0',
          },
     })

     useEffect(() => {
          loadTheme()
     }, [theme])

     async function loadTheme() {
          const responseTheme = (await AsyncStorage.getItem(themekey)) as TTheme

          setTheme(responseTheme ? responseTheme : 'light')

          if (theme === 'light') {
               setCollorPalete({
                    primary: '#f17e13',
                    onPrimary: '#e0e0e0',
                    onPrimary2: '#FFF',

                    secondary: '#0084d1',
                    onSecondary: '#FFFF',

                    background: '#ebebeb',
                    onBackground: '#0000',

                    surface: '#fff',
                    onSurface: '#000',

                    error: '#b00020',
                    onError: '#fff',

                    primaryLight: '#ffac4d',
                    primaryDark: '#000',

                    onSurfaceLight: '#999999',

                    contrast: ' #ffc107',

                    backgroundlight: '#FFFF',

                    typography: {
                         h1: '#000',
                         contrast: '#e0e0e0',
                    },
               })
          } else {
               setCollorPalete({
                    primary: '#0d0d0dfc',
                    onPrimary: '#e0e0e0',
                    onPrimary2: '#FFF',

                    secondary: '#f17e13',
                    onSecondary: '#FFFF',

                    background: '#2b2b2bfc',
                    onBackground: '#0000',

                    surface: '#fff',
                    onSurface: '#000',

                    error: '#b00020',
                    onError: '#fff',

                    primaryLight: '#ffac4d',
                    primaryDark: '#000',

                    onSurfaceLight: '#999999',

                    contrast: ' #ffc107',

                    backgroundlight: '#FFFF',

                    typography: {
                         h1: '#000',
                         contrast: '#e0e0e0',
                    },
               })
          }
     }

     const toggleTheme = async () => {
          // console.log('toggleTheme', { theme })

          if (theme === 'dark') {
               setTheme('light')
               await AsyncStorage.setItem(themekey, 'light')
          } else {
               setTheme('dark')
               await AsyncStorage.setItem(themekey, 'dark')
          }

          
     }

     return (
          <ThemeContext.Provider value={{ theme, toggleTheme, colorPallete }}>
               {children}
          </ThemeContext.Provider>
     )
}

function useTheme(): IThemeContext {
     const context = useContext(ThemeContext)

     return context
}

export { ThemeProvider, useTheme }
