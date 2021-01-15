import React from 'react'
import WaveFooterImg from 'assets/images/waveFooter.png'
import styled from 'styled-components'

const Wrapper = styled.footer`
  padding: 10rem 0;
  position: relative;
  top: 0;
  left: 0;
`

const WaveFooter = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  position: absolute;
  bottom: 0%;
`
const AuthorNameWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 10;
`
const AuthorName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fonts.subFont};
`

const Footer = () => {
  return (
    <Wrapper>
      <AuthorNameWrapper>
        <AuthorName>Wykonał kskoczek.pl</AuthorName>
      </AuthorNameWrapper>
      <WaveFooter src={WaveFooterImg} />
    </Wrapper>
  )
}

export default Footer
