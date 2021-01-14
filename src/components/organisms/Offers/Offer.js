import React from 'react'
import styled from 'styled-components'
import OfferWrapper from 'components/atoms/OfferWrapper/OfferWrapper'
import ReadMoreReact from 'read-more-react'

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
  width: 100%;
  align-items: center;
`
const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: #ececec;
`
const Name = styled.h3`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.subFont};
  text-transform: uppercase;
  padding-top: 1rem;
`
const TrainerName = styled.p`
  font-weight: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.color_secondary};
`

const Icon = styled.img`
  width: 50%;
  height: 70%;
  object-fit: contain;
`
const DetailsWrapper = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.color_secondary};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const Offer = ({ name, trainer, description, icon, borderColor }) => {
  return (
    <OfferWrapper borderColor={borderColor}>
      <InnerWrapper>
        <IconWrapper>
          <Icon src={icon.publicURL} />
        </IconWrapper>
        <Name>{name}</Name>
        <TrainerName>
          Instruktor &nbsp;
          {trainer}
        </TrainerName>
        <DetailsWrapper>
          <ReadMoreReact
            text={description}
            min={0}
            ideal={0}
            max={200}
            readMoreText="szczegóły"
          />
        </DetailsWrapper>
      </InnerWrapper>
    </OfferWrapper>
  )
}

export default Offer
