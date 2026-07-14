import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import PopularTools from "./components/tools/PopularTools";
import Categories from "./components/home/Categories";
import FeaturedAI from "./components/home/FeaturedAI";
import AllTools from "./components/tools/AllTools";
import Features from "./components/home/Features";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <PopularTools />
        <Categories />
        <FeaturedAI />
        <AllTools />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;