import {Routes,Route} from 'react-router-dom';
import Home from './task2/Home';
import About from './task2/About';
import Contact from './task2/Contact';
import Navbar from './task2/Navbar'
function App1(){
    return(
        <div>
<Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
    )
}
export default App1;