import React from "react";
import styled, { keyframes } from "styled-components";

interface GradientButtonProps {
  children?: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children = "New to you",
}) => {
  return (
    <StyledButton className="button">
      <span>{children}</span>
    </StyledButton>
  );
};

// Animation for the gradient glow
const gradientGlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledButton = styled.button`
  position: relative;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  background-size: 200% 200%;
  padding: 14px 25px;
  border-radius: 10px;
  font-size: 1.25em;
  cursor: pointer;
  border: none;
  outline: none;
  animation: ${gradientGlow} 5s ease infinite;
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: #272727;
    border-radius: 9px;
    transition: 0.5s;
  }

  &:hover::before {
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default GradientButton;
