import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <Logo />
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Social Media Icons and Sign In Button */}
      <div className="hidden md:flex space-x-4 items-center">
        <ul className='flex gap-3'>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
        <Link to="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out">
          Sign In
        </Link>
      </div>

      {/* Mobile Side Panel */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col p-6 space-y-4">
          <Link to="/" className="text-white" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="text-white" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="text-white" onClick={toggleMenu}>Contact</Link>
          <ul className="flex space-x-4 items-center">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
          </ul>
          <Link to="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out mt-4">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;