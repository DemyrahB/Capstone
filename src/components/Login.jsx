import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"


export default function Login(){
    const APIURL = "https://fakestoreapi.com/auth/login"
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate() 


    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await fetch (APIURL, {
                method: 'POST',
                body:JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <body className="container">
            <div>
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png" alt="logo" className="e-commerce-logo1"/></Link>
            </div>
        <div>
            
            </div>
        <div className="login">
            <form onSubmit={handleLogin} className="login-form">
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
        </body>
    )
}