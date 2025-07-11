import React from "react";
import Logo from "../../svg/Logo";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {" "}
      {/* Header */}
      <nav className='bg-black text-white p-4 sticky top-0 z-50 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Logo />
          </div>
          <div className='hidden md:flex space-x-6'>
            <a href='#home' className='hover:text-blue-200 transition'>
              Home
            </a>
            <a href='#races' className='hover:text-blue-200 transition'>
              Races
            </a>
            <a href='#drivers' className='hover:text-blue-200 transition'>
              Drivers
            </a>
            <a href='#teams' className='hover:text-blue-200 transition'>
              Teams
            </a>
          </div>
          <button
            className='md:hidden text-xl focus:outline-none'
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-black z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
      >
        <div className='flex flex-col items-center space-y-8 text-white text-2xl'>
          <a
            href='#home'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href='#races'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Races
          </a>
          <a
            href='#drivers'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Drivers
          </a>
          <a
            href='#teams'
            className='hover:text-blue-200 transition'
            onClick={() => setIsMenuOpen(false)}
          >
            Teams
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
