import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import bgImage from "../../assets/home-img/b1-jabar.jpg";
import "./Home.css";

export const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Harmoni yang Dijaga</h1>
          <p className="subtitle">
            "Dalam tradisi tari, persatuan Indonesia hadir melalui keselarasan
            gerak dan rasa. Setiap langkah menjadi wujud nilai-nilai Nusantara
            yang hidup dan terus dijaga."
          </p>

          <div className="info">
            <span>• Tarian Adat Papua</span>
            <span className="location">
              <FaMapMarkerAlt /> Papua Barat, Indonesia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CulturalSection: React.FC = () => {
  return (
    <section className="culture">
      <div className="culture-container">
        <div className="culture-left">
          <h2>Prof. Dr. Ananda Kusuma</h2>
          <p className="role">Sejarawan & Budayawan</p>
          <p className="book">
            Penulis buku "Sejarah Peradaban Nusantara"
          </p>
        </div>

        <div className="culture-right">
          <p className="quote">
            “Nusantara bukan sekadar nama geografis, melainkan peradaban yang
            telah berlangsung ribuan tahun. Setiap pulau, setiap suku, setiap
            bahasa adalah benang emas yang ditenun menjadi kain kebudayaan yang
            tak ternilai harganya.”
          </p>
        </div>
      </div>

      <div className="stats">
        <div className="card">
          <p className="label">PROVINSI</p>
          <h1>38</h1>
          <p className="desc">Dari Sabang sampai Merauke</p>
        </div>

        <div className="card">
          <p className="label">SUKU</p>
          <h1>1.340</h1>
          <p className="desc">Keberagaman yang mempersatukan</p>
        </div>

        <div className="card">
          <p className="label">BAHASA</p>
          <h1>718</h1>
          <p className="desc">Kekayaan linguistik Nusantara</p>
        </div>
      </div>
    </section>
  );
};