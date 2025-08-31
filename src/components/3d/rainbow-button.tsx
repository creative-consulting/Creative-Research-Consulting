import React, { CSSProperties } from "react";

interface RainbowButtonProps {
  width?: number;
  timing?: number;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({
  width = 150,
  timing = 2,
  children = "Send Message",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const buttonStyle: CSSProperties = {
    "--width": `${width}px`,
    "--timing": `${timing}s`,
    border: 0,
    width: `var(--width)`,
    paddingBlock: "1em",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1em",
    background: "rgb(250, 82, 82)",
    transition: "all 0.2s",
    borderRadius: "3px",
    cursor: "pointer",
  } as CSSProperties;

  const hoverStyle: CSSProperties = {
    backgroundImage: `linear-gradient(
      to right,
      rgb(250, 82, 82),
      rgb(250, 82, 82) 16.65%,
      rgb(190, 75, 219) 16.65%,
      rgb(190, 75, 219) 33.3%,
      rgb(76, 110, 245) 33.3%,
      rgb(76, 110, 245) 49.95%,
      rgb(64, 192, 87) 49.95%,
      rgb(64, 192, 87) 66.6%,
      rgb(250, 176, 5) 66.6%,
      rgb(250, 176, 5) 83.25%,
      rgb(253, 126, 20) 83.25%,
      rgb(253, 126, 20) 100%,
      rgb(250, 82, 82) 100%`,
    animation: `var(--timing) linear dance6123 infinite`,
    transform: "scale(1.1) translateY(-1px)",
  };

  const keyframesStyle = `
    @keyframes dance6123 {
      to {
        background-position: var(--width);
      }
    }
  `;

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <style>{keyframesStyle}</style>
      <button
        style={{
          ...buttonStyle,
          ...(isHovered ? hoverStyle : {}),
        }}
        disabled={disabled}
        type={type}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={className}
      >
        {children}
      </button>
    </>
  );
};

export default RainbowButton;
