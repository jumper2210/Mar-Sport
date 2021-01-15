import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-scroll'
import useMedia from 'components/hooks/mediaHook'
import { NavigationContext } from 'contexts/NavigationProvider'

const NavigationList = styled.li`
  display: flex;
  position: relative;
  z-index: 100;
  color: ${({ theme }) => theme.colors.color_secondary};
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -10px;
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.color_secondary};
    transition: 0.4s;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.color_secondary};
      &:after {
        transform: scaleX(1.2);
      }
    `}
  ${({ mobile }) =>
    mobile &&
    css`
      height: 100%;
      width: 100vw;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.white};
      &:after {
        content: none;
      }
    `}
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.color_secondary};
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:hover {
    color: ${({ theme }) => theme.colors.color_primary};
  }
`

const LinkWrapper = styled.div`
  padding-right: 10rem;
  ${({ mobile }) =>
    mobile &&
    css`
      display: flex;
      justify-content: space-around;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 1.4rem;
      width: 14rem;
      padding: 1rem;
      margin: 2rem 0;
    `}
`

const Links = ({ mobile }) => {
  const { activeLink } = useContext(NavigationContext)
  const matches = useMedia('(min-width: 800px)')
  return (
    <>
      <NavigationList mobile={mobile || false} isActive={activeLink === 'home'}>
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="home">
            Start
          </StyledLink>
        </LinkWrapper>
      </NavigationList>

      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === 'trainers'}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="trainers">
            Trenerzy
          </StyledLink>
        </LinkWrapper>
      </NavigationList>

      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === 'offers'}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="offers">
            Oferta
          </StyledLink>
        </LinkWrapper>
      </NavigationList>

      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === 'contact'}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="contact">
            Kontakt
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
    </>
  )
}

export default Links
