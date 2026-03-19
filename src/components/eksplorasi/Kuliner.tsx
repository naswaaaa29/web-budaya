import React from "react";
import "./Kuliner.css";
import kawahPutih from "../../assets/wisata-img/kawahputih.jpg";
import curugCimahi from "../../assets/wisata-img/curugcimahi.jpg";
import pangandaran from "../../assets/wisata-img/pantaipangandaran.jpg";
import tangkuban from "../../assets/wisata-img/tangkubanperahu.jpg";


const kulinerData = [
  {
    title: "Nasi Timbel",
    location: "Bandung",
    category: "Tradisional",
    rating: "4.8",
    image: kawahPutih,
  },
  {
    title: "Sate Maranggi",
    location: "Purwakarta",
    category: "Daging",
    rating: "4.7",
    image: curugCimahi,
  },
  {
    title: "Surabi",
    location: "Bandung",
    category: "Jajanan",
    rating: "4.6",
    image: pangandaran,
  },
  {
    title: "Batagor",
    location: "Bandung",
    category: "Street Food",
    rating: "4.9",
    image: tangkuban,
  },
];

const Kuliner: React.FC = () => {
  return (
    <section className="kuliner">
      <div className="kuliner-container">
        <h1>Kuliner Jawa Barat</h1>
        <p>
          Nikmati kekayaan cita rasa khas Sunda dari berbagai daerah di Jawa Barat.
        </p>

        <div className="kuliner-list">
          {kulinerData.map((item, index) => (
            <div className="kuliner-card" key={index}>
              
              {/* IMAGE */}
              <div
                className="kuliner-image"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* CONTENT */}
              <div className="kuliner-content">
                <div className="top">
                  <h3>{item.title}</h3>
                  <span className="rating">⭐ {item.rating}</span>
                </div>

                <p className="location">{item.location}</p>
                <span className="category">{item.category}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kuliner;