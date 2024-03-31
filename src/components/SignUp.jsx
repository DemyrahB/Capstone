import { useState } from "react"
import { Link } from "react-router-dom"

export default function SignUp(){
    const APIURL = "https://fakestoreapi.com/users"
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [zipcode, setZipCode] = useState("")
    const [phone, setPhone] = useState("")

    async function handleSignUp (e){
        e.preventDefault();
        try {
            const response = await fetch(APIURL, {
                method: "POST", 
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                    name: {
                        firstname: firstname,
                        lastname: lastname
                    },
                    address:{
                        city: city, 
                        street: street,
                        number: number,
                        zipcode: zipcode
                    },
                    phone: phone
                })
            })
            const result = response.json()
           if(Promise){
            alert("Error")
           } else{
            alert("Success")
           }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
        <h2>NEW USER REGISTRATION</h2>
        <div className="signup-form">
            <form onSubmit={handleSignUp}>  
                <input 
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}} />
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
                onChange={(e)=>{setPassword(e.target.value)}} />
                <input 
                type="text"
                placeholder="First Name"
                required
                value={firstname}
                onChange={(e)=>{setFirstName(e.target.value)}} />
                <input 
                type="text"
                placeholder="Last Name"
                required
                value={lastname}
                onChange={(e)=>{setLastName(e.target.value)}} />
                <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e)=>{setCity(e.target.value)}} />
                <input 
                type="text"
                placeholder="street"
                required
                value={street}
                onChange={(e)=>{setStreet(e.target.value)}} />
                <input 
                type="number"
                placeholder="Apt number"
                required
                value={number}
                onChange={(e)=>{setNumber(e.target.value)}} />
                <input 
                type="number"
                placeholder="zipcode"
                required
                value={zipcode}
                onChange={(e)=>{setZipCode(e.target.value)}} />
                <input 
                type="number"
                placeholder="Phone number"
                required
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}} />
                <button className="signup-btn">Sign Up</button>
            </form>
        </div>
        </>
    )
}