/**
 * @file FIX ME WHEN YOU SEE ME! 请对本文件的用途或内容进行说明...
 */

import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const AlbumsScreen = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
        <ImgContainer>img</ImgContainer>
      </ImgWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
`

const ImgWrapper = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap
`

const ImgContainer = styled(View)`
  height: 15vh;
  width: calc(100% / 3);
  background-color: pink;
`
