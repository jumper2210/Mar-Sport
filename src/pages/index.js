import React from 'react'
import Header from 'components/organisms/Header/Header'
import Navigation from 'components/organisms/Navigation/Navigation'
import NavigationProvider from 'contexts/NavigationProvider'
import Trainers from 'components/organisms/Trainers/Trainers'
import Offers from 'components/organisms/Offers/Offers'

const IndexPage = () => (
  <NavigationProvider>
    <Navigation />
    <Header />
    <Trainers />
    <Offers />
  </NavigationProvider>
)
export default IndexPage
