import React,{useState,useEffect} from 'react';

function Posts() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
      setPosts(data);
      setLoading(false);
    })
    .catch((err)=>{
      setError(err.message);
      setLoading(false);
    })
  },[]);

  if(loading) return <p>Loading Posts..</p>
  if(error) return <p>Error: {error}</p>
  return (
    <div>

      <h2>Post List</h2>
      <ul>
        {
          posts.slice(0,5).map((post)=>(
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Posts