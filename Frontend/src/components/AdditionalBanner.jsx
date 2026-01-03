import React from 'react';
import './AdditionalBanner.css';

export default function AdditionalBanner() {
  return (
    <section className="additional-banner">
      <div className="banner-inner max-w-7xl mx-auto px-1 sm:px-3">
        <div className="banner-content">
          <div className="banner-left">
            <div className="banner-badge">Today's Deals</div>
            <h2 className="banner-title">Limited time offers — Grab them before they're gone!</h2>
            <p className="banner-sub">Handpicked deals across electronics, fashion, and home — updated hourly.</p>
          </div>

          <div className="banner-right">
            <div className="glass-card">
              <div className="card-row">
                <img src="https://via.placeholder.com/220x120" alt="deal" className="card-image" />
                <div className="card-info">
                  <div className="card-name">Premium Backpack</div>
                  <div className="card-rating">⭐ 4.3</div>
                  <div className="card-price">₹1,899 <span className="old">₹3,499</span></div>
                </div>
              </div>
              <div className="card-actions">
                <button className="card-cta">Add</button>
              </div>
            </div>

            <div className="floating-chip">⭐ 2.4k Products Found</div>
          </div>
        </div>
      </div>
    </section>
  );
}
