import React from 'react'
import styled from 'styled-components'
import HeaderImg from 'assets/images/headerImg.jpg'
import CustomButton from 'components/atoms/CustomButton/CustomButton'
import { Link } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'

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
const Gradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 10;
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.5));
`

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 8%;
  justify-content: start;
  z-index: 10;
  width: 100%;
  padding-left: 2rem;
  ${({ theme }) => theme.mq.md} {
    bottom: 15%;
  }
`
const StyledCustomButton = styled(CustomButton)`
  padding: 1rem 4rem;
  ${({ theme }) => theme.mq.md} {
    padding: 1.7rem 4.5rem;
  }
`

const TitlesWrapper = styled.span`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem;
  align-items: center;
  text-align: left;
  z-index: 100;
  ${({ theme }) => theme.mq.md} {
    align-items: start;
  }
`

const MainTitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xxlm};
  line-height: 4rem;
  width: 100%;
  text-transform: uppercase;
  padding: 3rem 0;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  ${({ theme }) => theme.mq.xxl} {
    font-size: ${({ theme }) => theme.fontSize.xxxlm};
    line-height: 8rem;
  }
`
const SubTitleWrapper = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 2.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-bottom: 3rem;
  ${({ theme }) => theme.mq.md} {
    width: 50%;
    padding-bottom: 0;
  }
  ${({ theme }) => theme.mq.xxl} {
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 3.4rem;
  }
`

const Header = () => {
  return (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <Wrapper id="home">
        <Gradient />
        <TitlesWrapper>
          <MainTitleWrapper>
            Lekcje pływania dla dzieci i dorosłych
          </MainTitleWrapper>
          <SubTitleWrapper>
            Niezależnie od tego, czy szukasz zajęć z pływania dla niemowląt,
            małych dzieci, czy też dorosłych, Mar sport oferuje różnorodne
            lekcje pływania dla wszystkich grup wiekowych i poziomów
            umiejętności.
          </SubTitleWrapper>
        </TitlesWrapper>

        <ButtonWrapper>
          <Link to="contact">
            <StyledCustomButton color="blue">nasi trenerzy</StyledCustomButton>
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </Parallax>
  )
}

export default Header
