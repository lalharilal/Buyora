import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="pill">ShopLux</h3>
            <p className="mt-4 text-gray-200 leading-relaxed">Your premium destination for the latest trends in fashion, electronics, and lifestyle products.</p>
            <div className="socials mt-6">
              <button aria-label="facebook" className="social-btn">{/* FB */}
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3v7.03C18.34 21.19 22 17.06 22 12.07z" fill="#fff"/></svg>
              </button>
              <button aria-label="twitter" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.1 1.53-1.9-.67.4-1.41.69-2.2.85C18.7 4.6 17.7 4 16.58 4c-1.7 0-3.09 1.39-3.09 3.1 0 .24.03.47.08.69C10.2 7.64 7.1 6.02 5 3.39c-.26.45-.41.98-.41 1.54 0 1.07.54 2.02 1.36 2.58-.51-.02-.99-.16-1.41-.39v.04c0 1.5 1.06 2.75 2.46 3.03-.26.07-.53.1-.81.1-.2 0-.4-.02-.59-.06.4 1.25 1.57 2.16 2.95 2.18C9.3 15.4 7.6 16 5.8 16c-.3 0-.6-.02-.9-.06 1.7 1.08 3.73 1.72 5.9 1.72 7.08 0 10.96-5.87 10.96-10.96v-.5c.76-.55 1.4-1.24 1.92-2.03-.7.31-1.45.51-2.23.6z" fill="#fff"/></svg>
              </button>
              <button aria-label="instagram" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5a4 4 0 100 8 4 4 0 000-8zm5.5-3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" fill="#fff"/></svg>
              </button>
              <button aria-label="youtube" className="social-btn">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M10 15l5.2-3L10 9v6zM21.8 8s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1-2.6-.2-6.5-.2-6.5-.2h-.1s-3.9 0-6.6.2c-.4 0-1.3.1-1.9 1C2.4 6.4 2.2 8 2.2 8S2 9.7 2 11.4v1.2c0 1.7.2 3.4.2 3.4s.2 1.6.8 2.3c.7.9 1.6.9 2 1 1.5.1 6.4.2 6.4.2s3.9 0 6.6-.2c.4 0 1.3-.1 1.9-1 .6-.7.8-2.3.8-2.3s.2-1.7.2-3.4v-1.2c0-1.7-.2-3.4-.2-3.4z" fill="#fff"/></svg>
              </button>
            </div>
          </div>

          <div>
            <h4 className="pill">Quick Links</h4>
            <ul className="mt-4 link-list">
              <li>About Us</li>
              <li>Shop</li>
              <li>Track Order</li>
              <li>Returns & Exchanges</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="pill">Customer Service</h4>
            <ul className="mt-4 link-list">
              <li>Help Center</li>
              <li>Shipping Info</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="pill">Contact Us</h4>
            <ul className="mt-4 contact-list">
              <li>123 Shopping Street, Mumbai, MH 400001</li>
              <li>support@shoplux.com</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div>
        </div>

        <hr className="divider my-10" />

        <div className="newsletter text-center">
          <h4 className="pill inline-block">Subscribe to Our Newsletter</h4>
          <p className="mt-3 text-gray-200">Get exclusive deals and updates delivered to your inbox</p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <input aria-label="email" className="newsletter-input" placeholder="Enter your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-4">
        <div className="max-w-7xl mx-auto px-4">
          <small className="text-gray-200">© 2025 ShopLux. All rights reserved. | Made with ❤️ for amazing shoppers</small>
        </div>
      </div>
    </footer>
  );
}
