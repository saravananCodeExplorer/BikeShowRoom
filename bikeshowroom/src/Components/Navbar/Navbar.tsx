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
        <nav className="p-4 py-2 bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-400 md:ml-20">GunaMotors</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="hover:text-gray-400 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
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
                        className="border-none px-4 py-2 rounded-md text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        onChange={handleSelectColor}
                        value={selectedColor}
                    >
                        <option value="">Default</option>
                        <option value="🌸">Pink</option>
                        <option value="🐬">Green</option>
                        <option value="🐤">Yellow</option>
                    </select>

                    {['Home', 'Services', 'Bikes', 'Scooters', 'Locations', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="block md:inline px-4 py-2 hover:text-blue-300 hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gray-700 rounded hover:shadow-md"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className={`md:hidden absolute top-16 left-0 w-full z-50 transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{
                    backgroundColor: `${selectedColor === '🌸' ? "#ffabc8" : selectedColor === '🐬' ? "green" : selectedColor === '🐤' ? "#ffd65a" : "#ffff"}`
                }}>
                    <div className="flex flex-col items-center py-4 space-y-6">
                        {['Home', 'Services', 'Bikes', 'Scooters', 'Locations', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="block px-4 py-2 hover:bg-gray-700 rounded transition-all duration-300 ease-in-out transform hover:scale-110"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;







































