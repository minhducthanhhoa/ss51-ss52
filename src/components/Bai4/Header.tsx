import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaInfo, FaServicestack, FaPhone, FaCalendarAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <div>
        <header className="bg-dark text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">HAIRCUT</h1>
      <nav className="flex space-x-4">
        <NavLink className="mx-2 flex items-center" to="/home4">
          <FaHome className="mr-1" /> Home
        </NavLink>
        <NavLink className="mx-2 flex items-center" to="/about4">
          <FaInfo className="mr-1" /> About
        </NavLink>
        <NavLink className="mx-2 flex items-center" to="/services">
          <FaServicestack className="mr-1" /> Services
        </NavLink>
        <NavLink className="mx-2 flex items-center" to="/contact4">
          <FaPhone className="mr-1" /> Contact
        </NavLink>
        <Link className="mx-2 flex items-center bg-red-500 p-2 rounded" to="/appointment">
          <FaCalendarAlt className="mr-1" /> Appointment
        </Link>
      </nav>
    </header>
    </div>
  )
}
