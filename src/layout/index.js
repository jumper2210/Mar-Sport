import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../theme/GlobalStyle"
import { theme } from "../theme/mainTheme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Layout
