import {Navigate} from 'react-router-dom';
// Protected route checks login status from localStorage, if user is not logged in, it redirects to loginm
// otherwise it renders the protected component

function ProtectedRoute({children}){
    const user=localStorage.getItem("user");
   if(!user) return <Navigate to='/login' replace/>
   return children;
}
export default ProtectedRoute;
