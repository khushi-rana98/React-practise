import React from 'react'
import Navbar from './Nav'
import Content from './Content';
import Footer from './Footer'

import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
function Layout() {
  const {theme} = useContext(ThemeContext);
  return (
    <div style={{backgroundColor:theme==="light"?"white":"black",
      color:theme==="light"?"black":"white"
    }}>
  
    <Navbar/>
    <Content/>
    <Footer/>
  </div>

  )
}

export default Layout