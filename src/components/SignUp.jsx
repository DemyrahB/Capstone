import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function SignUp(){
    const APIURL = "https://fakestoreapi.com/users"
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()


    async function handleSignUp (e){
        e.preventDefault();
        try {
            const response = await fetch(APIURL, {
                method: "POST", 
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                    name: name,
                })
            })
            const result = await response.json()
           if(result.id){
            alert("Registration Successful. Please login using your credentials.")
           } else{
            alert("Error")
           }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
        <div>
        <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png" alt="logo" className="e-commerce-logo1"/></Link>
        </div>
        
        <div className="signup-form">

            <form onSubmit={handleSignUp} className="signup"> 
                <h2>Create Account</h2>
                <label htmlFor="">Your name</label>
                <input 
                    type="text"
                    placeholder="First and last name"
                    required
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}} />
                <label htmlFor="">Email</label>
                <input 
                type="email"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="">Username</label>
                <input
                type="text"
                required
                value={username}
                onChange={(e)=>{setUserName(e.target.value)}}/>
                <label htmlFor="">Password</label>
                <input 
                type="password"
                placeholder="At least 6 characters"
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}} />
                <label htmlFor="">Re-enter password</label>
                <input 
                type="password"
                required
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}} />
                <button className="signup-btn">Sign Up</button>
            </form>
            <div>
                <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>
            </div>
        </div>
        </>
    )
}