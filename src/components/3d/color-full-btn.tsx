"use client";

import React, { useState } from "react";

interface ColorfulButtonProps {
  textOne: string;
  textTwo?: string;
}

const ColorfulButton = ({ textOne, textTwo }: ColorfulButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Simplified color palette
  const colors = {
    primary: "#3b82f6", // blue
    secondary: "#ec4899", // pink
    accent: "#f59e0b", // yellow
    light: "#93c5fd", // light blue
    white: "#ffffff",
  };

  // Keyframes as CSS strings
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderRadius: "18px",
          outline: "none",
          cursor: "pointer",
          fontSize: "clamp(16px, 2vw, 23px)",
          fontFamily: "Arial, sans-serif",
          background: "transparent",
          border: "0",
          position: "relative",
          width: "clamp(180px, 25vw, 220px)",
          height: "clamp(60px, 10vw, 80px)",
          transition: "transform 0.3s ease",
          transform: isHovered ? "rotate(0deg)" : "rotate(353deg) skewX(4deg)",
        }}
      >
        {/* Background element */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "inherit",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0",
              borderRadius: "inherit",
              background: colors.secondary,
              transition: "all 0.3s ease",
              transform: isHovered ? "scale(1.02)" : "scale(1)",
              boxShadow: isHovered
                ? `0 10px 25px -5px ${colors.secondary}80`
                : `-7px 6px 0 0 ${colors.secondary}40`,
            }}
          />
        </div>

        {/* Button wrap */}
        <div
          style={{
            borderRadius: "inherit",
            overflow: "hidden",
            height: "100%",
            padding: "2px",
            background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.primary} 100%)`,
            position: "relative",
            transition: "all 0.3s ease",
            transform: isHovered ? "translate(0, 0)" : "translate(6px, -6px)",
          }}
        >
          {/* Glow effect on hover */}
          <div
            style={{
              position: "absolute",
              inset: "0",
              opacity: isHovered ? 0.3 : 0,
              outline: "none",
              borderRadius: "inherit",
              transition: "opacity 0.4s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "2px",
                width: "120px",
                height: "300px",
                margin: "auto",
                background:
                  "linear-gradient(to right, transparent 0%, white 50%, transparent 100%)",
                animation: "spin 3s linear infinite",
              }}
            />
          </div>

          {/* Button content */}
          <div
            style={{
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: "12px",
              borderRadius: "16px",
              fontWeight: 600,
              transition: "all 0.3s ease",
              background: `linear-gradient(to bottom, ${colors.light} 0%, ${colors.primary} 100%)`,
              boxShadow: `
                inset 0 4px 8px -2px ${colors.accent}80,
                inset 0 -4px 8px -2px rgba(0, 0, 0, 0.2)
              `,
            }}
          >
            {/* Text */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.white,
                textShadow: `0 1px 2px ${colors.secondary}`,
                transform: isHovered ? "translateX(-10px)" : "translateX(0)",
                transition:
                  "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              }}
            >
              {isHovered ? textTwo || "Click" : textOne}
            </div>

            {/* Arrow icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: isHovered ? "translateX(0)" : "translateX(10px)",
                opacity: isHovered ? 1 : 0.7,
                transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                animation: "float 2s ease-in-out infinite",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke={colors.white}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default ColorfulButton;
