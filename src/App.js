import React from 'react'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './component/common/Navbar/Navbar'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ProductsDetail from "./pages/ProductsDetail"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Footer from "./component/common/Footer"

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/productsDetail/:id' element={<ProductsDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
