import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    dark: {
       900: "#000000",
       700: "#47585B",
       300: "#999999",
    },
    light: {
      900: "#FFFFFF",
      700: "#F5F8FA",
      300: "#DADADA",
   },
   orange: {
     900: "#FFBA08",
   },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.900',
        color: 'dark.700'
      }
    }
  }
}) 