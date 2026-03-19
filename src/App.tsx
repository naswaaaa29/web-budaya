import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Hero, CulturalSection } from "./components/home/Home";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CulturalSection />
      <Footer />
    </div>
  );
};

export default App;