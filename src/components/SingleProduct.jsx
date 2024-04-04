import { useParams } from "react-router-dom"
import Products from "./Products"

export default function SingleProduct(){
   let {id} = useParams()
   const product = Products.find(product => String(product.id) === id)
    
    
    
    return(
        <>
        <h1>{product.title}</h1>
        </>
    )
}