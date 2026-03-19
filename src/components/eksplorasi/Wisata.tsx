import React from "react";
import "./Wisata.css";
import kawahPutih from "../../assets/wisata-img/kawahputih.jpg";
import curugCimahi from "../../assets/wisata-img/curugcimahi.jpg";
import pangandaran from "../../assets/wisata-img/pantaipangandaran.jpg";
import tangkuban from "../../assets/wisata-img/tangkubanperahu.jpg";

/* DATA */
const wisataData = [
  {
    title: "Kawah Putih",
    location: "Bandung",
    image: kawahPutih,
  },
  {
    title: "Curug Cimahi",
    location: "Bandung Barat",
    image: curugCimahi,
  },
  {
    title: "Pantai Pangandaran",
    location: "Pangandaran",
    image: pangandaran,
  },
  {
    title: "Gunung Tangkuban Perahu",
    location: "Lembang",
    image: tangkuban,
  },
];

const Wisata: React.FC = () => {
  return (
    <section className="wisata">
      <div className="wisata-container">
        <h1>Wisata Jawa Barat</h1>
        <p>
          Temukan destinasi wisata terbaik di Jawa Barat mulai dari alam,
          pantai, hingga pegunungan yang menakjubkan.
        </p>

        <div className="wisata-grid">
          {wisataData.map((item, index) => (
            <div className="wisata-card" key={index}>
              
              {/* IMAGE */}
              <div
                className="wisata-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="overlay" />
              </div>

              {/* CONTENT */}
              <div className="wisata-content">
                <h3>{item.title}</h3>
                <p>{item.location}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wisata;