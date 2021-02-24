/**
 * @file RootNavigator
 */

import React from 'react'
import { Icon } from '../../Icon'
import { faShip, faSkiing } from '@fortawesome/free-solid-svg-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Colors from '../../../assets/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import { TopTabParamList } from '../types'
import { AlbumsNavigator } from './AlbumsNavigator'
import { ExploreNavigator } from './ExploreNavigator'

const Tab = createMaterialTopTabNavigator<TopTabParamList>()

export const RootNavigator: React.FC = () => {
  const colorScheme = useColorScheme()

  return (
    <Tab.Navigator
      initialRouteName="Albums"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <Tab.Screen
        name="Albums"
        component={AlbumsNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={faShip} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon icon={faSkiing} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
