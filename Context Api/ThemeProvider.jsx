import React from 'react'
import { ThemeContext } from './ThemeContext'
import {useState} from 'react';

function ThemeProvider({children}) {
  const [theme,setTheme]=useState("light");
  const toggleTheme=()=>{
    setTheme(theme==="light"?"dark":"light");
  };

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider