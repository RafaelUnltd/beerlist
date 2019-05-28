import React from 'react'

import AppNavigator from './AppNavigator'

import ThemeProvider from './provider/ThemeProvider'
import StorageProvider from './provider/StorageProvider'

const Main = () => (
  <StorageProvider>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </StorageProvider>
)

export default Main
