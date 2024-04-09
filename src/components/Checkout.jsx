import { useEffect, useState, useContext } from "react";
import Subtotal from "./Subtotal"
import { useParams } from "react-router-dom"
import axios from "axios";
import { CartContext } from "../Context/ShoppingCartContext";
import Cart from "./Cart";


export default function Checkout(){
    const APIURL = "https://fakestoreapi.com/carts/user"
    
    const [cart, setCart] = useState([])
    const {cartItems} = useContext(CartContext)
    const {userId} = useParams(cartItems);
    useEffect(() => {
        axios.get(`${APIURL}/${userId}`)
        .then((res) => {
            console.log(res.data)
            setCart(res.data)
        })
    }, [userId])

    return (
        <>
        <h1>Checkout</h1>
        <div className="checkout">
            <div className="checkout-left"> 
                <h2 className="checkout-title">Your shopping basket is empty</h2>
                <p>You have no items in your basket.</p>
            </div>
            <div className="checkout-right"> 
                <Subtotal/>
            </div>
        </div>
        </>
    )
}