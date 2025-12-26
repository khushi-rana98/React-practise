import {useSearchParams} from 'react-router-dom';

function User(){
    const [SearchParams] = useSearchParams();
    const name=SearchParams.get('username');
    return(
        <div>
            <h2>This is user Page</h2>
            <h4>Hello ,{name?name:"User"}!</h4>
        </div>
    )
}
export default User;