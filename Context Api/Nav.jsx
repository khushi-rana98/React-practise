import React from 'react'
import {useContext} from 'react';
import { ThemeContext } from './ThemeContext';
function Nav() {
  const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div>

      <h2>NavBar</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Nav