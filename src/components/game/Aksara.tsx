import React, { useRef, useState, useEffect } from "react";
import "./Aksara.css";

const aksaraList = [
  { name: "Ha", guide: "M10 80 Q 50 10 90 80" },
  { name: "Na", guide: "M20 20 L80 20 L50 80 Z" },
  { name: "Ca", guide: "M10 50 Q 50 0 90 50 Q 50 100 10 50" },
];

const Aksara: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [selected, setSelected] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  /* DRAW */
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#d4af37";
  }, []);

  const startDraw = (e: React.MouseEvent) => {
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!drawing) return;
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDraw = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setScore(null);
  };

  /* SIMULASI AI SCORE */
  const checkScore = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    let pixelCount = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 0) pixelCount++;
    }

    // simple scoring logic
    let result = Math.min(100, Math.floor(pixelCount / 50));
    setScore(result);
  };

  return (
    <section className="aksara">
      <div className="aksara-container">

        <h1>🖋️ Aksara Jawa Simulator</h1>
        <p>Gambarlah aksara sesuai contoh, lalu cek kemiripan!</p>

        <div className="aksara-layout">

          {/* LEFT: CARD */}
          <div className="aksara-cards">
            {aksaraList.map((item, index) => (
              <div
                key={index}
                className={`aksara-card ${selected === index ? "active" : ""}`}
                onClick={() => {
                  setSelected(index);
                  clearCanvas();
                }}
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* CENTER: CANVAS */}
          <div className="aksara-canvas-section">

            <div className="guide-text">
              Contoh: {aksaraList[selected].name}
            </div>

            <div className="aksara-canvas-wrapper">
              <svg className="guide">
                <path
                  d={aksaraList[selected].guide}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>

              <canvas
                ref={canvasRef}
                width={300}
                height={300}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
              />
            </div>

            <div className="aksara-actions">
              <button onClick={clearCanvas}>Reset</button>
              <button onClick={checkScore}>Cek Kemiripan</button>
            </div>

            {score !== null && (
              <div className="aksara-score-box">
                Kemiripan: {score}%
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Aksara;