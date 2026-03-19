import React from "react";
import "./Sejarah.css";

const Sejarah: React.FC = () => {
  return (
    <section className="sejarah">
      <div className="sejarah-container">
        <h1>Sejarah Jawa Barat</h1>
        <p>
          Jawa Barat memiliki sejarah panjang yang kaya akan budaya Sunda,
          kerajaan kuno, serta perkembangan peradaban Nusantara.
        </p>

        <div className="sejarah-content">
          <div className="card">
            <h3>Kerajaan Tarumanagara</h3>
            <p>
              Salah satu kerajaan tertua di Indonesia yang berkembang pada abad ke-4.
            </p>
          </div>

          <div className="card">
            <h3>Kerajaan Sunda</h3>
            <p>
              Kerajaan besar yang menjadi pusat kebudayaan Sunda di masa lalu.
            </p>
          </div>

          <div className="card">
            <h3>Masa Kolonial</h3>
            <p>
              Jawa Barat menjadi wilayah penting dalam sejarah kolonial Belanda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;