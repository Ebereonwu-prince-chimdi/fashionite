import React from "react";
import { Share2, Globe, MessageSquare, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <a
              href="#"
              className="text-xl font-serif tracking-widest font-bold uppercase block">
              FASHIONISE
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Legal & Copyright© 2026 YourCompany. All rights reserved.Privacy
              Policy | Terms of ServiceCookie Settings | Accessibility Statement
            </p>

            <div className="flex items-center gap-4 text-gray-400 pt-2">
              <a
                href="#"
                aria-label="Social Link 1"
                className="hover:text-white transition-colors">
                <Share2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Social Link 2"
                className="hover:text-white transition-colors">
                <Globe size={16} />
              </a>
              <a
                href="#"
                aria-label="Social Link 3"
                className="hover:text-white transition-colors">
                <MessageSquare size={16} />
              </a>
              <a
                href="#"
                aria-label="Social Link 4"
                className="hover:text-white transition-colors">
                <Video size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-300">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-[11px] uppercase tracking-wider text-gray-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SHOP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SUBSCRIBE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TERM & CONDITION
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-300">
              CATEGORIES
            </h3>
            <ul className="space-y-2 text-[11px] uppercase tracking-wider text-gray-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FASHION
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ENTERTAINMENT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  BEAUTY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LIFESTYLE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TRAVEL
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 gap-4">
          <p>© FASHIONISE. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY TEMPLATES JUNGLE</p>
        </div>
      </div>
    </footer>
  );
}
