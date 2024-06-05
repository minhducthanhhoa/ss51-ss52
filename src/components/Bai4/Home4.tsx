import React from 'react'
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Home4() {
  return (
    <div>
         <div className="text-center">
            <h2>We will keep you an awesome look</h2>
            <div className="flex justify-center items-center mt-4">
                <FaMapMarkerAlt className="mr-2" />
                <p>123 Street, New York, USA</p>
            </div>
            <div className="flex justify-center items-center mt-2">
                <FaPhone className="mr-2" />
                <p>+012 345 67890</p>
            </div>
        </div>
    </div>
  )
}
