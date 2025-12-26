import {Routes,Route} from 'react-router-dom';
import Home from './Home';

import User from './User';
function App4(){
    return(
        <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
           
            <Route path='/user' element={<User/>}/>
        </Routes>
        </div>
    )
}
export default App4;