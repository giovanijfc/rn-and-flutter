import 'styled-components'

/**
 * Merge da declarações do styled-components para permitir
 * typing do theme.
 */

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      brand: string
      lightBrand: string
      white: string
      buttonBackground: string
      background: string
      yellow: string
      grey: {
        '50': string
        '100': string
        '200': string
        '300': string
        '400': string
        '500': string
        '600': string
        '700': string
        '800': string
        '900': string
      }
    }
    sizes: {
      extraLarge: number
      extraMedium: number
      extraSmall: number
      extra: number
      large: number
      medium: number
      small: number
    }
  }
}
