import Header from "./Header"
import Subtotal from "./Subtotal"

export default function Checkout(){
    

    return (
        <>
        <Header/>
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