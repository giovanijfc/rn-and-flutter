import { useNavigation } from '@react-navigation/native'
import FlutterModuleRn from 'flutter-module-rn'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { RootNavigatorNavigation } from '../navigation/RootNavigator'

export const HomeScreen: FC = () => {
  const navigation = useNavigation<RootNavigatorNavigation>()

  const startFlutterScreen = () => {
    FlutterModuleRn.startFlutterActivity('', 0, (text: string) => {
      console.log(text)
    })
  }

  return <SafeArea />
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  padding: 16px;
`
