import { useEffect, useState } from "react"
import Header from "./Header"
import { Link, useNavigate } from "react-router-dom"

export default function Products(){
    const APIURL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const navigate = useNavigate()


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
        <Header/>
        {products.map((product)=>{
            return(
                <div className="product-container" key={product.id}>
                    <p className="product-title">{product.title}</p>
                    <p className="product-price"><small>$</small><strong>{product.price}</strong></p>
                    
                    <Link to={`/product/${product.id}`}><img src={product.image} className="product-item" onClick={(e)=>handleSingle(product.id)}></img></Link>
                    <button className="cart-btn">Add to Cart</button>
                </div>
            )
        })}
        </>
    )
}