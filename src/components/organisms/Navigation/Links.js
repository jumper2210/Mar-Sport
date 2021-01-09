import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-scroll'
import useMedia from 'components/hooks/mediaHook'
import { NavigationContext } from 'contexts/NavigationProvider'

const NavigationList = styled.li`
  display: flex;
  position: relative;
  z-index: 100;
  color: ${({ theme }) => theme.colors.color_primary};
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -10px;
    width: 35px;
    height: 1.9px;
    background-color: ${({ theme }) => theme.colors.color_primary};
    transition: 0.4s;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.white};
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
      color: ${({ theme }) => theme.colors.color_primary};
      &:after {
        content: none;
      }
    `}
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.color_primary};
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const LinkWrapper = styled.div`
  padding-right: 10rem;
  ${({ mobile }) =>
    mobile &&
    css`
      display: flex;
      justify-content: space-around;
      background-color: ${({ theme }) => theme.colors.color_primary};
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
        isActive={activeLink === 'aboutUs'}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="oferta">
            Oferta
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === 'technologies'}
      >
        <LinkWrapper mobile={mobile || false}>
          <StyledLink duration={300} smooth={matches} to="kontakt">
            Kontakt
          </StyledLink>
        </LinkWrapper>
      </NavigationList>
      <NavigationList
        mobile={mobile || false}
        isActive={activeLink === 'contact'}
      ></NavigationList>
    </>
  )
}

export default Links
