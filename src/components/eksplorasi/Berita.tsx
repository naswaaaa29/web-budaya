import React from "react";
import "./Berita.css";

/* IMPORT IMAGE */
import berita1 from "../../assets/wisata-img/kawahputih.jpg";
import berita2 from "../../assets/wisata-img/curugcimahi.jpg";
import berita3 from "../../assets/wisata-img/pantaipangandaran.jpg";
import berita4 from "../../assets/wisata-img/tangkubanperahu.jpg";

const beritaData = [
  {
    title: "Festival Budaya Sunda Kembali Digelar Meriah di Bandung",
    date: "12 Maret 2026",
    category: "Budaya",
    image: berita1,
    featured: true,
  },
  {
    title: "Wisata Pangandaran Jadi Destinasi Favorit Liburan 2026",
    date: "10 Maret 2026",
    category: "Wisata",
    image: berita2,
  },
  {
    title: "Kuliner Tradisional Sunda Semakin Mendunia",
    date: "8 Maret 2026",
    category: "Kuliner",
    image: berita3,
  },
  {
    title: "Generasi Muda Mulai Melestarikan Seni Tradisional",
    date: "5 Maret 2026",
    category: "Budaya",
    image: berita4,
  },
];

const Berita: React.FC = () => {
  return (
    <section className="berita">
      <div className="berita-container">

        <h1>Berita Budaya</h1>
        <p>
          Update terbaru seputar budaya, wisata, dan perkembangan Jawa Barat.
        </p>

        {/* 🔥 FEATURED NEWS */}
        <div className="featured-news">
          <img src={beritaData[0].image} alt="" />

          <div className="featured-overlay">
            <span className="category">{beritaData[0].category}</span>
            <h2>{beritaData[0].title}</h2>
            <p>{beritaData[0].date}</p>
          </div>
        </div>

        {/* 🔥 NEWS GRID */}
        <div className="berita-grid">
          {beritaData.slice(1).map((item, index) => (
            <div className="berita-card" key={index}>
              
              <div className="berita-image">
                <img src={item.image} alt="" />
              </div>

              <div className="berita-content">
                <span className="category">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Berita;