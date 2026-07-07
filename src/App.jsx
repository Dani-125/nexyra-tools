import PopularTools from "./components/tools/PopularTools";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <PopularTools />
    </div>
  );
}

export default App;