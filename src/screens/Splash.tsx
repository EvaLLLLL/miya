/**
 * @file Splash
 */

import React from 'react'
import { View, Text } from 'antd-mobile'
import styled from 'styled-components/native'
import { RootStackComponent } from '../router/types'

export const SplashScreen: RootStackComponent<'SplashScreen'> = () => {
  return (
    <Wrapper>
      <Text>Splash Screen</Text>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
