import React from 'react'
import styled from 'styled-components'
import OfferWrapper from 'components/atoms/OfferWrapper/OfferWrapper'
import ReadMoreReact from 'read-more-react'

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
  ${({ theme }) => theme.mq.xl} {
    width: 11rem;
    height: 11rem;
  }
`
const Name = styled.h3`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.subFont};
  text-transform: uppercase;
  padding-top: 8rem;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xlg};
  }
  ${({ theme }) => theme.mq.xl} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`
const TrainerName = styled.p`
  font-weight: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.color_secondary};
  padding-top: 4rem;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  ${({ theme }) => theme.mq.xl} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const Icon = styled.img`
  width: 50%;
  height: 70%;
  object-fit: contain;
  ${({ theme }) => theme.mq.xl} {
    width: 65%;
    height: 80%;
  }
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
    </OfferWrapper>
  )
}

export default Offer
