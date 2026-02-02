import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import Screenshots from "../components/sections/Screenshots";
import Pricing from "../components/sections/Pricing";
import DownloadApp from "../components/sections/DownloadApp";
import Blog from "../components/sections/Blog";
import Footer from "../components/layout/Footer";
import { WOW } from 'wowjs';
import Video from "../components/sections/Video";

const Home = () => {

// 2. Initialize WOW when the component mounts
  useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow', //
      mobile: false, // 
      live: false // This disables continuous scanning for new elements (better performance)
    });
    wow.init();
  }, []);

  return (
    <>
    <section className="header_area">
      <Navbar />
      <Hero />
    </section>
      <Features />
      <About />
      <Video />
      <Screenshots />
      <Pricing />
      <DownloadApp />
      <Blog />
      <Footer />
      <a href="#" className="back-to-top" style={{display: "block"}}><i className="lni lni-chevron-up"></i></a>
    </>
  );
};

export default Home;
