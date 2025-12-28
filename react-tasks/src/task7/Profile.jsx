import {  useNavigate } from "react-router-dom";
function Profile(){
    const navigate=useNavigate();
    const user=localStorage.getItem("user")
    return(
        <div>
            <h2>Profile</h2>
            <p>Name: {user}</p>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}
export default Profile;