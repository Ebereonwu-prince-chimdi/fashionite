import React from "react";

export default function LatestPosts() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      
      <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-800 mb-6">
        LATEST POSTS
      </h2>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <article className="space-y-3">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
              alt="How to check if the product is good quality or not"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium pt-1">
            FASHION
          </span>
          <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug hover:text-gray-600 transition-colors cursor-pointer">
            How to check if the product is good quality or not
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            FEB 12, 2022 <span class="mx-1">|</span> BY LORA MARIANE
          </p>
        </article>

      
        <article className="space-y-3">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800"
              alt="The best foundation you can find on sale"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium pt-1">
            FASHION
          </span>
          <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug hover:text-gray-600 transition-colors cursor-pointer">
            The best foundation you can find on sale
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            FEB 12, 2022 <span class="mx-1">|</span> BY LORA MARIANE
          </p>
        </article>

      
        <article className="space-y-3">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
              alt="Some great products for blasting fashion"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium pt-1">
            FASHION
          </span>
          <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug hover:text-gray-600 transition-colors cursor-pointer">
            Some great products for blasting fashion
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            FEB 12, 2022 <span class="mx-1">|</span> BY LORA MARIANE
          </p>
        </article>
      </div>
    </section>
  );
}
