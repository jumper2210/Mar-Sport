import React from 'react'
import Header from 'components/organisms/Header/Header'
import Navigation from 'components/organisms/Navigation/Navigation'
import NavigationProvider from 'contexts/NavigationProvider'

const IndexPage = () => (
  <NavigationProvider>
    <Navigation />
    <Header />
  </NavigationProvider>
)
export default IndexPage
