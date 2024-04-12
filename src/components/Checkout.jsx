import { useContext, useState } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import { checkPropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { faMagnifyingGlass, faShoppingCart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";


export default function Checkout(){
    const {cartItems, addToCart, removeFromCart, clearCart, getCartTotal} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState("Menu")
    const navigate = useNavigate()
        const toggle = () => {
            setShowModal(!showModal) 
        }

        const handleClick = (e)=>{
            e.preventDefault(); 
            clearCart(),
            navigate('/successful')
          }
    
    return(
        <>

<nav className="header">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png" alt="logo" className="e-commerce-logo"/></Link>
            <div className="header-search">
                <input type="text" 
                className="search-input" 
                placeholder="Type to Search"
                
                onChange={(e) => setSearch(e.target.value)}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
               </div>
            <div className="header-nav">
            <Link to="/" className="header-link"> 
            <div className="header-option">
                <span className="header-option1">Hello, User </span>
            </div>
            </Link>
            <Link to="/login" className="header-link"> 
            <span className="header-option2">Sign In</span>
            </Link>
            </div>
            {!showModal && <button className="header-link" onClick={toggle}> 
                <FontAwesomeIcon icon={faShoppingCart} />
                ({cartItems.length})
            </button>}
        </nav>
        <div className="header-menu-div">
            <ul className="header-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to={"/"}>Shop</Link> {menu ==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration: 'none'}} to={"/men"}>Men</Link> {menu ==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to={"/women"}>Women</Link> {menu ==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("jewelry")}}><Link style={{textDecoration: 'none'}} to={"/jewelry"}>Jewelry</Link> {menu ==="jewelry"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("electronics")}}><Link style={{textDecoration: 'none'}} to={"/electronics"}>Electronics</Link> {menu ==="electronics"?<hr/>:<></>}</li>
            </ul>
        </div> 
               
               <h1>Checkout</h1>
            <div>
                <h4>Billing Details</h4>
            </div>
            <div>
            <form className="billing form">
                <label className="form-label">Country/Region</label>
                <select>
                    <option value="">United States</option>
                    <option value="">Canada</option>
                    <option value="">United Kingdom</option>
                </select>
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" required
                />
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" required
                />
                <label className="form-label">Address 1</label>
                <input type="text" className="form-input" required
                placeholder="Street Address" />
                <label className="form-label">Address 2</label>
                <input type="text" className="form-input" required
                placeholder="Apartment, Suite, Unit, Floor (Optional)" />
                <label className="form-label">Town/City</label>
                <input type="text" className="form-input" required/>
                <label className="form-label">State</label>
                <input type="text" className="form-input" required/>
                <label className="form-label">Zip Code</label>
                <input type="text" className="form-input" required/>
            </form>
            <div>
                <h4 className="payment method">Payment Method</h4>
            </div>
            <div className="payment-details">
            <form onSubmit={handleClick}>
                <label className="form-label">Card Number</label>
                <input type="numbers"
                placeholder="**** **** **** ****"
                required className="form-input"/>
                <label className="form-label">Expiration (MM/YY)</label>
                <input type="text"
                required className="form-input"
                />
                <label className="form-label">Card Security Code</label>
                <input type="text"
                placeholder="CVV" className="form-input"/>
            
            <input type="checkbox"
                required/><label htmlFor="">I have read and agree to the website <Link>terms and conditions</Link></label>

                <button>PLACE ORDER</button>
        
            </form>
                
            </div>
            </div>
            <Cart showModal={showModal} toggle={toggle} />


       </>
    )}