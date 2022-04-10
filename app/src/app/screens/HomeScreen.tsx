import { useNavigation } from '@react-navigation/native'
import FlutterModuleRn from 'flutter-module-rn'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { Button } from '../components/Button'
import { RootNavigatorNavigation } from '../navigation/RootNavigator'

export const HomeScreen: FC = () => {
  const navigation = useNavigation<RootNavigatorNavigation>()

  const startFlutterScreen = () => {
    FlutterModuleRn.startFlutterActivity('', 0, (text: string) => {
      console.log(text)
    })
  }

  const startReactNativePlayer = () => {
    navigation.navigate('Player')
  }

  return (
    <SafeArea>
      <Button onPress={startReactNativePlayer}>Abrir player ReactNative</Button>
      <Space />
      <Button onPress={startFlutterScreen}>Abrir player Flutter</Button>
    </SafeArea>
  )
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 16px;
`

const Space = styled.View`
  margin-top: 8px;
`
