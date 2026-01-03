import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Footer() {
  const {theme}=useContext(ThemeContext);
  return (
    <div>
      <p>Footer theme={theme}</p>
    </div>
  )
}

export default Footer