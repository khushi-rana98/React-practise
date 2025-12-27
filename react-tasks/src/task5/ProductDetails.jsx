import {useLocation} from 'react-router-dom';
function ProductDetails(){
    const location=useLocation();
    const product=location.state;
    return(
        <div>
            <h2>Product Details</h2>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
        </div>

    )
}
export default ProductDetails