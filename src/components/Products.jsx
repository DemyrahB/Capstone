import { useEffect, useState } from "react"
import Header from "./Header"

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
    
    return(
        <>
        <Header/>
        {products.map((product)=>{
            return(
                <div className="product-container">
                    <p className="product-title">{product.title}</p>
                    <p className="product-price"><small>$</small><strong>{product.price}</strong></p>
                    <img src={product.image} className="product-item"></img>
                    <button className="cart-btn">Add to Cart</button>
                </div>
            )
        })}
        </>
    )
}