import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { NavigationContext } from '../../../contexts/NavigationProvider'
import gsap from 'gsap'
import Links from '../../../components/organisms/Navigation/Links'
import MenuButton from '../../../components/organisms/Navigation/MenuButton'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 20;
  justify-content: flex-end;
  ${({ theme }) => theme.mq.md} {
    display: none;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  transition: 0.4s;
  visibility: hidden;
  overflow: scroll;
`

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Background = styled.div`
  position: fixed;
  top: -80rem;
  right: -80rem;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gradient_color};
  will-change: transform;
  z-index: -1;
`

const FullNav = () => {
  const { handlePopIn } = useContext(NavigationContext)
  const listRef = useRef(null)
  const contentRef = useRef(null)
  const bgRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    const background = bgRef.current
    const content = contentRef.current
    const btn = btnRef.current

    if (list && background && content && btn) {
      const [button] = btn.children
      const listItems = [...list.children]

      const closePopInNav = () => {
        tl.reverse()
        handlePopIn(false)
      }
      const clickHandler = () => {
        tl.reversed() ? tl.play() : tl.reverse()
      }

      listItems.forEach(item => item.addEventListener('click', closePopInNav))
      button.addEventListener('click', clickHandler)

      const tl = gsap.timeline({
        defaults: { ease: 'Power3.easeOut' },
        reversed: true,
      })
      tl.set(content, { visibility: 'visible' })

      tl.to(background, {
        scale: 7,
        duration: 0.4,
        ease: ' Circ.easeOut',
        y: -100,
      })

      tl.addLabel('showItems')

      tl.from(listItems, { x: -44, autoAlpha: 0, stagger: 0.2 }, 'showItems')
    }
  }, [])

  return (
    <Wrapper>
      <div ref={btnRef}>
        <MenuButton />
      </div>
      <Background ref={bgRef} />
      <Content ref={contentRef}>
        <ListWrapper>
          <List ref={listRef}>
            <Links mobile />
          </List>
        </ListWrapper>
      </Content>
    </Wrapper>
  )
}

export default FullNav
