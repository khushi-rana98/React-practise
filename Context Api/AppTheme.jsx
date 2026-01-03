import React from 'react'
import ThemeProvider from './ThemeProvider'
import Layout from './Layout'
function AppTheme() {
  return (
   <ThemeProvider>
    <Layout/>
   </ThemeProvider>
  )
}

export default AppTheme