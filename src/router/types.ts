/**
 * @file types
 */

import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type MainStackParams = RootStackParams & {
  Tabs: undefined
}

export type RootStackParams = {
  SplashScreen: undefined
  LoginScreen: undefined
  Main?: {
    screen?: keyof MainStackParams
    params?: object
  }

  ImportantNoticesModal: undefined
}

export type RootStackNavigationProp<
  ScreenName extends keyof RootStackParams
> = StackNavigationProp<RootStackParams, ScreenName>

export type RootStackRouteProp<
  ScreenName extends keyof RootStackParams
> = RouteProp<RootStackParams, ScreenName>

export type RootStackComponent<
  RouteName extends keyof RootStackParams
> = React.FC<{
  navigation: RootStackNavigationProp<RouteName>
  route: RootStackRouteProp<RouteName>
}>
