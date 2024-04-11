import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'
import SingleProduct from './components/SingleProduct'
import Men from './components/Men'
import Women from './components/Women'
import Jewelry from './components/Jewelry'
import Electronics from './components/Electronics'
import Admin from './components/Admin'
import Cart from './components/Cart'
import UserHome from './components/UserHome'
import Successful from './components/Successful'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
      <Route path='/shop' element={<Home/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/jewelry' element={<Jewelry/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/administration' element={<Admin/>}/>
      <Route path='/shop/cart' element={<Cart/>}/>
      <Route path='/userhome' element={<UserHome/>}/>
      <Route path='/successful' element={<Successful/>}/>
     </Routes>
    </>
  )
}

export default App
