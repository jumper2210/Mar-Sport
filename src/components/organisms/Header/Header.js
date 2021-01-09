import React from 'react'
import styled from 'styled-components'
import HeaderImg from 'assets/images/headerImg.jpg'
import Wave from 'assets/images/wave.png'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${HeaderImg});
  background-size: cover;
  background-position: center;
`

const WavePng = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const InnerWrapper = styled.div`
  position: absolute;
  height: 30vh;
  bottom: 0;
`

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <WavePng src={Wave} alt="wave" />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
