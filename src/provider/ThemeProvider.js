import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components/native'

const Theme = {
  colors: {
    main: '#E44430'
  }
}

const ThemeProvider = props => (
  <SCThemeProvider theme={Theme}>
    {props.children}
  </SCThemeProvider>
)

export default ThemeProvider
