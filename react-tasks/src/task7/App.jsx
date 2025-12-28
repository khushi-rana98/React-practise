import { Routes,Route } from "react-router-dom";
import Login from './Login';
import Dashboard from "./Dashboard";
import Profile from './Profile';
import Users from './Users';
import UserDetails from "./UserDetails";
import ProtectedRoute from "./ProtectedRoute";
import {Navigate} from 'react-router-dom'

function App(){
    return(
       <Routes>
        <Route path="/" element={<Navigate to="/login" replace/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        }/>
    <Route path='/profile' element={
        <ProtectedRoute>
            <Profile/>
        </ProtectedRoute>
    }/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/users/:id' element={<UserDetails/>}/>
    <Route path="*" element={<h2>404 Page not found</h2>}/>
       </Routes>
    )
}
export default App;