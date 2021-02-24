/**
 * @file FIX ME WHEN YOU SEE ME! 请对本文件的用途或内容进行说明...
 */

import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { AlbumsParamList } from '../types'
import { AlbumsScreen } from '../../../screens/Albums'

const Tab = createMaterialTopTabNavigator<AlbumsParamList>()

export const AlbumsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  )
}
