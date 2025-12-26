import {NavLink} from 'react-router-dom';
function Navbar(){
    return(
        <div className='flex gap-6 p-4 text-lg font-semibold'>
            <NavLink to='/' className={({isActive})=>isActive? "text-orange-700":"text-gray-500"}>
                Home
            </NavLink>
        <NavLink to='/about' className={({isActive})=>isActive? "text-orange-700":"text-gray-500"}>
            About
        </NavLink>
        <NavLink to='/contact' className={({isActive})=>isActive? "text-orange-700":"text-gray-500"}>
            Contact
        </NavLink>
        </div>
    )
}
export default Navbar;