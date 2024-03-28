import { useEffect, useState } from "react"

export default function Products(){
    const APIURL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function getAllProducts(){
            try {
            const response = await fetch(APIURL)
            const result = await response.json()
            console.log(result)
            setProducts(result)
            } catch (error) {
                console.log(error)
            }
        }getAllProducts()
    }, [])
    
    return(
        <>
        {products.map((product)=>{
            return(
                <div className="product-container">
                <img src={product.image} className="product-item"></img>
                <p>{product.title}</p>
                <p>{product.price}</p>
                </div>
            )
        })}
        </>
    )
}