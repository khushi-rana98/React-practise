import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Content() {
  const {theme}=useContext(ThemeContext);
  return (
    <div>
      <h3>Current Theme: {theme}</h3>
    </div>
  )
}

export default Content