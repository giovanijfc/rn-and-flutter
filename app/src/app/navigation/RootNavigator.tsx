import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack'
import React, { FC } from 'react'

import { HomeScreen } from '../screens/HomeScreen'

export type RootNavigatorParamList = {
  Home: undefined
}

export type RootNavigatorProps<
  ScreenName extends keyof RootNavigatorParamList
> = NativeStackScreenProps<RootNavigatorParamList, ScreenName>

export type RootNavigatorNavigation =
  NativeStackNavigationProp<RootNavigatorParamList>

const Stack = createNativeStackNavigator<RootNavigatorParamList>()

export const RootNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}
