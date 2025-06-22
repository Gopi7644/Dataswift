import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="bg-gradient-to-r from-green-100 via-green-200 to-green-400 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="flex items-center">
                    {/* 3D SVG Logo and Text */}
                    <span className="flex items-center select-none">
                        <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="dswift3d" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#6EE7B7" />
                                    <stop offset="100%" stop-color="#059669" />
                                </radialGradient>
                                <filter id="shadow" x="0" y="0" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#059669" flood-opacity="0.2" />
                                </filter>
                            </defs>
                            {/* 3D Circle with DS */}
                            <circle cx="24" cy="24" r="22" fill="url(#dswift3d)" filter="url(#shadow)" />
                            <text x="24" y="30" text-anchor="middle" fill="#fff" font-size="20" font-family="Segoe UI, Arial, sans-serif" font-weight="bold" style={{ textShadow: '0 2px 8px #059669' }}>DS</text>
                            {/* 3D Text for Dataswift */}
                            <text x="54" y="32" fill="#059669" font-size="28" font-family="Segoe UI, Arial, sans-serif" font-weight="bold" style={{ filter: 'drop-shadow(0 2px 6px #6EE7B7)' }}>Dataswift</text>
                            <text x="54" y="32" fill="none" stroke="#fff" strokeWidth="1.5" font-size="28" font-family="Segoe UI, Arial, sans-serif" font-weight="bold">Dataswift</text>
                        </svg>
                    </span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-700 font-semibold border-b-2 border-green-700' : 'text-gray-700 hover:text-green-700 font-medium transition'}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-green-700 font-semibold border-b-2 border-green-700' : 'text-gray-700 hover:text-green-700 font-medium transition'}>About</NavLink>
                    <NavLink to="/service" className={({ isActive }) => isActive ? 'text-green-700 font-semibold border-b-2 border-green-700' : 'text-gray-700 hover:text-green-700 font-medium transition'}>Service</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-700 font-semibold border-b-2 border-green-700' : 'text-gray-700 hover:text-green-700 font-medium transition'}>Contact</NavLink>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-green-700 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg px-4 pb-4">
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block py-2 text-green-700 font-semibold border-b-2 border-green-700' : 'block py-2 text-gray-700 hover:text-green-700 font-medium transition'}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block py-2 text-green-700 font-semibold border-b-2 border-green-700' : 'block py-2 text-gray-700 hover:text-green-700 font-medium transition'}>About</NavLink>
                    <NavLink to="/service" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block py-2 text-green-700 font-semibold border-b-2 border-green-700' : 'block py-2 text-gray-700 hover:text-green-700 font-medium transition'}>Service</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block py-2 text-green-700 font-semibold border-b-2 border-green-700' : 'block py-2 text-gray-700 hover:text-green-700 font-medium transition'}>Contact</NavLink>
                </div>
            )}
        </header>
    )
}

export default Header