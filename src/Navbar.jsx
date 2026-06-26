import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-amber-500/10 px-6 py-4 text-white shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 cursor-pointer hover:opacity-90 transition-opacity">
          <Link to="/">TextUtils</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-300">
                      <Link to="/" className="hover:text-amber-300 transition-colors duration-150">Home</Link>
          <Link to="/about" className="hover:text-amber-300 transition-colors duration-150">About</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-amber-400 focus:outline-none hover:text-amber-300 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                // "X" Close Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger Menu Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-3 pb-2 pt-1 px-2 border-t border-slate-800 text-sm font-medium text-slate-300">
          <Link to="/" className=" bg-amber-500/10 px-3 py-2 rounded-xl">Home</Link>
          <Link to="/about" className="hover:text-amber-300 hover:bg-slate-900 px-3 py-2 rounded-xl transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;