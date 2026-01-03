import React from "react";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import Banner from "./components/Banner";
import BrandMarquee from "./components/BrandMarquee";
import TodayDeals from "./components/TodayDeals";
import AdditionalBanner from "./components/AdditionalBanner";
import Footer from "./components/Footer";

/* Sample category data stored in an array (dynamic & easy to extend) */
const categories = [
  {
    id: "c1",
    title: "Shoes",
    image: "https://via.placeholder.com/80?text=Shoes",
  },
  {
    id: "c2",
    title: "Bags",
    image: "https://via.placeholder.com/80?text=Bags",
  },
  {
    id: "c3",
    title: "Accessories",
    image: "https://via.placeholder.com/80?text=Acc",
  },
  {
    id: "c4",
    title: "Clothing",
    image: "https://via.placeholder.com/80?text=Clothes",
  },
  {
    id: "c5",
    title: "Electronics",
    image: "https://via.placeholder.com/80?text=Tech",
  },
  {
    id: "c6",
    title: "Home",
    image: "https://via.placeholder.com/80?text=Home",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      

      <CategoryList categories={categories} />

      <Banner categories={categories} />

      {/* Brand marquee placed immediately below the banner */}
      <BrandMarquee />

      {/* Today's Deals section below the marquee */}
      <TodayDeals />

      {/* Additional banner below Today's Deals as requested */}
      <AdditionalBanner />
      
      {/* Site footer */}
      <Footer />
    </div>
  );
}
