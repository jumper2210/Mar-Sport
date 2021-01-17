import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  position: relative;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 3rem 0;
  background: ${({ theme }) => theme.colors.color_secondary};
`
const AuthorName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fonts.subFont};
  position: relative;
  top: 0;
  z-index: 10;
`
const Footer = () => {
  return (
    <Wrapper>
      <AuthorName>Wykonał kskoczek.pl</AuthorName>
    </Wrapper>
  )
}

export default Footer
