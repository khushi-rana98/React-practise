import {useNavigate} from 'react-router-dom';
function Dashboard(){
    const navigate=useNavigate();
    const user=localStorage.getItem("user");

    return(
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user}</p>
            <button onClick={()=>navigate('/profile')}>Profile</button>
            <button onClick={()=>navigate('/users')}>Users List</button>
            <button onClick={()=>navigate(-1)}>Go back</button>
            <button onClick={()=>navigate(1)}>Go forward</button>
        </div>
    )
}
export default Dashboard;