import { useNavigate } from "react-router-dom";
function Product(){
    const navigate=useNavigate();
    const product={
        name:"iphone 15",
        price:80000
    }
    const goToDetails=()=>{
        navigate('/details',{state:product});
    }
    return(
        <div>
            <h2>Product Details</h2>
            <p>{product.name} -${product.price}</p>
            <button onClick={goToDetails}>View Details</button>
        </div>
    )
}
export default Product;