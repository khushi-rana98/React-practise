import React from 'react'
import useFetch from './useFetch'

function Users() {
  const { data, loading, error } =
    useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>loading data...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {
          data.slice(0,5).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users
