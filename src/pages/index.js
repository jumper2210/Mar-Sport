import React from 'react'
import Header from 'components/organisms/Header/Header'
import Navigation from 'components/organisms/Navigation/Navigation'
import NavigationProvider from 'contexts/NavigationProvider'
import Trainers from 'components/organisms/Trainers/Trainers'
import Offers from 'components/organisms/Offers/Offers'
import Footer from 'components/organisms/Footer/Footer'
import Contact from 'components/organisms/Contact/Contact'
import { ParallaxProvider } from 'react-scroll-parallax'

const IndexPage = () => (
  <ParallaxProvider>
    <NavigationProvider>
      <Navigation />
      <Header />
      <Trainers />
      <Offers />
      <Contact />
      <Footer />
    </NavigationProvider>
  </ParallaxProvider>
)
export default IndexPage
