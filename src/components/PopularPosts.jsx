import React from "react";


export default function PopularPosts() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-800 mb-6">
        POPULAR POSTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="space-y-3">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800"
              alt="Photography poses tips and tricks for fashion"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium pt-1">
            FASHION
          </span>
          <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug hover:text-gray-600 transition-colors cursor-pointer">
            Photography poses tips and tricks for fashion
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            FEB 12, 2022 <span className="mx-1">|</span> BY LORA MARIANE
          </p>
        </article>

        <article className="space-y-3">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800"
              alt="Best accessories for soft brown color overcoat"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium pt-1">
            FASHION
          </span>
          <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug hover:text-gray-600 transition-colors cursor-pointer">
            Best accessories for soft brown color overcoat
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            FEB 12, 2022 <span className="mx-1">|</span> BY LORA MARIANE
          </p>
        </article>

        <article className="space-y-3">
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
              alt="Top 10 best optical brand in the whole world"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-medium pt-1">
            FASHION
          </span>
          <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug hover:text-gray-600 transition-colors cursor-pointer">
            Top 10 best optical brand in the whole world
          </h3>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            FEB 12, 2022 <span className="mx-1">|</span> BY LORA MARIANE
          </p>
        </article>
      </div>
    </section>
  );
}
