import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Admin from './components/Admin/Admin'
import Home1 from './components/Bai1/Home1'
import About from './components/Bai1/About'
import Contact from './components/Bai1/Contact'
import Home2 from './components/Bai2/Home2'
import About2 from './components/Bai2/About2'
import Contact2 from './components/Bai2/Contact2'
import About3 from './components/Bai3/About3'
import Contact3 from './components/Bai3/Contact3'
import Index from './components/Bai3/Index'
import Service from './components/Bai3/Service'
import Header from './components/Bai4/Header'
import Home4 from './components/Bai4/Home4'
import About4 from './components/Bai4/About4'
import Services from './components/Bai4/Services'
import Contact4 from './components/Bai4/Contact4'
import Appointment from './components/Bai4/Appointment'
import Header1 from './components/Bai5/Header1'
import Home5 from './components/Bai5/Home5'
import About5 from './components/Bai5/About5'
import Teashop from './components/Bai5/Teashop'
import Pricing from './components/Bai5/Pricing'
import Contact5 from './components/Bai5/Contact5'
import Header2 from './components/Bai6/Header2'
import Home6 from './components/Bai6/Home6'
import About6 from './components/Bai6/About6'
import Blog from './components/Bai6/Blog'
import Repair from './components/Bai6/Repair'
import Contact6 from './components/Bai6/Contact6'

export default function App() {
  return (
    <div>
      <NavLink to="/home2">Home</NavLink>
      <NavLink to="/about2">About</NavLink>
      <NavLink to="/contact2">Contact</NavLink>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/home1' element={<Home1 />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/home2' element={<Home2 />}></Route>
        <Route path='/about2' element={<About2 />}></Route>
        <Route path='/contact2' element={<Contact2 />}></Route>
        <Route path='/about3' element={<About3 />}></Route>
        <Route path='/contact3' element={<Contact3 />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/home4' element={<Home4 />}></Route>
        <Route path='/about4' element={<About4 />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact4' element={<Contact4 />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
      </Routes>
      <Header1 />
      <Routes>
        <Route path='/home5' element={<Home5 />}></Route>
        <Route path='/about5' element={<About5 />}></Route>
        <Route path='/teashop' element={<Teashop />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/contact5' element={<Contact5 />}></Route>
      </Routes>
      <Header2 />
      <Routes>
        <Route path='/home6' element={<Home6 />}></Route>
        <Route path='/about6' element={<About6 />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='repair' element={<Repair />}></Route>
        <Route path='contact6' element={<Contact6 />}></Route>
      </Routes>
    </div>
  )
}
