import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
 import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Toaster/>
     <Navbar/>
     <Routes>
      <Route path="/"element={<Home/>} />
      <Route path='/Jobs' element={< Jobs/>}/>
      <Route path="/About"element={<About/>} />
      <Route path="/Contact"element={<Contact/>} />
      <Route path="/Login"element={<Login/>} />
      <Route path="/Register"element={<Register/>} />
      </Routes> 
     </BrowserRouter>
    </>
  )
}

export default App