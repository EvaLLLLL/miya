/**
 * @file router utils
 */
import { StackNavigationOptions } from '@react-navigation/stack'
import { ViewStyle } from 'react-native'

export const defaultHeaderStyle: ViewStyle = {
  shadowColor: 'transparent',
  elevation: 0,
  height: 44,
  borderBottomColor: '#ffffff',
}

export const defaultHeaderOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerStyle: defaultHeaderStyle,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
}
