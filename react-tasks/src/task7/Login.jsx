import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [username,setUserName]=useState("");
    const navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        if(!username) return alert("Name is required");
        localStorage.setItem("user",username);
        setUserName("");
        navigate('/dashboard');
    }
    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input type="text"
                placeholder='Enter userName'
                value={username}
                onChange={(e)=>setUserName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}
export default Login;