import React from 'react';
import './BrandMarquee.css';

const BRANDS = [
  { id: 'adidas', name: 'Adidas', icon: '👟' },
  { id: 'canon', name: 'Canon', icon: '📷' },
  { id: 'dell', name: 'Dell', icon: '💻' },
  { id: 'zara', name: 'Zara', icon: '👔' },
  { id: 'nike', name: 'Nike', icon: '🏃' },
  { id: 'apple', name: 'Apple', icon: '🍎' },
  { id: 'samsung', name: 'Samsung', icon: '📱' },
  { id: 'sony', name: 'Sony', icon: '🎧' },
];

export default function BrandMarquee() {
  // duplicate for seamless CSS loop
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section className="brand-marquee-section" aria-label="Brands">
      <div className="max-w-7xl mx-auto px-1 sm:px-3">
        <div className="brand-marquee">
          <div className="brand-track">
            {loop.map((b, i) => (
              <div key={`${b.id}-${i}`} className="brand-card">
                <div className="brand-icon" aria-hidden>{b.icon}</div>
                <div className="brand-title">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
