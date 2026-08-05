import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-[#FAF8F5] py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
    
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 leading-snug text-center md:text-left">
          Subscribe Our <br className="hidden md:block" /> Newsletter
        </h2>

      
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full md:w-auto max-w-md">
          <input
            type="email"
            placeholder="Your e-mail address here"
            className="w-full md:w-72 bg-white px-4 py-3 text-xs text-gray-800 border border-gray-200 focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-black text-white text-[10px] uppercase tracking-widest font-semibold px-6 py-3 hover:bg-gray-800 transition-colors whitespace-nowrap">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
