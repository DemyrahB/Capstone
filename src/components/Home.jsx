import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Home(){
    const APIURL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState("Men")

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
    
    return (
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
            <Link className="header-link">
            <div className="header-option">
                <span className="header-option1">Returns</span>
                <span className="header-option2">& Orders</span>

            </div>
            </Link>
            </div>
            <Link to="/checkout" className="header-link">
                <div className="header-basket">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="header-basket-items">2</span>
                </div>
            </Link>
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
                    <Link to={`/product/${product.id}`}><img src={product.image} className="product-item" onClick={(e)=>handleSingle(product.id)}></img></Link>
                    <button className="cart-btn">Add to Cart</button>
                </div>
            )
        })}
                </div>

                
                {/*<div>
                    <img src="https://t4.ftcdn.net/jpg/02/16/47/35/360_F_216473592_NefHePTpMfvYMNjD3UQTUVJy7DFPwqKA.jpg" alt="banner" className="banner" />
            </div>*/}
                </>
                

    )
}