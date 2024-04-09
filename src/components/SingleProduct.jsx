import { useParams, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import axios from "axios";
import { faStar, faStarHalf, faMagnifyingGlass, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../Context/ShoppingCartContext";
import Cart from "./Cart";


export default function SingleProduct({CartState}){
    const APIURL = 'https://fakestoreapi.com/products'
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState("Menu")
    const [product, setProduct] = useState([])
    const {id} = useParams();
    const [products, setProducts] = useState({})

    useEffect(() => {
        axios.get(`${APIURL}/${id}`)
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
    }, [id])

    const {cartItems, addToCart} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

        const toggle = () => {
            setShowModal(!showModal) 
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
            <Link className="header-link">
            <div className="header-option">
                <span className="header-option1">Returns</span>
                <span className="header-option2">& Orders</span>

            </div>
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

                <div>
                    <h1>Lorem Ipsum</h1>
                </div>

                {product.filter((product) => {
                    return search.toLowerCase() === ''
                    ? product : product.title.toLowerCase().includes(search)
                }).map((product)=>{
                    return(
                    <div className="product-container" key={product.id}>
                        <p className="product-title">{product.title}</p>
                        <p className="product-price"><small>$</small><strong>{product.price}</strong></p>
                        <Link to={`/product/${product.id}`}><img src={product.image} className="product-item" onClick={(e)=>handleSingle(product.id)}></img></Link>
                    </div>
                    )
                })}
        <h2 className="product-title2">{products.title}</h2>
        <div className="product-display">
        {<img className="product-image2" src={products.image}></img>}
        <div>
           <p className="product-description"> {products.description}</p>
           <p className="product-price2"> ${products.price}</p>
           <div>
            <FontAwesomeIcon icon={faStar} className="stars"/>
            <FontAwesomeIcon icon={faStar} className="stars"/>
            <FontAwesomeIcon icon={faStar} className="stars"/>
            <FontAwesomeIcon icon={faStar} className="stars"/>
            <FontAwesomeIcon icon={faStarHalf} className="stars"/>
            <p>(122)</p>
           </div>
            <button onClick={()=> addToCart(products)} className="product-btn">ADD TO CART</button>
            <p className="product-category"><span>Category : </span>{products.category}</p>
        </div>
        </div>
        <Cart showModal={showModal} toggle={toggle} />
        
        </>
        
    )
}