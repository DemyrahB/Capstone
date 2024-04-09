import { CartContext } from "../Context/ShoppingCartContext";
import { useContext } from "react";

export default function Sidebar() {
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(CartContext);
    return(
        <div className={`${cartItems ? 'right-0' : 'right-full'} w-full bg-white fixed top-0 h-full 
        shadow-2xl md:w[35vw] xl:max-w-[30vw] transition-all 
        duration-300 z-20 px-4 lg:px-[35px]`}>
            Sidebar
        </div>
    )
}