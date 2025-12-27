import {Routes,Route} from 'react-router-dom';
import Product from './Product';
import ProductDetails from './ProductDetails';

function App(){
return(
    <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/details' element={<ProductDetails/>}/>
    </Routes>
)
}
export default App;