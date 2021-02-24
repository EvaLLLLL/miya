/**
 * @file FIX ME WHEN YOU SEE ME! 请对本文件的用途或内容进行说明...
 */

import React from 'react'
import { ColorSchemeName } from 'react-native'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import linkConfig from './linkConfig'
import { RootNavigator } from './navigator'

export const Navigation: React.FC<{
  colorScheme: ColorSchemeName
}> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      linking={linkConfig}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  )
}
