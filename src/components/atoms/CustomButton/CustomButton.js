import styled, { css } from 'styled-components'

const Button = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 1rem;
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
      background: ${({ theme }) => theme.colors.gradient_color} !important;
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
