import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import Screenshots from "../components/sections/Screenshots";
import Pricing from "../components/sections/Pricing";
import DownloadApp from "../components/sections/DownloadApp";
import Blog from "../components/sections/Blog";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Screenshots />
      <Pricing />
      <DownloadApp />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
