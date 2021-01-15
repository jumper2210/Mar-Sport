import styled, { css } from 'styled-components'

const Button = styled.button`
  text-decoration: none;
  border-radius: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.colors.color_secondary};
  cursor: pointer;
  ${({ color }) =>
    color === 'lightRed' &&
    css`
      border-color: ${({ theme }) => theme.colors.color_tertiary};
      background: ${({ theme }) => theme.colors.color_tertiary};
    `}
  ${({ color }) =>
    color === 'blue' &&
    css`
      background: ${({ theme }) => theme.colors.color_secondary} !important;
      &:hover {
        border-color: ${({ theme }) => theme.colors.color_secondary};
        background: ${({ theme }) => theme.colors.color_secondary};
      }
    `}
  ${({ color }) =>
    color === 'grey' &&
    css`
      border-color: ${({ theme }) => theme.colors.grey} !important;
      background: ${({ theme }) => theme.colors.grey} !important;
      &:hover {
        border-color: ${({ theme }) => theme.colors.grey};
        background: ${({ theme }) => theme.colors.grey};
      }
    `}
`

export default Button
