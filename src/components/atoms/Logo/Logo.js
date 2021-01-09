import React from 'react'
import styled from 'styled-components'
import logoImg from 'assets/images/logo.png'

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Logo = () => {
  return <Img src={logoImg} alt="logo" />
}

export default Logo
