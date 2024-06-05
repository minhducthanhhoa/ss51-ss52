import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaInfo, FaBlog, FaTools, FaPhone } from 'react-icons/fa';

export default function Header2() {
  return (
    <div>
         <header className="bg-gray-100 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">NICO</h1>
            <nav className="flex space-x-4">
                <NavLink className="mx-2 flex items-center" to="/home6">
                <FaHome className="mr-1" /> Home
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/about6">
                <FaInfo className="mr-1" /> About
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/blog">
                <FaBlog className="mr-1" /> Blog
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/repair">
                <FaTools className="mr-1" /> Repair
                </NavLink>
                <NavLink className="mx-2 flex items-center" to="/contact6">
                <FaPhone className="mr-1" /> Contact
                </NavLink>
            </nav>
        </header>
    </div>
  )
}
