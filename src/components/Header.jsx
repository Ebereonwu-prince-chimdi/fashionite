import React from "react";
import { User, Search, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
     
      <div className="bg-black text-white text-[11px] uppercase tracking-widest px-6 py-2 flex justify-between items-center">
        <span>Beautifully crafted Fashion Blog Template</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Sponsors
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Subscribe
          </a>
        </div>
      </div>

      
      <div className="bg-white border-b border-gray-100 px-8 py-5 flex justify-between items-center">
       
        <a
          href="#"
          className="text-2xl font-serif tracking-widest font-bold text-gray-900 uppercase">
          FASHIONISE
        </a>


        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-700">
          <a href="#" className="text-black border-b border-black pb-0.5">
            Home
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Reviews
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Fashion
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Clothing
          </a>
          <a href="#" className="hover:text-black transition-colors">
            News
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Videos
          </a>
        </nav>

     
        <div className="flex items-center gap-5 text-gray-800">
          <button
            aria-label="Account"
            className="hover:text-black transition-colors">
            <User size={18} />
          </button>
          <button
            aria-label="Search"
            className="hover:text-black transition-colors">
            <Search size={18} />
          </button>
          <button aria-label="Cart" className="hover:text-black transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
