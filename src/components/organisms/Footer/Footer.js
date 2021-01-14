import React from 'react'
import WaveFooterImg from 'assets/images/Footer.png'
import styled from 'styled-components'

const Wrapper = styled.footer`
  height: 40vh;
  position: relative;
  top: 0;
  left: 0;
`

const WaveFooter = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0%;
`

const Footer = () => {
  return (
    <Wrapper>
      <WaveFooter src={WaveFooterImg} />
    </Wrapper>
  )
}

export default Footer
