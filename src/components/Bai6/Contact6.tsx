import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact6() {
  return (
    <div>
         <div className="text-center p-8">
            <h2>Contact Us</h2>
            <div className="flex justify-center items-center mt-4">
                <FaPhone className="mr-2" />
                <p>+012 345 67890</p>
            </div>
            <div className="flex justify-center items-center mt-2">
                <FaEnvelope className="mr-2" />
                <p>info@nicorepair.com</p>
            </div>
        </div>
    </div>
  )
}
