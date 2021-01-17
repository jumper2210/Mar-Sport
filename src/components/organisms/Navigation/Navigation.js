import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Logo from 'components/atoms/Logo/Logo'
import FullNav from 'components/organisms/Navigation/FullNav'
import Links from 'components/organisms/Navigation/Links'
import gsap from 'gsap'
import { NavigationContext } from 'contexts/NavigationProvider'

const Wrapper = styled.nav`
  position: fixed;
  height: 12vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  z-index: 25;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`
const LogoWrapper = styled.div`
  display: flex;
  width: 13rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`

const List = styled.ul`
  display: none;
  align-items: center;
  opacity: 0;
  ${({ theme }) => theme.mq.md} {
    display: flex;
  }
`

const Navigation = () => {
  const { isTransparent } = useContext(NavigationContext)
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (list) {
      const listItems = list.children
      gsap.to(list, { autoAlpha: 1 })
      gsap.fromTo(
        listItems,
        { x: -50, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
          duration: 1,
        }
      )
    }
  }, [])

  return (
    <Wrapper isActive={!isTransparent}>
      <InnerWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <List ref={listRef}>
          <Links />
        </List>
      </InnerWrapper>
      <FullNav />
    </Wrapper>
  )
}

export default Navigation
