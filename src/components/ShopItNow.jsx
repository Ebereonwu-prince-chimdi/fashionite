import React from "react";

export default function ShopItNow() {
  const products = [
    {
      name: "Baggy Grey Shirt",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Black Top Coat",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Check Jumpsuit",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Choco Leather Bag",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Florish Onepiece",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
     
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-800">
          SHOP IT NOW
        </h2>
        <a
          href="#"
          className="text-[10px] uppercase tracking-widest text-gray-800 border-b border-gray-800 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors">
          VIEW ALL PRODUCTS
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((item, index) => (
          <div key={index} className="space-y-3 group cursor-pointer">
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-gray-800 font-medium">
              <span className="truncate pr-1">{item.name}</span>
              <span className="text-gray-500">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
