import React from "react";
import Link from "next/link";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const GradientLinkButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  href,
  width = "150px",
  height = "60px",
  fontSize = "16px",
  className = "",
  type = "button",
}) => {
  // Common button styles
  const buttonStyles = {
    width,
    height,
    fontSize,
    fontFamily: '"Dosis", sans-serif',
    borderRadius: "50px",
    backgroundImage: "linear-gradient(135deg, #feb692 0%, #ea5455 100%)",
    boxShadow: "0 20px 30px -6px rgba(238, 103, 97, 0.5)",
    outline: "none",
    cursor: "pointer",
    border: "none",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
  };

  // If href is provided, return a Link component
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={`gradient-btn ${className}`} style={buttonStyles}>
          {children}
        </a>
      </Link>
    );
  }

  // Otherwise return a regular button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`gradient-btn ${className}`}
      style={buttonStyles}
    >
      {children}
    </button>
  );
};

// Global styles (add this to your global CSS file)
/*
.gradient-btn:hover {
  transform: translateY(3px);
  box-shadow: none;
}

.gradient-btn:active {
  opacity: 0.5;
}
*/

export default GradientLinkButton;
