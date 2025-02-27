import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the mobile menu

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <nav className="flex justify-between items-center py-3 px-4 md:px-10 capitalize bg-white shadow-md">
            {/* Logo */}
            <h4 className="font-bold text-lg">
                digigrowth
            </h4>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-14 text-sm font-semibold">
                <li>company</li>
                <li>more</li>
                <li>with in</li>
                <li>contact</li>
            </ul>

            {/* Mobile Menu Icon with Animation */}
            <div
                className="md:hidden cursor-pointer"
                onClick={toggleMenu}
            >
                <div
                    className={`transform transition-all duration-500 ease-in-out ${isMenuOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
                        }`}
                >
                    {isMenuOpen ? (
                        <FaTimes className="text-2xl" /> // Close icon when menu is open
                    ) : (
                        <FaBars className="text-2xl" /> // Hamburger icon when menu is closed
                    )}
                </div>
            </div>

            {/* Get Started Button */}
            <button className="hidden md:block border capitalize border-2 border-black px-4 py-1 rounded-full text-sm">
                get started
            </button>

            {/* Mobile Menu (Dropdown) */}
            <div
                className={`fixed top-16 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="flex flex-col gap-4 p-4 text-sm font-semibold">
                    <li>company</li>
                    <li>more</li>
                    <li>with in</li>
                    <li>contact</li>
                </ul>
                <button className="w-full border capitalize border-2 border-black px-4 py-2 rounded-full text-sm mt-4">
                    get started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;