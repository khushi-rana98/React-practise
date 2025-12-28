import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Users(){

    const [users,setUsers]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>setUsers(data));
    },[]);

    return(
    <div>
        <h2>Users List </h2>
       
            {users.map(user=>(
                <p key={user.id} onClick={()=>navigate(`/users/${user.id}`)}>{user.title}</p>
            ))}
        
    </div>
    )
}
export default Users;