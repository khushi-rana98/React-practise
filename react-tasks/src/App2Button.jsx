import {Routes,Route} from 'react-router-dom';
import Navbar from './buttonNavigation/Navbar';
import Home from './buttonNavigation/Home';
import About from './buttonNavigation/About';
import Contact from './buttonNavigation/Contact'

function App2Button(){
    return(
        <div>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}
export default App2Button;