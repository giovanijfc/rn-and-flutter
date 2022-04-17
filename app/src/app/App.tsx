import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import { theme } from '~/app/styles/theme'

import { RootNavigator } from './navigation/RootNavigator'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
