// 1. Import the extendTheme function
import { extendTheme } from "native-base";
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
    colors: {
        primary: '#003a70',
        primaryLight:'#0073BA',

        secondary: '#fa873d',
        secondaryLight: '#FFC83B',

        background: '#e0e0e0',
        onBackground: '#0000',

        surface: '#fff',
        onSurface: '#000',

        error: '#b00020',
        onError: '#fff',

        onSurfaceLight: '#999999',

        contrast: ' #ffc107',

        backgroundWhite: '#ffff',
   },

   typography: {
        h1: '#2B3040',
        contrast: '#e0e0e0',
        onPrimary: '#e0e0e0',
        onSecondary: '#FFFF',
        fonts: {
             small: 16,
             xSmall:14,
             medium: 18,
             large: 22,
             xLarge: 26,
        },
        onSurface: '#000',
        onSurfaceLight:'#333333'
   },

   details: {},
};
export const nativebaseTheme = extendTheme({ colors: newColorTheme });