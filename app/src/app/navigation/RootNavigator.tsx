import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack'
import React, { FC } from 'react'

import { HomeScreen } from '../screens/HomeScreen'
import { PlayerScreen } from '../screens/PlayerScreen'

export type RootNavigatorParamList = {
  Home: undefined
  Player: undefined
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
      <Stack.Screen
        options={{ orientation: 'portrait' }}
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false, orientation: 'landscape' }}
        name='Player'
        component={PlayerScreen}
      />
    </Stack.Navigator>
  )
}
