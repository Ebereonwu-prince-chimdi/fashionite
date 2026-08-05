import React from "react";
import { User, Search, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header class="w-full">
     
      <div class="bg-black text-white text-[11px] uppercase tracking-widest px-6 py-2 flex justify-between items-center">
        <span>Beautifully crafted Fashion Blog Template</span>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#" class="hover:text-gray-300 transition-colors">
            Contact
          </a>
          <a href="#" class="hover:text-gray-300 transition-colors">
            Sponsors
          </a>
          <a href="#" class="hover:text-gray-300 transition-colors">
            Subscribe
          </a>
        </div>
      </div>

      
      <div class="bg-white border-b border-gray-100 px-8 py-5 flex justify-between items-center">
       
        <a
          href="#"
          class="text-2xl font-serif tracking-widest font-bold text-gray-900 uppercase">
          FASHIONISE
        </a>


        <nav class="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-700">
          <a href="#" class="text-black border-b border-black pb-0.5">
            Home
          </a>
          <a href="#" class="hover:text-black transition-colors">
            Reviews
          </a>
          <a href="#" class="hover:text-black transition-colors">
            Fashion
          </a>
          <a href="#" class="hover:text-black transition-colors">
            Clothing
          </a>
          <a href="#" class="hover:text-black transition-colors">
            News
          </a>
          <a href="#" class="hover:text-black transition-colors">
            Shop
          </a>
          <a href="#" class="hover:text-black transition-colors">
            Videos
          </a>
        </nav>

     
        <div class="flex items-center gap-5 text-gray-800">
          <button
            aria-label="Account"
            class="hover:text-black transition-colors">
            <User size={18} />
          </button>
          <button
            aria-label="Search"
            class="hover:text-black transition-colors">
            <Search size={18} />
          </button>
          <button aria-label="Cart" class="hover:text-black transition-colors">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
