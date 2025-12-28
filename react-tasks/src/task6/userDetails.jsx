import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

function UserDetails(){

    const {id}=useParams();
    const [user,setUser]=useState(null);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[id]);
 
    if(!user) return <p>Loading...</p>



    return(
        <div>
            <h2>User Details..</h2>
            <p>Name: {user.title}</p>
            <p>Completed: {user.completed?"Yes":"No"}</p>
        </div>
    )
}
export default UserDetails;