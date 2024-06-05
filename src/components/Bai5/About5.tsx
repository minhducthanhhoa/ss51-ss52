import React from 'react'
import { FaCoffee } from 'react-icons/fa';

export default function About5() {
  return (
    <div>
         <div className="flex justify-center items-center p-8">
            <div className="mr-8">
                <FaCoffee className="text-orange-500 text-6xl" />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">About Our</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Read More</button>
            </div>
            <div className="ml-8">
                <img src="https://github.com/ngoquy12/React-router-session5/blob/master/images/img-2.png?raw=true" alt="Teapot" className="rounded-full" />
            </div>
        </div>
    </div>
  )
}
