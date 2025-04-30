import React from 'react'

import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Products from './pages/Products'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
