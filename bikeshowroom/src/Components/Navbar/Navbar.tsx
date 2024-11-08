

import React, { useState } from 'react';
import "../../App.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectColor = (e: any) => {
        setSelectedColor(e.target.value);
    };

    console.log(selectedColor, "color");

    return (
        <nav className="p-4 py-8 bg-gray-800 text-white">
            <div className="container  mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-400 md:ml-20">GunaMotors</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="hover:text-gray-400 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                {/* Menu */}
                <div className={`md:flex items-center space-x-4 hidden`}>
                    <select 
                        data-choose-theme
                        className="border-none px-4 py-2 rounded-md  text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={handleSelectColor}
                        value={selectedColor}
                    >
                        <option value="">Default</option>
                        <option value="🌸">Pink</option>
                        <option value="🐬">Green</option>
                        <option value="🐤">Yellow</option>
                    </select>
                    <a href="/" className="block md:inline px-4 py-2 hover:text-blue-300 hover: transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded hover:shadow-md">
        Home
    </a>
    <a href="/services" className="block md:inline px-4 py-2 hover:text-blue-300 hover: transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded hover:shadow-md">
        Services
    </a>
    <a href="/bikes" className="block md:inline px-4 py-2 hover:text-blue-300 hover: transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded hover:shadow-md">
        Bikes
    </a>
    <a href="/scooters" className="block md:inline px-4 py-2 hover:text-blue-300 hover: transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded hover:shadow-md">
        Scooters
    </a>
    <a href="/locations" className="block md:inline px-4 py-2 hover:text-blue-300 hover: transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded hover:shadow-md">
        Locations
    </a>
    <a href="/contact" className="block md:inline px-4 py-2 hover:text-blue-300 hover: transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 rounded hover:shadow-md">
        Contact
    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-blue-300 z-50" style={{
                    backgroundColor: `${selectedColor === '🌸' ? "#ffabc8" : selectedColor === '🐬' ? "green" : selectedColor === '🐤' ? "#ffd65a" : "#ffff"}`
                }}>
                    <div className="flex flex-col items-center py-4 space-y-6">
                        <a href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">Home</a>
                        <a href="/services" className="block px-4 py-2 hover:bg-gray-700 rounded">Services</a>
                        <a href="/bikes" className="block px-4 py-2 hover:bg-gray-700 rounded">Bikes</a>
                        <a href="/scooters" className="block px-4 py-2 hover:bg-gray-700 rounded">Scooters</a>
                        <a href="/locations" className="block px-4 py-2 hover:bg-gray-700 rounded">Locations</a>
                        <a href="/contact" className="block px-4 py-2 hover:bg-gray-700 rounded">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;









































