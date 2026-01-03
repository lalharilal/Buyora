import React from "react";

const deals = [
  { id: 1, title: "Wireless Earbuds Pro", price: 2999, old: 4999, rating: 4.5, img: "https://via.placeholder.com/360x220" },
  { id: 2, title: "Smart Fitness Watch", price: 5499, old: 8999, rating: 4.7, img: "https://via.placeholder.com/360x220" },
  { id: 3, title: "Premium Backpack", price: 1899, old: 3499, rating: 4.3, img: "https://via.placeholder.com/360x220" },
  { id: 4, title: "Designer Sunglasses", price: 3299, old: 5999, rating: 4.6, img: "https://via.placeholder.com/360x220" },
  { id: 5, title: "Mirrorless Camera", price: 45999, old: 69999, rating: 4.8, img: "https://via.placeholder.com/360x220" },
  { id: 6, title: "Mechanical Keyboard", price: 7999, old: 12999, rating: 4.9, img: "https://via.placeholder.com/360x220" },
];

export default function TodayDeals() {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-indigo-600">Today's Deals</h2>
          <p className="text-sm text-gray-500">Limited time offers - Grab them before they're gone!</p>
        </div>
        <button className="hidden sm:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-medium shadow-md hover:opacity-95">View All</button>
      </div>

      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth">
          {deals.map((d) => (
            <article key={d.id} className="min-w-[220px] sm:min-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <img src={d.img} alt={d.title} className="w-full h-36 object-cover" />
                <div className="absolute left-3 top-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">{Math.floor(Math.random()*30)+30}%</div>
                <button className="absolute right-3 top-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none"><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"/></svg>
                  <span className="text-gray-700 text-sm">{d.rating}</span>
                </div>
                {/* product title intentionally removed to keep images clean (per UI request) */}
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">₹{d.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 line-through">₹{d.old.toLocaleString()}</div>
                  </div>
                  <button className="btn-gradient inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
