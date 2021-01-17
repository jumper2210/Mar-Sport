import styled, { css } from 'styled-components'

const OfferWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  border: 4px solid ${({ theme }) => theme.colors.color_tertiary};
  }
  ${({ borderColor }) =>
    borderColor === 'blue' &&
    css`
      border-color: ${({ theme }) => theme.colors.color_secondary};
    `}
  ${({ borderColor }) =>
    borderColor === 'red' &&
    css`
      border-color: ${({ theme }) => theme.colors.color_tertiary} !important;
    `}
  ${({ borderColor }) =>
    borderColor === 'lightBlue' &&
    css`
      border-color: ${({ theme }) => theme.colors.color_primary} !important;
    `}
`

export default OfferWrapper
