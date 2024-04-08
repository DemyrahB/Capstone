import { useEffect } from "react"


export default function Admin(){
    useEffect(()=>{
      async function getAllUsers(){
        try {
            const response = await fetch ("https://fakestoreapi.com/users")
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
      }getAllUsers()
       
    }, [])
    
    return(
        <>
        
        </>
    )
}