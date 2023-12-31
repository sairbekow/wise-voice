'use client'
import { createTheme } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles'
import { ReactNode } from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  preload: true,
  weight: ['300', '400', '500'],
})

const themeOptions: ThemeOptions = {
  spacing: 4,
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16
  },
  palette: {
    background: {
      default: '#f3f3f3',
      paper: '#fff',
    },
    primary: {
      main: '#0080ff',
    },
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200,
      lg: 1600,
      xl: 1920
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
}

const theme = createTheme(themeOptions)

interface IProps {
  children: ReactNode
}

export default function ThemeRegistry({ children }: IProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
