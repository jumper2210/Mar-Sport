import React from 'react'
import styled from 'styled-components'
import HeaderImg from 'assets/images/headerImg.jpg'
import CustomButton from 'components/atoms/CustomButton/CustomButton'
import { Link } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'

const Wrapper = styled.section`
  position: relative;
  height: 120vh;
  top: 0;
  background-image: url(${HeaderImg});
  background-size: cover;
  background-position: left;
`

const InnerWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  top: 15%;
  left: 0;
  height: 100vh;
`
const Gradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.5));
`
const TitlesWrapper = styled.span`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;
  text-align: left;
  z-index: 1;
  ${({ theme }) => theme.mq.md} {
    align-items: start;
    padding: 0 5rem;
  }
`
const MainTitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 4rem;
  width: 100%;
  text-transform: uppercase;
  padding: 1.5rem 0;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xxlm};
  }
  ${({ theme }) => theme.mq.xxl} {
    font-size: ${({ theme }) => theme.fontSize.xxxlm};
    line-height: 8rem;
  }
`
const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 2.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding-bottom: 3rem;
  ${({ theme }) => theme.mq.md} {
    width: 60%;
    padding-top: 5rem;
  }
  ${({ theme }) => theme.mq.xxl} {
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 3.4rem;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  z-index: 10;
  padding-left: 2rem;
  padding-bottom: 20rem;
  ${({ theme }) => theme.mq.s} {
    padding-left: 5rem;
  }
`
const StyledCustomButton = styled(CustomButton)`
  padding: 1rem 4rem;
  ${({ theme }) => theme.mq.md} {
    padding: 1.7rem 4.5rem;
  }
`
const Header = () => {
  return (
    <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
      <Wrapper id="home">
        <Gradient />
        <InnerWrapper>
          <TitlesWrapper>
            <MainTitleWrapper>
              Lekcje pływania dla dzieci i dorosłych
            </MainTitleWrapper>
            <Paragraph>
              Niezależnie od tego, czy szukasz zajęć z pływania dla niemowląt,
              małych dzieci, czy też dorosłych, Mar sport oferuje różnorodne
              lekcje pływania dla wszystkich grup wiekowych i poziomów
              umiejętności.
            </Paragraph>
          </TitlesWrapper>
          <ButtonWrapper>
            <Link to="trainers">
              <StyledCustomButton color="blue">
                Nasi trenerzy
              </StyledCustomButton>
            </Link>
          </ButtonWrapper>
        </InnerWrapper>
      </Wrapper>
    </Parallax>
  )
}

export default Header
