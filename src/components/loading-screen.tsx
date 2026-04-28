"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "portfolio_visited";
const COOKIE_EXPIRY_DAYS = 1;

const QUOTES = [
  {
    text: "The best error message is the one that never shows up.",
    author: "Anonymous",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "Anonymous",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Anonymous",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Anonymous",
  },
  {
    text: "It's not a bug — it's an undocumented feature.",
    author: "Anonymous",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Anonymous",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Anonymous",
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Anonymous",
  },
];

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));

  return match ? decodeURIComponent(match[2]) : null;
};

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();

  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quote] = useState(
    () => QUOTES[Math.floor(Math.random() * QUOTES.length)],
  );

  useEffect(() => {
    const visited = getCookie(COOKIE_NAME);
    if (visited) return;

    setVisible(true);

    let current = 0;

    const interval = setInterval(() => {
      current += Math.random() * 3 + 1.5;

      if (current >= 100) {
        current = 100;

        clearInterval(interval);

        setTimeout(() => {
          setFading(true);

          setTimeout(() => {
            setVisible(false);
            setCookie(COOKIE_NAME, "true", COOKIE_EXPIRY_DAYS);
          }, 700);
        }, 500);
      }
      setProgress(Math.min(current, 100));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #0d1117 0%, #090c10 60%, #050709 100%)",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(132,204,22,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,204,22,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(132,204,22,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
          width: "100%",
          maxWidth: "480px",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            textAlign: "left",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "rgba(240,246,252,0.65)",
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            &ldquo;{quote.text}&rdquo;
          </p>
          <p
            style={{
              color: "rgba(132,204,22,0.65)",
              fontSize: "0.8rem",
              marginTop: "0.6rem",
              letterSpacing: "0.05em",
              margin: "0.6rem 0 0",
              textAlign: "right",
            }}
          >
            — {quote.author}
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                color: "rgba(240,246,252,0.25)",
                letterSpacing: "0.12em",
                fontFamily: "monospace",
                textTransform: "uppercase",
              }}
            >
              Loading...
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "rgba(132,204,22,0.75)",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(240,246,252,0.07)",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, rgba(132,204,22,0.5), rgba(132,204,22,1))",
                borderRadius: "999px",
                transition: "width 0.2s linear",
                boxShadow: "0 0 10px rgba(132,204,22,0.45)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
