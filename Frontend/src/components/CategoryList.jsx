import React, { useRef, useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

/**
 * CategoryList
 * Props:
 *  - categories: [{ id, title, image }]
 *
 * Layout behavior:
 *  - Mobile: horizontal scrollable list (flex, overflow-x-auto)
 *  - sm and up: grid layout with multiple columns
 */
export default function CategoryList({ categories = [] }) {
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleKeyDown = (e) => {
    // When paused (hover/focus) we block scroll-related keys
    if (isPaused) return;

    const container = scrollerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('[data-category-card]'));
    const active = document.activeElement;
    const first = cards[0];
    const last = cards[cards.length - 1];
    const scrollAmount = Math.max(container.clientWidth * 0.8, 200);

    if (e.key === "ArrowLeft") {
      if ((first && first.contains(active)) || active === container) {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        e.preventDefault();
      }
    }

    if (e.key === "ArrowRight") {
      if ((last && last.contains(active)) || active === container) {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    update();
    container.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      container.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scrollerRef]);

  const scrollByAmount = (amount) => {
    const container = scrollerRef.current;
    if (!container) return;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 py-6">

      <div className="relative">
        {/* Left control */}
        <button
          type="button"
          aria-label="Scroll categories left"
          onClick={() => scrollByAmount(-(scrollerRef.current?.clientWidth || 300) * 0.8)}
          disabled={!canScrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Category carousel. Use arrow keys on first/last card to scroll"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onWheel={(e) => isPaused && e.preventDefault()}
          onTouchMove={(e) => isPaused && e.preventDefault()}
          className={`flex space-x-4 overflow-x-auto ${isPaused ? 'touch-none' : 'touch-auto'} pb-2 outline-none focus:ring-0 scroll-smooth sm:grid sm:grid-cols-3 sm:gap-4 sm:space-x-0 md:grid-cols-4 lg:grid-cols-6`}
        >
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              image={cat.image}
            />
          ))}
        </div>

        {/* Right control */}
        <button
          type="button"
          aria-label="Scroll categories right"
          onClick={() => scrollByAmount((scrollerRef.current?.clientWidth || 300) * 0.8)}
          disabled={!canScrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
