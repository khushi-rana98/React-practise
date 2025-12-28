import {Routes,Route} from 'react-router-dom';
import Users from './users'
import UserDetails from './userDetails';
function App(){
    return(
       <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
       </Routes>
    );
}
export default App;