import React, { useState } from "react";
import logo from "../assets/appnity.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ICONS

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#f3f3f3] relative pt-8 pb-4">
      {/* Top Badge */}
      <div className="absolute inset-x-0 -top-1 flex justify-center">
        <div className="bg-[#333] text-white px-5 py-2 rounded-b-2xl flex items-center gap-2 shadow-md whitespace-nowrap">
          <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
          <span className="text-sm font-medium">Available for New Projects</span>
        </div>
      </div>


      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-6">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Agero Logo" className="h-12  w-auto  object-cover" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium text-sm tracking-wide">
          <li className="hover:text-black transition"><Link to="/works">Works</Link></li>
          <li className="hover:text-black transition"><Link to="/services">Services</Link></li>
          <li className="hover:text-black transition"><Link to="/about">About</Link></li>
          <li className="hover:text-black transition"><Link to="/team">Team</Link></li>
          <li className="hover:text-black transition"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-black transition"><Link to="/portfolio">Portfolio</Link></li>
        </ul>

        {/* Desktop Contact Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-[#555] text-white px-6 py-2.5 rounded-full shadow-md hover:bg-black transition-transform hover:scale-105">
            Contact
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f3f3f3] px-6 py-4 animate-slideDown border-t border-gray-300">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium text-sm">
            <li><Link to="/works" onClick={() => setMobileOpen(false)}>Works</Link></li>
            <li><Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link></li>
            <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link to="/team" onClick={() => setMobileOpen(false)}>Team</Link></li>
            <li><Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link></li>
            <li><Link to="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link></li>
          </ul>

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <button className="mt-5 w-full bg-[#555] text-white py-2.5 rounded-full shadow-md hover:bg-black transition-transform hover:scale-105">
              Contact
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
