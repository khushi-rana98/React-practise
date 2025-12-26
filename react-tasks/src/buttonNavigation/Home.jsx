import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();

    const gotoAbout=()=>{
        navigate('/about');
    };

    const gotoContact=()=>{
        navigate('/contact');
    }
    return(
        <div>
            <h2>Home Page</h2>
            <button onClick={gotoAbout}>Go to About</button>
            <button onClick={gotoContact}>Go to contact</button>
        </div>
    )
}
export default Home;