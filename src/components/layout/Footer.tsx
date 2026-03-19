import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col brand">
          <h2 className="logo">BUDAYAJABAR</h2>
          <p>
            Platform digital pelestarian budaya Nusantara terlengkap dengan arsip
            sejarah, peta interaktif, dan rekomendasi wisata.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h3 className="footer-title">Navigasi</h3>
          <ul>
            <li>Beranda</li>
            <li>Peta</li>
            <li>Sejarah</li>
            <li>Wisata</li>
            <li>Kuliner</li>
            <li>Event</li>
            <li>Berita</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3 className="footer-title">Kontak</h3>
          <ul className="contact">
            <li><FaMapMarkerAlt /> Jl. Budaya Nusantara, Jakarta</li>
            <li><FaEnvelope /> info@budayajabar.id</li>
            <li><FaPhone /> +62 896 6343 1927</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3 className="footer-title">Newsletter</h3>
          <p>Dapatkan update budaya Nusantara langsung di inbox Anda</p>

          <div className="newsletter">
            <input type="email" placeholder="Email Anda" />
            <button>➤</button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 BudayaJabar.</p>
        <div className="footer-links">
          <span>Syarat & Ketentuan</span>
          <span>Kebijakan Privasi</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;