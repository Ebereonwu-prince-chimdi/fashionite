import React from "react";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";

export default function TopVideos() {
  return (
    <section className="w-full bg-[#171717] text-white py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-300 mb-8">
          TOP VIDEOS
        </h2>

        <button
          aria-label="Previous Videos"
          className="absolute -left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-2 hidden sm:block">
          <ArrowLeft size={24} strokeWidth={1.5} />
        </button>

        <button
          aria-label="Next Videos"
          className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-2 hidden sm:block">
          <ArrowRight size={24} strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="space-y-4">
            <div className="relative aspect-[16/9] overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000"
                alt="Beautiful dress shown by top fashion models"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 transition-transform">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-normal leading-snug hover:text-gray-300 transition-colors cursor-pointer">
                Beautiful dress shown by top fashion models
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md"></p>
              Great video content relies on clear hooks, strong audience value,
              and structured delivery. Popular ideas include educational
              tutorials, day-in-the-life vlogs, product reviews, and
              behind-the-scenes clips
            </div>
          </article>

          <article className="space-y-4">
            <div className="relative aspect-[16/9] overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000"
                alt="Why is makeup important for your confidence?"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 transition-transform">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-serif font-normal leading-snug hover:text-gray-300 transition-colors cursor-pointer">
                Why is makeup important for your confidence ?
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices
                venenatis, id id sed massa commodo eros duis at cras neque.
              </p>
            </div>
          </article>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            aria-label="Slide 1"
            className="w-2 h-2 rounded-full bg-white"></button>
          <button
            aria-label="Slide 2"
            className="w-1.5 h-1.5 rounded-full bg-gray-600 hover:bg-gray-400 transition-colors"></button>
          <button
            aria-label="Slide 3"
            className="w-1.5 h-1.5 rounded-full bg-gray-600 hover:bg-gray-400 transition-colors"></button>
        </div>
      </div>
    </section>
  );
}
