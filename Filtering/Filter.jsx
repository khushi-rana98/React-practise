import React from 'react'
import {useState,useMemo} from 'react';
function Filter() {
  const [searchItem,setSearchItem]=useState("");

  const items=[
    "apple",
    "Banana",
    "Orange",
    "Mango",
    "PineApple",
    "Grapes",
    "Strawberry"
  ];

  const filteredItems=useMemo(()=>{
    console.log("Filtered items...");
    return items.filter(item=>
      item.toLowerCase().includes(searchItem.toLowerCase())
    );
  },[items,searchItem]);
  return (
    <div>
      <h2>Search Items</h2>
      <input type="text"
      placeholder='Search...'
      value={searchItem}
      onChange={(e)=>setSearchItem(e.target.value)} />
      <ul>
        {
          filteredItems.length>0 ? (
            filteredItems.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          ):(
            <li>No items found</li>
          )
        }
      </ul>
    </div>
  )
}

export default Filter