import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestPosts from "./components/LatestPosts";
import PopularPosts from "./components/PopularPosts";
import TopVideos from "./components/TopVideos";
import ShopItNow from "./components/ShopItNow";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <LatestPosts />
      <PopularPosts />
      <TopVideos />
      <ShopItNow />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
