import React, { useEffect, useState, createContext } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const NavigationContext = createContext({
  activeLink: 'home',
  isNavVisible: false,
  isTransparent: true,
  handlePopIn: () => null,
})

const NavigationProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home')
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)

  useEffect(() => {
    ScrollTrigger.create({
      start: '30',
      endTrigger: 'footer',
      end: 'bottom top',
      onToggle: ({ isActive }) => setIsTransparent(!isActive),
    })

    ScrollTrigger.create({
      trigger: 'home',
      start: 'top',
      end: 'bottom 90%',
      onToggle: ({ isActive }) => isActive && setActiveLink('home'),
    })
    const sections = document.querySelectorAll('section')

    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom bottom',
        onToggle: ({ isActive }) => isActive && setActiveLink(section.id),
      })
    })
  }, [])

  const handlePopIn = isVisible => {
    setIsNavVisible(isVisible)
    if (isVisible) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }
  const context = {
    activeLink,
    isNavVisible,
    isTransparent,
    handlePopIn,
  }
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
