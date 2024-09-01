import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <Logo />
      <ul className="flex space-x-4 items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
     <div className="flex space-x-4 items-center justify-between">
     <ul className='flex gap-3'>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
      </ul>
      <Link to="/sign-up" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300 ease-in-out">
        Sign Up
      </Link>
     </div>
    </nav>
  );
};

export default Navbar;
