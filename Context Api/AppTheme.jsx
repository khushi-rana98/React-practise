import React from 'react'
import Navbar from './Nav'
import Content from './Content';
import Footer from './Footer'
import ThemeProvider from './ThemeProvider';
function AppTheme() {
  return (
  <ThemeProvider>
    <Navbar/>
    <Content/>
    <Footer/>
  </ThemeProvider>

  )
}

export default AppTheme