import React from 'react'
import {useState} from 'react';

function Counter() {
  const [count,setCount]=useState(0);

  const handleClick=()=>{
    setCount(count+1);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Counter