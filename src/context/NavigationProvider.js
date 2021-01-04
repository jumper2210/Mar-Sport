import React, { createContext } from "react"

export const NavigationContext = createContext({})

const NavigationProvider = ({ children }) => {
  const context = {}
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
