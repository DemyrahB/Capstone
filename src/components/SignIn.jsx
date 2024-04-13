import { useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn(){
    const APIURL = "https://fakestoreapi.com/auth/login"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    async function handleSignIn(){
    axios.post(APIURL, {
        username: username,
        password: password
      })
      .then(function (response) {
        console.log(response);
        if(response.data.token){
            navigate('/userhome')
            const token = response.data.token
            localStorage.setItem("jsonwebtoken", token)
        } else{
            alert("Error")
        }
      } 
      )
      .catch(function (error) {
        console.log(error);
      });
 }

    return(
        <>
        <div className="container">
            <div>
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png" alt="logo" className="e-commerce-logo1"/></Link>
            </div>
        <div>
            
            </div>
        <div className="login">
            <form className="login-form" onSubmit={handleSignIn()}>
                <h2>SIGN IN</h2>
                <input 
                type="text" 
                placeholder="Username"
                required
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}/>
                <input 
                type="password" 
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="login-btn">Login</button>
            </form>
        </div>
        <div>
            <p>Don't have an Account? <Link to={"/SignUp"}>Sign Up</Link></p>
        </div>
        </div>

        </>
    )
}