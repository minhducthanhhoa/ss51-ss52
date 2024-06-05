import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaInfo, FaStore, FaDollarSign, FaPhone } from 'react-icons/fa';


export default function Header1() {
  return (
    <div>
         <header className="bg-gray-100 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">TeaShop</h1>
            <nav className="flex space-x-4">
                <NavLink className="mx-2 flex items-center" to="/home5">
                <FaHome className="mr-1" /> Home
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/about5">
                <FaInfo className="mr-1" /> About
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/teashop">
                <FaStore className="mr-1" /> Teashop
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/pricing">
                <FaDollarSign className="mr-1" /> Pricing
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/contact5">
                <FaPhone className="mr-1" /> Contact
                </NavLink>
            </nav>
        </header>
    </div>
  )
}
