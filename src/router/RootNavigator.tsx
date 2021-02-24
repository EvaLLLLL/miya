/**
 * @file RootNavigator
 */

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashScreen } from '../screens/Splash'
import { NavigationContainer } from '@react-navigation/native'
import { defaultHeaderOptions } from './utils'
import { RootStackParams } from './types'

const RootStack = createStackNavigator<RootStackParams>()

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" screenOptions={defaultHeaderOptions}>
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
