import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
