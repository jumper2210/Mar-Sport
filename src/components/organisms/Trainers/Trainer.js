import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.color_secondary};
  width: 100%;
  max-width: 500px;
`
const InnerWrapper = styled.div`
  position: relative;
`
const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 70%;
  bottom: 0%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, 40%);
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  z-index: 15;
  height: 8rem;
  padding: 0.5rem;
`
const Name = styled.h3`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
const Description = styled.p`
  color: ${({ theme }) => theme.colors.color_secondary};
`

const Trainer = ({ fullName, description, image }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Image fluid={image} alt={fullName} />
        <TextWrapper>
          <Name>{fullName}</Name>
          <Description>{description}</Description>
        </TextWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Trainer
