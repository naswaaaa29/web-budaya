import React, { useEffect, useState } from "react";
import "./Angklung.css";

/* SOUND */
import doSound from "../../assets/sounds/sound-a.mp3";
import reSound from "../../assets/sounds/sound-b.mp3";
import miSound from "../../assets/sounds/sound-c.mp3";
import faSound from "../../assets/sounds/sound-d.mp3";
import solSound from "../../assets/sounds/sound-e.mp3";

const keys = [
  { key: "A", note: "Do", sound: doSound },
  { key: "S", note: "Re", sound: reSound },
  { key: "D", note: "Mi", sound: miSound },
  { key: "F", note: "Fa", sound: faSound },
  { key: "G", note: "Sol", sound: solSound },
];

const songs = {
  manuk: {
    title: "Manuk Dadali",
    lyrics: [
      { text: "Manuk dadali manuk panggagahna", note: "Do" },
      { text: "Perlambang sakti Indonesia jaya", note: "Re" },
      { text: "Sok sanajan loba nagara", note: "Mi" },
      { text: "Teu eleh ku bangsa mana", note: "Fa" },
      { text: "Manuk dadali pangkakoncarana", note: "Sol" },
    ],
  },
  bubuy: {
    title: "Bubuy Bulan",
    lyrics: [
      { text: "Bubuy bulan bubuy bulan", note: "Do" },
      { text: "Sangray bentang di langit", note: "Re" },
      { text: "Panon poe geus tilelep", note: "Mi" },
      { text: "Bulan datang caang deui", note: "Fa" },
    ],
  },
};

const Angklung: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const [selectedSong, setSelectedSong] = useState<"manuk" | "bubuy">("manuk");
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);

  const playSound = (sound: string, key: string) => {
    const audio = new Audio(sound);
    audio.currentTime = 0;
    audio.play();

    setActiveKey(key);
    setScore((prev) => prev + 10);

    setTimeout(() => setActiveKey(null), 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLyricIndex((prev) => {
        const next = prev + 1;
        return next >= songs[selectedSong].lyrics.length ? 0 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedSong]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const pressed = e.key.toUpperCase();
      const found = keys.find((k) => k.key === pressed);

      if (found) playSound(found.sound, found.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentNote =
    songs[selectedSong].lyrics[currentLyricIndex]?.note;

  return (
    <section className="angklung">
      <div className="angklung-container">

        {/* HEADER */}
        <div className="angklung-header">
          <h1>🎶 Angklung Maestro</h1>
          <p>Mainkan sambil mengikuti lagu daerah</p>
          <div className="score">Score: {score}</div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="angklung-layout">

          {/* LEFT */}
          <div className="angklung-left">
            <div className="angklung-bars">
              {keys.map((item, index) => (
                <div
                  key={item.key}
                  className={`bar 
                    ${activeKey === item.key ? "active" : ""}
                    ${currentNote === item.note ? "guide" : ""}
                  `}
                  onClick={() => playSound(item.sound, item.key)}
                  style={{
                    height: `${120 + index * 30}px`,
                  }}
                >
                  <span className="note">{item.note}</span>
                  <span className="key">{item.key}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="angklung-right">
            <h2>{songs[selectedSong].title}</h2>

            <div className="song-select">
              <button onClick={() => setSelectedSong("manuk")}>
                Manuk Dadali
              </button>
              <button onClick={() => setSelectedSong("bubuy")}>
                Bubuy Bulan
              </button>
            </div>

            <div className="lyrics">
              {songs[selectedSong].lyrics.map((line, index) => (
                <p
                  key={index}
                  className={index === currentLyricIndex ? "active" : ""}
                >
                  {line.text} <span>({line.note})</span>
                </p>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Angklung;