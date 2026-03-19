import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      
      {/* LEFT */}
      <div className="nav-left">
        <h2 className="brand">BudJabar</h2>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <div className="logo-circle">🜃</div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <ul className="nav-links">
          <li className="active">Beranda</li>
          <li>Peta</li>

          <li className="dropdown">
            Eksplorasi
            <span className="arrow">▾</span>

            <div className="dropdown-menu">
              <p>Sejarah</p>
              <p>Wisata</p>
              <p>Kuliner</p>
              <p>Event</p>
              <p>Berita</p>
            </div>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;