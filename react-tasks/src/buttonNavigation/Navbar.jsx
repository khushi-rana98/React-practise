import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <NavLink to="/" className={({isActive})=>isActive?"text-orange-800":"text-gray-300"}>Home</NavLink>| {" "}
            <NavLink to="/about" className={({isActive})=>isActive?"text-orange-800":"text-gray-500"}>ABout</NavLink> |{" "}
            <NavLink to="/contact" className={({isActive})=>isActive?"text-orange-800":"text-gray-500"}>Contact</NavLink>
        </div>
    )
}
export default Navbar