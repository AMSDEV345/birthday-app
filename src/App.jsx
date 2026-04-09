import React, { useState, useEffect } from "react";
import "./App.css";

// ─── BASIC INFO ─────────────────────
const NAME = "Ojumirayo";
const BIRTHDAY = new Date("2026-04-15");

// ─── CONTENT ─────────────────────────
const HEARTFELT_MESSAGE =
  "Every thought I have somehow finds its way to you. You are my peace, my joy, and my calm.";

const QUOTE =
  "The more you celebrate your life, the more there is in life to celebrate.";

const LOVE_LETTER =
  "You are my calm, my joy, my soft place in a noisy world. I love you endlessly.";

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

// ─── MEDIA ───────────────────────────
const MEDIA = [
  {
    type: "image",
    src: "/images/wassy2.jpg",
    text: "You are the most beautiful part of every memory 💜",
  },
  {
    type: "video",
    src: "/videos/vip1.mp4",
    text: "Every moment with you feels magical ✨",
  },
  {
    type: "video",
    src: "/videos/vip2.mp4",
    text: "You turn ordinary days into memories 💕",
  },
  {
    type: "video",
    src: "/videos/vip3.mp4",
    text: "Your smile stays in my mind always 🌸",
  },
  {
    type: "video",
    src: "/videos/vip4.mp4",
    text: "You are my peace 💜",
  },
  {
    type: "video",
    src: "/videos/vip5.mp4",
    text: "Forever thinking about you ❤️",
  },
];

// ─── COUNTDOWN ───────────────────────
function getTimeLeft() {
  const diff = BIRTHDAY - new Date();

  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="countdown">
      {Object.entries(time).map(([k, v]) => (
        <div key={k} className="box">
          <h2>{v}</h2>
          <p>{k}</p>
        </div>
      ))}
    </div>
  );
}

// ─── APP ─────────────────────────────
export default function App() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Happy Birthday {NAME} 💜</h1>
          <p>You are my everything</p>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="section">
        <h2>Countdown to 15 April 2026</h2>
        <Countdown />
      </section>

      {/* MESSAGE */}
      <section className="section">
        <h2>Sweet Message</h2>
        <div className="box">{HEARTFELT_MESSAGE}</div>
      </section>

      {/* WHY SPECIAL */}
      <section className="section">
        <h2>Why You Are Special</h2>
        {REASONS.map((r, i) => (
          <div key={i} className="box curve-box">
            {r}
          </div>
        ))}
      </section>

      {/* WISHES */}
      <section className="section">
        <h2>Wishes For You</h2>
        {WISHES.map((w, i) => (
          <div key={i} className="box squad-box">
            {w}
          </div>
        ))}
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="box quote-box">
          {QUOTE}
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="section">
        <div className="box love-box">
          {LOVE_LETTER}
        </div>
      </section>

      {/* MEDIA */}
      <section className="section">
        <h2>Memories</h2>

        <div className="grid">
          {MEDIA.map((m, i) => (
            <div key={i} className="card">
              {m.type === "image" ? (
                <img src={m.src} alt="" />
              ) : (
                <video src={m.src} controls />
              )}
              <p className="caption">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Made with 💜 for {NAME}
      </footer>

    </div>
  );
}