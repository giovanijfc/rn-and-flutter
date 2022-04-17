import { RFValue } from 'react-native-responsive-fontsize'
import { DefaultTheme } from 'styled-components/native'

export const theme: typeof DefaultTheme = {
  borderRadius: `${RFValue(8)}px`,
  colors: {
    brand: '#5BA0D2',
    lightBrand: '#8EBDE1',
    white: '#FFFFFF',
    buttonBackground: '#6A747E',
    background: '#2B3848',
    yellow: '#FCD302',
    grey: {
      '50': '#f7f7f8',
      '100': '#eaeaea',
      '200': '#d6d5da',
      '300': '#C2C6CE',
      '400': '#acabb4',
      '500': '#9796a1',
      '600': '#83818f',
      '700': '#6e6c7c',
      '800': '#595769',
      '900': '#434155'
    }
  },
  sizes: {
    extraLarge: RFValue(36),
    extraMedium: RFValue(32),
    extraSmall: RFValue(24),
    extra: RFValue(18),
    large: RFValue(16),
    medium: RFValue(13),
    small: RFValue(12)
  }
}
