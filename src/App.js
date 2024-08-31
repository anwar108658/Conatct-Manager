import React from 'react'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './component/common/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
