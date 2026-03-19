import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Peta.css";

const position: [number, number] = [-6.9147, 107.6098]; // Bandung (Jawa Barat)

const Peta: React.FC = () => {
  return (
    <section className="peta">
      <div className="peta-container">
        <h1>Peta Budaya Jawa Barat</h1>
        <p>
          Jelajahi keberagaman budaya, wisata, dan sejarah di Jawa Barat.
        </p>

        {/* 🔥 REAL MAP */}
        <div className="map-wrapper">
          <MapContainer
            center={position}
            zoom={9}
            scrollWheelZoom={true}
            className="map"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Marker contoh */}
            <Marker position={position}>
              <Popup>
                Bandung - Jawa Barat 📍 <br />
                Pusat budaya Sunda
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Peta;