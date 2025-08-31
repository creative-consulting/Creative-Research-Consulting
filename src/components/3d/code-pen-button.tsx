import React from "react";
import styled, { keyframes } from "styled-components";

interface CodePenButtonProps {
  children?: React.ReactNode;
}

const CodePenButton: React.FC<CodePenButtonProps> = ({
  children = "Start Coding",
}) => {
  return (
    <StyledButton className="codepen-button">
      <span>{children}</span>
    </StyledButton>
  );
};

// Keyframes for the gradient animation
const gradientSlide = keyframes`
  to {
    transform: translateX(-25%);
  }
`;

const StyledButton = styled.a`
  display: block;
  cursor: pointer;
  color: white;
  // margin: 0 auto;
  position: relative;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  overflow: hidden;
  padding: 3px;
  isolation: isolate;
  background: #000;
  border: none;
  outline: none;
  max-width: fit-content;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    background: linear-gradient(
      115deg,
      #4fcf70,
      #fad648,
      #a767e5,
      #12bcfe,
      #44ce7b
    );
    background-size: 25% 100%;
    animation: ${gradientSlide} 0.75s linear infinite;
    animation-play-state: paused;
    transform: translate(-5%, 0%);
    transition: transform 0.25s ease-out;
    z-index: -1;
  }

  &:hover::before {
    animation-play-state: running;
    transition-duration: 0.75s;
    transform: translate(0%, 0%);
  }

  span {
    position: relative;
    display: block;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    background: #000;
    border-radius: 3px;
    height: 100%;
  }

  &:focus {
    outline: 2px solid #12bcfe;
    outline-offset: 2px;
  }
`;

export default CodePenButton;
