import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Users(){

    const [users,setUsers]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[]);


    return(
        <div>
            <h1>Users List: </h1>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}
                    onClick={()=>navigate(`/users/$user.id`)}
                    >{user.title}</li>
                ))}
            </ul>

        </div>
    )
}
export default Users;