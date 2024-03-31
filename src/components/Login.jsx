import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"


export default function Login(){
    const APIURL = "https://fakestoreapi.com/auth/login"
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    
    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await fetch (APIURL, {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response=>response.json())
            .then(json=>console.log(json))
        } catch (error) {
            throw error
        }
    }
    return(
        <>
        <div>
            <h2>EXISING USER LOGIN</h2>
            </div>
        <div className="login">
            <form onSubmit={handleLogin} className="login-form">
                <input 
                type="text" 
                placeholder="Username"
                required
                value={username}
                onChange={(e)=>{setUserName(e.target.value)}}/>
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
        </>
    )
}