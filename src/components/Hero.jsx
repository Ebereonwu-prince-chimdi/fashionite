import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section class="relative w-full h-[550px] md:h-[650px] overflow-hidden">
  
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1600"
        alt="Hero Fashion Banner"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div class="absolute inset-0 bg-black/25"></div>

      <button
        aria-label="Previous Slide"
        class="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 z-10">
        <ArrowLeft size={28} strokeWidth={1.5} />
      </button>

      <button
        aria-label="Next Slide"
        class="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 z-10">
        <ArrowRight size={28} strokeWidth={1.5} />
      </button>

    
      <div class="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-3xl mx-auto space-y-4">
   
        <span class="text-xs uppercase tracking-[0.25em] font-medium opacity-90">
          Fashion
        </span>

    
        <h1 class="text-3xl md:text-5xl font-serif font-light leading-tight tracking-wide">
          How to unlock creativity & make something useful?
        </h1>

      
        <p class="text-[11px] uppercase tracking-[0.2em] font-medium opacity-80 pt-2">
          Feb 12, 2022 <span class="mx-1">|</span> By Lora Mariane
        </p>
      </div>
    </section>
  );
}
