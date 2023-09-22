import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
  }

  interface CustomThemeOptions extends ThemeOptions {
  }

  // Для добавления нового цвета добавь переменную в Pallette и PaletteOptions
  interface Palette {
    white: Palette['primary']
    black: Palette['primary']
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
