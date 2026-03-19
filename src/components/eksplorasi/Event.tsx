import React from "react";
import "./Event.css";

/* IMPORT IMAGE */
import event1 from "../../assets/wisata-img/curugcimahi.jpg";
import event2 from "../../assets/wisata-img/kawahputih.jpg";
import event3 from "../../assets/wisata-img/pantaipangandaran.jpg";

const events = [
  {
    title: "Festival Budaya Sunda 2026",
    date: "12 Mar 2026",
    location: "Bandung",
    image: event1,
    featured: true,
  },
  {
    title: "Pameran Seni Tradisional",
    date: "20 Mar 2026",
    location: "Garut",
    image: event2,
  },
  {
    title: "Festival Kuliner Nusantara",
    date: "25 Mar 2026",
    location: "Bogor",
    image: event3,
  },
];

const Event: React.FC = () => {
  return (
    <section className="event">
      <div className="event-container">

        <h1>Event Budaya Jawa Barat</h1>
        <p>
          Temukan berbagai acara budaya, festival, dan kegiatan menarik di Jawa Barat.
        </p>

        {/* 🔥 FEATURED EVENT */}
        <div className="featured-event">
          <img src={events[0].image} alt="" />

          <div className="featured-overlay">
            <span className="badge">EVENT UTAMA</span>
            <h2>{events[0].title}</h2>
            <p>{events[0].location} • {events[0].date}</p>
          </div>
        </div>

        {/* 🔥 LIST EVENT */}
        <div className="event-grid">
          {events.slice(1).map((item, index) => (
            <div className="event-card" key={index}>
              
              <div className="event-image">
                <img src={item.image} alt="" />
                <span className="date">{item.date}</span>
              </div>

              <div className="event-content">
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

export default Event;