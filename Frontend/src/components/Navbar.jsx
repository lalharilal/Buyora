import React from "react";

/* Simple SVG icons kept inline to avoid extra dependencies */
const Logo = () => (
  <div className="flex items-center gap-2 font-semibold text-indigo-600">
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#6366F1"></rect>
    </svg>
    <span className="hidden sm:inline">Shoply</span>
  </div>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" />
    <circle cx="12" cy="9" r="2.5" fill="white"/>
  </svg>
);

/* Icons: Cart / Orders / Profile */
const CartIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const OrdersIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 5h14l4 4v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 9h6M7 13h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProfileIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" /></svg>
);

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-4 h-16">
          {/* Left: Logo + Delivery */}
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden sm:flex items-center gap-2 text-gray-600 text-sm">
              <LocationIcon />
              <div>
                <div className="text-xs">Deliver to</div>
                <div className="font-medium">New York, NY</div>
              </div>
            </div>
          </div>

          {/* Center: Search (flex-1 ensures it stays centered) */}
          <div className="flex-1">
            <div className="mx-auto max-w-xl">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                {/* Camera button for image search (decorative for now; accessible label provided) */}
                <button
                  type="button"
                  aria-label="Search by image"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 7h3l2-2h6l2 2h3v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <input
                  id="search"
                  type="search"
                  placeholder="Search for products, brands, or styles"
                  className="w-full border border-gray-200 bg-gray-50 text-sm rounded-full py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  aria-label="Search products, brands, or styles"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right: icons with labels below */}
          <div className="flex items-center gap-3">
            <button type="button" aria-label="View cart" className="flex flex-col items-center gap-1 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              <CartIcon />
              <span className="text-xs text-gray-700">Cart</span>
            </button>

            <button type="button" aria-label="View orders" className="hidden sm:flex flex-col items-center gap-1 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              <OrdersIcon />
              <span className="text-xs text-gray-700">Orders</span>
            </button>

            <button type="button" aria-label="View profile" className="flex flex-col items-center gap-1 p-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200">
              <ProfileIcon />
              <span className="text-xs text-gray-700">Profile</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
