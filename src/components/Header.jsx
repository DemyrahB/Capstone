import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Header(){
    const APIURL = "https://fakestoreapi.com/products"
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const onChange = async(e) => {
        setValue(e.target.value)
        const response = await fetch (APIURL)
        const data = await response.json()
        setData(data)
    }

    
    return (
        <>
          <nav className="header">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Lorem_Ipsum_DVvD.png" alt="logo" className="e-commerce-logo"/></Link>
            <div className="header-search">
                <input type="text" 
                className="search-input" 
                placeholder="Type to Search"
                value={value}
                onChange={onChange}
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
                <FontAwesomeIcon icon={faBasketShopping} />
                <span className="header-basket-items">2</span>
                </div>
            </Link>
        </nav>
       <div className="dropdown">
                {
                    value &&
                    data.filter(item => item.title.startsWith(value) && item.title !==value)
                    .map(item => <div key={item.id} onClick={(e)=> setValue(item.title)}>
                    {item.title} <hr /></div>)
                }
                </div> 
                
                {/*<div>
                    <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="banner" className="banner" />
            </div>*/}
                </>
                

    )
}