import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header>
      <div className="bg-green-300 flex items-center justify-between p-4 shadow-md">
        <div>
          {/* Logo */}
          <img src={logo} className='h-12 w-12 bg-white border-2 border-green-500 p-2 rounded-full' alt="Logo"/>
        </div>
        <nav className="flex space-x-12 text-black">
          <ul className="hover:text-green-600">
            <Link to='/'>Home</Link>
          </ul>
          <ul className="hover:text-green-600">
            <Link to='/about'>About</Link>
          </ul>
          <ul className="bg-green-500 p-2 rounded-2xl hover:bg-green-600">
            <Link to='/contact' className="text-white">Contact</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
