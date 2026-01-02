import React from 'react'
import useFetch from './useFetch'
function Posts() {
  const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts");

  if(loading) return <p>Loading Posts..</p>
  if(error) return <p>Error: {error}</p>
  return (
    <>
    <h2>Post List</h2>
    <ul>
      {
        data.slice(0,5).map((post)=>{
          return <li key={post.id}>{post.title}</li>
        })
      }
    </ul>
    </>
  )
}

export default Posts