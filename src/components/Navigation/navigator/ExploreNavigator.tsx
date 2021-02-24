/**
 * @file FIX ME WHEN YOU SEE ME! 请对本文件的用途或内容进行说明...
 */

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ExploreParamList } from '../types'
import { ExploreScreen } from '../../../screens/Explore'

const Tab = createMaterialTopTabNavigator<ExploreParamList>()

export const ExploreNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} />
    </Tab.Navigator>
  )
}
