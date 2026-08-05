import React from "react";
import Header from "./components/Header"; 
import LatestPosts from "./LatestPosts";
import PopularPosts from "./PopularPosts";
import TopVideos from "./TopVideos";
import ShopItNow from "./ShopItNow";
import Newsletter from "./NewsLetter";
import Footer from "./Footer";
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
