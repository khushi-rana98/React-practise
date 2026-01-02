import React from 'react'
import useCounter from './Counter'
function CounterComponent() {
  const {count,increment,decrement}=useCounter();
  return (
  <>
  <p>{count}</p>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
  </>
  )
}

export default CounterComponent