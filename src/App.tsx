import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Hero, CulturalSection } from "./components/home/Home";
import Peta from "./components/peta/Peta";
import Sejarah from "./components/eksplorasi/Sejarah";
import Wisata from "./components/eksplorasi/Wisata";
import Kuliner from "./components/eksplorasi/Kuliner";
import Event from "./components/eksplorasi/Event";
import Berita from "./components/eksplorasi/Berita";

import Angklung from "./components/game/Angklung";
import Aksara from "./components/game/Aksara";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CulturalSection />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peta" element={<Peta />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/event" element={<Event />} />
        <Route path="/berita" element={<Berita />} />

        <Route path="/alatmusik" element={<Angklung />} />
        <Route path="/aksara" element={<Aksara />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;