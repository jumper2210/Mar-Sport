import React from 'react'
import styled from 'styled-components'
import ContactItem from 'components/atoms/ContactItem/ContactItem'
import MailIcon from '../../../assets/icons/mail.svg'
import PhoneIcon from '../../../assets/icons/phone-call.svg'
import HomeIcon from '../../../assets/icons/home.svg'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14rem 0;
  position: relative;
  ${({ theme }) => theme.mq.md} {
    padding: 20rem 0;
  }
  ${({ theme }) => theme.mq.xl} {
    padding: 34rem 0 10rem 0;
  }
`

const InnerWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 30rem);
  grid-template-columns: 1fr;
  width: 80%;
  gap: 8rem;
  ${({ theme }) => theme.mq.md} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    gap: 5rem;
    justify-items: center;
  }
`
const Svg = styled.svg`
  position: absolute;
  top: 0;
  transform: translateY(0%);
`

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#15498b"
          fill-opacity="1"
          d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,96C840,85,960,107,1080,133.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </Svg>
      <InnerWrapper>
        <Fade>
          <ContactItem
            iconURL={HomeIcon}
            name="Adres"
            firstTrainerData="Myszków mosir"
            color="red"
          />
        </Fade>
        <Fade>
          <ContactItem
            iconURL={PhoneIcon}
            name="Numer telefonu"
            firstTrainerData="444 444 222"
            secondTrainerData="222 222 222"
            color="blue"
          />
        </Fade>
        <Fade>
          <ContactItem
            iconURL={MailIcon}
            name="Mail"
            firstTrainerData="lorem@ipsum.pl"
            secondTrainerData="lorem@ipsum.pl"
            color="lightBlue"
          />
        </Fade>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
