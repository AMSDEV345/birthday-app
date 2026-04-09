import { useState } from "react";
import "./App.css";

/* ─── DATA ─── */
const NAME = "Ojumirayo";

const HEARTFELT_MESSAGE =
  "Every thought I have somehow finds its way to you. Your smile, your laugh, the way your presence lights up even the quietest corners of my mind.";

const REASONS = [
  "Your smile is my favorite view.",
  "You bring peace into chaos.",
  "Your heart is pure and rare.",
  "You make life feel lighter.",
];

const WISHES = [
  "May your life be filled with endless joy.",
  "May love follow you everywhere.",
  "May your heart never know sadness.",
];

const QUOTE =
  "The more you celebrate your life, the more there is in life to celebrate.";

const LOVE_LETTER =
  "You are my calm, my joy, my soft place in a noisy world. I love you endlessly.";

/* ─── MEDIA ─── */
const MEDIA = [
  {
    type: "image",
    src: "/images/wassy1.jpg",
    text: "A smile that stays in my heart forever 💜",
  },
  {
    type: "video",
    src: "/videos/vip1.mp4",
    text: "Moments I never want to forget 🎥",
  },
  {
    type: "video",
    src: "/videos/vip2.mp4",
    text: "You are my happiness 💜",
  },
  {
    type: "video",
    src: "/videos/vip3.mp4",
    text: "Every second with you matters ✨",
  },
  {
    type: "video",
    src: "/videos/vip4.mp4",
    text: "Forever feels real with you 💫",
  },
];

/* ─── COMPONENT ─── */
export default function App() {
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <div className="app">

      {/* HERO */}
      <section className="hero">
        <h1>Happy Birthday {NAME} 💜</h1>
        <p>{HEARTFELT_MESSAGE}</p>
      </section>

      {/* SPECIAL BOX */}
      <section className="box">
        <h2>Why You Are Special</h2>
        {REASONS.map((r, i) => (
          <div key={i} className="item">{r}</div>
        ))}
      </section>

      {/* MEDIA */}
      <section className="box">
        <h2>Memories</h2>

        <div className="grid">
          {MEDIA.map((m, i) => (
            <div key={i} className="card">
              {m.type === "image" ? (
                <img src={m.src} alt="" />
              ) : (
                <video src={m.src} controls />
              )}
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WISHES */}
      <section className="box">
        <h2>Wishes For You</h2>
        {WISHES.map((w, i) => (
          <div key={i} className="item">{w}</div>
        ))}
      </section>

      {/* QUOTE */}
      <section className="box center">
        <p className="quote">"{QUOTE}"</p>
      </section>

      {/* LOVE LETTER */}
      <section className="box">
        <h2>Love Letter</h2>

        {!openLetter ? (
          <button onClick={() => setOpenLetter(true)}>
            Open Letter 💌
          </button>
        ) : (
          <p className="letter">{LOVE_LETTER}</p>
        )}
      </section>

      {/* FOOTER */}
      <footer>
        Made with 💜 for {NAME}
      </footer>

    </div>
  );
}