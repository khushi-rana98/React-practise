import {Link } from 'react-router-dom';
function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/user?username="KhushiRana"'>Go To User</Link>
        </div>
    )
}
export default Home;