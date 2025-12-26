import { useSearchParams } from "react-router-dom";
function User(){
    const [searchParams]=useSearchParams();
    const name=searchParams.get("username");
      return(
        <div>
            <h2>Welcome, {name? name: "Guest"}</h2>
        </div>
    )
}
export default User;