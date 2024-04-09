{/*import { useEffect, useState } from "react"
import Header from "./Header"
import { Link, useNavigate } from "react-router-dom"

export default function Products(){
    const APIURL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])


    useEffect(()=>{
        async function getAllProducts(){
            try {
            const response = await fetch(APIURL)
            const result = await response.json()
            setProducts(result)
            } catch (error) {
                alert("Error")
            }
        }getAllProducts()
    }, [])

        function handleSingle(id){
            async function getSingleProduct(id){
                try {
                    const response = await fetch(`${APIURL}/${id}`)
                    const result = await response.json()
                    console.log(result)
                } catch (error) {
                    throw error
                }
            }getSingleProduct(id)
        }
    
    return(
        <>
        </>
    )
}*/}