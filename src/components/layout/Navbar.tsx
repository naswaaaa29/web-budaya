import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        <h2 className="brand">BudayaJabar</h2>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <div className="logo-circle">🜃</div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <ul className="nav-links">

          <li>
            <NavLink to="/" end>
              Beranda
            </NavLink>
          </li>

          <li>
            <NavLink to="/peta">
              Peta
            </NavLink>
          </li>

          <li className="dropdown">
            Eksplorasi
            <span className="arrow">▾</span>

            <div className="dropdown-menu">
              <NavLink to="/sejarah">Sejarah</NavLink>
              <NavLink to="/wisata">Wisata</NavLink>
              <NavLink to="/kuliner">Kuliner</NavLink>
              <NavLink to="/event">Event</NavLink>
              <NavLink to="/berita">Berita</NavLink>
            </div>
          </li>

          <li className="dropdown">
            Game
            <span className="arrow">▾</span>

            <div className="dropdown-menu">
              <NavLink to="/alatmusik">Alat Musik</NavLink>
              <NavLink to="/aksara">Aksara</NavLink>
              {/* <NavLink to="/kuliner">Kuliner</NavLink>
              <NavLink to="/event">Event</NavLink>
              <NavLink to="/berita">Berita</NavLink> */}
            </div>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;