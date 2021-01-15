import React from 'react'
import styled from 'styled-components'
import HeaderImg from 'assets/images/headerImg.jpg'
import CustomButton from 'components/atoms/CustomButton/CustomButton'
import WaveImg from 'assets/images/WaveBottom.png'
import { Link } from 'react-scroll'

const Wrapper = styled.section`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-image: url(${HeaderImg});
  background-size: cover;
  background-position: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 8%;
  justify-content: center;
  z-index: 10;
  width: 100%;
`
const StyledCustomButton = styled(CustomButton)`
  padding: 1rem 4rem;
`

const TitlesWrapper = styled.span`
  display: flex;
  width: 100%;
  height: 70vh;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.mq.md} {
  }
`
const MainTitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  font-family: ${({ theme }) => theme.fonts.subFont};
  align-text: center;
  line-height: 4rem;
`
const SubTitleWrapper = styled.span`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 2.7rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fonts.subFont};
`

const StyledWaveImg = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  transform: translateY(25%);
`

const Header = () => {
  return (
    <Wrapper id="home">
      <TitlesWrapper>
        <MainTitleWrapper>
          Szkółka pływacka <br />
          Mar sport
        </MainTitleWrapper>
        <SubTitleWrapper>
          Niezależnie od tego, czy szukasz zajęć z pływania dla niemowląt,
          małych dzieci, czy też dorosłych, Mar sport oferuje różnorodne lekcje
          pływania dla wszystkich grup wiekowych i poziomów umiejętności.
        </SubTitleWrapper>
      </TitlesWrapper>
      <ButtonWrapper>
        <Link to="contact">
          <StyledCustomButton color="lightRed">o nas</StyledCustomButton>
        </Link>
      </ButtonWrapper>
      <StyledWaveImg src={WaveImg} />
    </Wrapper>
  )
}

export default Header
