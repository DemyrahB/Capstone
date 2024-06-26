import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/ShoppingCartContext";
import Cart from "../Cart";
import Rating from "../Rating";

export default function UserHome(){
    const APIURL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState("Menu")
    const navigate = useNavigate()
    let token = localStorage.getItem("jsonwebtoken")
    localStorage.setItem("jsonwebtoken", token)

    useEffect(()=>{
        async function getAllProducts(){
            try {
            const response = await fetch(APIURL)
            const result = await response.json()
            setProducts(result)
            } catch (error) {
                console.log(error)
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

        const {cartItems, addToCart} = useContext(CartContext)
        const [showModal, setShowModal] = useState(false)

        const toggle = () => {
            setShowModal(!showModal) 
        }

    
    return (
        <> 
          <nav className="header">
            <Link to="/userhome"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png" alt="logo" className="e-commerce-logo"/></Link>
            <div className="header-search">
                <input type="text" 
                className="search-input" 
                placeholder="Type to Search"
                
                onChange={(e) => setSearch(e.target.value)}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
               </div>
            <div className="header-nav">

            <div className="header-option">
                <span className="header-option1">Hello, User </span>
            </div>
     
            <Link to={"/signin"}  className="header-link"> 
            <span className="header-option2">Sign Out</span>
            </Link>
            </div>
            {!showModal && <button className="header-link" onClick={toggle}> 
                <FontAwesomeIcon icon={faShoppingCart} />
                ({cartItems.length})
            </button>}
        </nav>
        <div className="header-menu-div">
            <ul className="header-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to={"/userhome"}>Shop</Link> {menu ==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration: 'none'}} to={"/usermen"}>Men</Link> {menu ==="men"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to={"/userwomen"}>Women</Link> {menu ==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("jewelry")}}><Link style={{textDecoration: 'none'}} to={"/userjewelry"}>Jewelry</Link> {menu ==="jewelry"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("electronics")}}><Link style={{textDecoration: 'none'}} to={"/userelectronics"}>Electronics</Link> {menu ==="electronics"?<hr/>:<></>}</li>
            </ul>
        </div> 
               
                <div>
                    <h1>Lorem Ipsum</h1>
                </div>
                 
                <div>
                
                {products.filter((product) => {
                    return search.toLowerCase() === '' 
                    ? product : product.title.
                    toLowerCase().includes(search)
                }).map((product)=>{
            return(    
        <div className="product-container" key={product.id}>
            <p className="product-title">{product.title}</p>
            <p className="product-price"><small>$</small><strong>{product.price}</strong></p>
            <p><Rating rate={product.rating}/></p>
            <Link to={`/user/product/${product.id}`}><img src={product.image} className="product-item" onClick={(e)=>handleSingle(product.id)}></img></Link>
            <button onClick={()=> addToCart(product)} className="cart-btn">Add to Cart</button>
        </div>
            )
        })}
                </div>

            <Cart showModal={showModal} toggle={toggle} />

           

            
                </>
                

    )
}