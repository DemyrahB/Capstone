import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import { checkPropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";


export default function Cart({showModal, toggle}){
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(CartContext)
    const navigate = useNavigate()
    
    const handleClick = ()=>{
      if (cartItems.length === 0){
        alert('Your cart is empty.')
      } else{
        navigate('/checkout')
      }
      
      
    }

    return (
        showModal && (
          <div className="cart-div">
            <h1>Cart</h1>
            <div className="cart-button">
              <button
                onClick={toggle}
              >
                Close
              </button>
            </div>
            <div className="cart-div-products">
              {cartItems.map((item) => (
                <div className="products-div" key={item.id}>
                  <div className="image-div">
                    <img src={item.image} alt={item.title} className="product-image3" />
                    <div className="price-div">
                      <h1>{item.title}</h1>
                      <p>${item.price}</p>
                    </div>
                  </div>
                  <div className="btn-div">
                    <button className="addToCartbtn"
                      onClick={() => {
                        addToCart(item)
                      }}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => {
                        removeFromCart(item)
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {
              cartItems.length > 0 ? (
                <div>
              <h1>Total: ${getCartTotal()}</h1>
              <button
                onClick={() => {
                  clearCart()
                }}
              >
                Clear cart
              </button>
            </div>
              ) : (
                <h1>Your cart is empty</h1>
              )
            }
            <button onClick={handleClick}>
                Checkout
            </button>
          
          </div>
         
          
        )
      )
    }
    
    Cart.checkPropTypes = {
      showModal: checkPropTypes.bool,
      toggle: checkPropTypes.func
    }