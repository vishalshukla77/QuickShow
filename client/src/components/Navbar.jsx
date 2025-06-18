import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>

      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
      </Link>

      {/* Menu */}
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 
        max-md:font-medium max-md:text-lg z-50 flex flex-col 
        md:flex-row items-center max-md:justify-center gap-8 
        min-md:px-8 py-3 max-md:h-screen min-md:rounded-full 
        backdrop-blur bg-gradient-to-br from-black/80 via-zinc-900/70 to-black/80 
        md:bg-white/10 md:border border-gray-300/20 overflow-hidden 
        transition-[width] duration-300 ${menuOpen ? 'max-md:w-full' : ''}`}>

        <XIcon 
          className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' 
          onClick={() => setMenuOpen(false)}
        />

        <Link to='/' onClick={() => { scrollTo(0, 0); setMenuOpen(false); }} className='px-4 py-2 rounded hover:bg-white/10 transition'>Home</Link>
        <Link to='/movies' onClick={() => { scrollTo(0, 0); setMenuOpen(false); }} className='px-4 py-2 rounded hover:bg-white/10 transition'>Movies</Link>
        <Link to='/' onClick={() => { scrollTo(0, 0); setMenuOpen(false); }} className='px-4 py-2 rounded hover:bg-white/10 transition'>Theaters</Link>
        <Link to='/' onClick={() => { scrollTo(0, 0); setMenuOpen(false); }} className='px-4 py-2 rounded hover:bg-white/10 transition'>Releases</Link>
        <Link to='/favorite' onClick={() => { scrollTo(0, 0); setMenuOpen(false); }} className='px-4 py-2 rounded hover:bg-white/10 transition'>Favorites</Link>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
          Login
        </button>
        <MenuIcon 
          className='md:hidden w-8 h-8 cursor-pointer' 
          onClick={() => setMenuOpen(true)}
        />
      </div>
    </div>
  );
}

export default Navbar;
