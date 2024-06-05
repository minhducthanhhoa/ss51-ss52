import React from 'react'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Đăng Ký</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Tên Đăng Nhập
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="px-3 bg-gray-200">
                <FaUser />
              </div>
              <input
                className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="username"
                placeholder="Tên Đăng Nhập"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="px-3 bg-gray-200">
                <FaEnvelope />
              </div>
              <input
                className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Mật Khẩu
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="px-3 bg-gray-200">
                <FaLock />
              </div>
              <input
                className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Mật Khẩu"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Xác Nhận Mật Khẩu
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="px-3 bg-gray-200">
                <FaLock />
              </div>
              <input
                className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="confirm-password"
                placeholder="Xác Nhận Mật Khẩu"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
              onClick={handleRegister}
            >
              Đăng Ký
            </button>
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/">
              Đăng Nhập
            </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
