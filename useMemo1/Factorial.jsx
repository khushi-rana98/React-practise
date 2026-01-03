import { useState,useMemo } from "react";
function Factorial(){
  const [num,setNum]=useState(5);
  const [count,setCount]=useState(0);

  const Factorial=useMemo(()=>{
    console.log("calculating Factorial...");
    let result=1;
    for(let i=1;i<=num;i++){
      result*=i;
    }
    return result;
  },[num]);
  return(
    <div>
      <h2>Factorial: {Factorial}</h2>
      <h3>Count: {count}</h3>
      <button onClick={()=>setNum(num+1)}>Change Number</button>
      <button onClick={()=>setCount(count+1)}>Change count</button>
    </div>
  )
}
export default Factorial;