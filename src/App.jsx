import Categories from "./components/home/Categories";
import Footer from "./components/layout/Footer";
import Features from "./components/home/Features";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import PopularTools from "./components/tools/PopularTools";
import AllTools from "./components/tools/AllTools";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <PopularTools />
      <AllTools />
      <Features/>
      <Footer/>
      <Categories/>
    </div>
  );
}

export default App;