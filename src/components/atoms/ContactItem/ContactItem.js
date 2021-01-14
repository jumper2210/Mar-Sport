import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ color }) =>
    color === 'blue' &&
    css`
      background: ${({ theme }) => theme.colors.color_secondary};
    `}
  ${({ color }) =>
    color === 'lightBlue' &&
    css`
   background: ${({ theme }) => theme.colors.color_primary}; !important;
    `}
  ${({ color }) =>
    color === 'red' &&
    css`
       background: ${({ theme }) => theme.colors.color_tertiary}; !important;
    `}
`
const Icon = styled.img`
  width: 50%;
  height: 30%;
  object-fit: contain;
`

const Name = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.subFont};
  text-transform: uppercase;
`

const TrainerData = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.subFont};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
  width: 100%;
  align-items: center;
`

const ContactItem = ({
  iconURL,
  name,
  firstTrainerData,
  secondTrainerData,
  color,
}) => {
  return (
    <Wrapper color={color}>
      <InnerWrapper>
        <Icon src={iconURL} />
        <Name>{name}</Name>
        <TrainerData>{firstTrainerData}</TrainerData>
        <TrainerData>
          {secondTrainerData && secondTrainerData.lenght > 0
            ? secondTrainerData
            : ''}
        </TrainerData>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ContactItem
