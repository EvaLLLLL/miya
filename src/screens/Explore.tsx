/**
 * @file ExploreScreen
 */

import React from 'react'
import { Text, View } from 'antd-mobile'
import styled from 'styled-components/native'

export const ExploreScreen = () => {
  return (
    <Wrapper>
      <Text>Explore Screen</Text>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
