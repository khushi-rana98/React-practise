import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const [todo, settodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => settodo(data));
  }, [id]);

  if (!todo) return <p>User Loading....</p>;

  return (
    <div>
      <h1>User details</h1>
      <p>User ID: {todo.userId}</p>
      <p>Name: {todo.title}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default UserDetails;
