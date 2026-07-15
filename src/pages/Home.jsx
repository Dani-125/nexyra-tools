import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import PopularTools from "../components/tools/PopularTools";
import Categories from "../components/home/Categories";
import FeaturedAI from "../components/home/FeaturedAI";
import AllTools from "../components/tools/AllTools";
import Features from "../components/home/Features";
import Footer from "../components/layout/Footer";

import { popularTools, allTools } from "../data/tools";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = allTools.filter((tool) => {
    const query = searchTerm.toLowerCase();

    return (
      tool.title.toLowerCase().includes(query) ||
      (tool.category && tool.category.toLowerCase().includes(query)) ||
      tool.description.toLowerCase().includes(query)
    );
  });

  const filteredPopularTools = popularTools.filter((tool) => {
    const query = searchTerm.toLowerCase();

    return (
      tool.title.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <Navbar />

      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
      />

      <PopularTools tools={filteredPopularTools} />

      <Categories />

      <FeaturedAI />

      <AllTools />

      <Features />

      <Footer />
    </>
  );
}

export default Home;