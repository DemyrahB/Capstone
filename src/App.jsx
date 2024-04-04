import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Checkout from './components/Checkout'
import SingleProduct from './components/SingleProduct'
function App() {
  

  return (
    <>

    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
    </Routes>
    </>
  )
}

export default App
