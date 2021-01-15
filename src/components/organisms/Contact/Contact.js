import React from 'react'
import styled from 'styled-components'
import ContactItem from 'components/atoms/ContactItem/ContactItem'
import MailIcon from 'assets/icons/mail.svg'
import PhoneIcon from 'assets/icons/phone-call.svg'
import HomeIcon from 'assets/icons/home.svg'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InnerWrapper = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(3, 30rem);
  grid-template-columns: 1fr;
  width: 80%;
  gap: 8rem;
`

const Contact = () => {
  return (
    <Wrapper id="contact">
      <InnerWrapper>
        <ContactItem
          iconURL={HomeIcon}
          name="Adres"
          firstTrainerData="Myszków mosir"
          color="blue"
        />
        <ContactItem
          iconURL={PhoneIcon}
          name="Numer telefonu"
          firstTrainerData="444 444 222"
          secondTrainerData="222 222 222"
          color="red"
        />
        <ContactItem
          iconURL={MailIcon}
          name="Mail"
          firstTrainerData="lorem@ipsum.pl"
          secondTrainerData="lorem@ipsum.pl"
          color="lightBlue"
        />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
