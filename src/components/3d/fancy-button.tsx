import { cn } from "@/lib/utils/cn";
import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface ButtonComponentProps {
  textOne: string;
  textTwo: string;
  className?: string;
  onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  className,
  onClick,
  textOne,
  textTwo,
}: ButtonComponentProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Add any necessary JavaScript interactions here
  }, []);

  return (
    <StyledButton
      ref={buttonRef}
      onClick={onClick}
      className={cn("button", className)}
    >
      <div className="bg"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 342 208"
        height="70"
        width="160"
        className="splash"
      >
        {/* All the path elements from the original SVG */}
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.3"
          d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.3"
          d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.3"
          d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.3"
          d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.3"
          d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.3"
          d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"
        ></path>
      </svg>

      <div className="wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 221 42"
          height="42"
          width="221"
          className="path"
        >
          <path
            strokeLinecap="round"
            strokeWidth="3"
            d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
          ></path>
        </svg>

        <div className="outline"></div>
        <div className="content text-[16px] sm:textl-[20px]">
          <span className="char state-1">
            {textOne.split("").map((letter, index) => (
              <span
                key={index}
                data-label={letter}
                style={{ "--i": index + 1 } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>

          <div className="icon">
            <div></div>
          </div>

          <span className="char state-2">
            {textTwo.split("").map((letter, index) => (
              <span
                key={index}
                data-label={letter}
                style={{ "--i": index + 1 } as React.CSSProperties}
              >
                {letter}
              </span>
            ))}
          </span>
        </div>
      </div>
    </StyledButton>
  );
};

// Keyframes
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const charAppear = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
    filter: blur(20px);
  }
  20% {
    transform: translateY(70%);
    opacity: 1;
  }
  50% {
    transform: translateY(-15%);
    opacity: 1;
    filter: blur(0);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const charDisappear = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-70%);
    opacity: 0;
    filter: blur(3px);
  }
`;

const arrow = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    transform: translateX(60px);
    opacity: 0;
  }
  51% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-128px);
    opacity: 1;
  }
`;

const swingArrow = keyframes`
  50% {
    transform: translateX(5px) scale(0.9);
  }
`;

const rotateArrowLine = keyframes`
  50% {
    transform: rotate(30deg);
  }
  80% {
    transform: rotate(55deg);
  }
`;

const rotateArrowLine2 = keyframes`
  50% {
    transform: rotate(330deg);
  }
  80% {
    transform: rotate(300deg);
  }
`;

const resetArrow = keyframes`
  0% {
    transform: translateX(-128px);
  }
  100% {
    transform: translateX(0);
  }
`;

const pathAnimation = keyframes`
  from {
    stroke: white;
  }
  to {
    stroke-dashoffset: -480;
    stroke: #f9c6fe;
  }
`;

const splashAnimation = keyframes`
  to {
    stroke-dasharray: 2 60;
    stroke-dashoffset: -60;
  }
`;

// Styled components
const StyledButton = styled.button`
  --white: #ffe7ff;
  --purple-100: #f4b1fd;
  --purple-200: #d190ff;
  --purple-300: #c389f2;
  --purple-400: #8e26e2;
  --purple-500: #5e2b83;
  --radius: 18px;

  border-radius: var(--radius);
  outline: none;
  cursor: pointer;
  font-size: 23px;
  font-family: Arial;
  background: transparent;
  letter-spacing: -1px;
  border: 0;
  position: relative;
  width: 220px;
  height: 80px;
  transform: rotate(353deg) skewX(4deg);

  .bg {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    filter: blur(1px);

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: calc(var(--radius) * 1.1);
      background: var(--purple-500);
    }

    &::before {
      filter: blur(5px);
      transition: all 0.3s ease;
      box-shadow: -7px 6px 0 0 rgb(115 75 155 / 40%),
        -14px 12px 0 0 rgb(115 75 155 / 30%),
        -21px 18px 4px 0 rgb(115 75 155 / 25%),
        -28px 24px 8px 0 rgb(115 75 155 / 15%),
        -35px 30px 12px 0 rgb(115 75 155 / 12%),
        -42px 36px 16px 0 rgb(115 75 155 / 8%),
        -56px 42px 20px 0 rgb(115 75 155 / 5%);
    }
  }

  .wrap {
    border-radius: inherit;
    overflow: hidden;
    height: 100%;
    transform: translate(6px, -6px);
    padding: 3px;
    background: linear-gradient(
      to bottom,
      var(--purple-100) 0%,
      var(--purple-400) 100%
    );
    position: relative;
    transition: all 0.3s ease;
  }

  .outline {
    position: absolute;
    overflow: hidden;
    inset: 0;
    opacity: 0;
    outline: none;
    border-radius: inherit;
    transition: all 0.4s ease;

    &::before {
      content: "";
      position: absolute;
      inset: 2px;
      width: 120px;
      height: 300px;
      margin: auto;
      background: linear-gradient(
        to right,
        transparent 0%,
        white 50%,
        transparent 100%
      );
      animation: ${spin} 3s linear infinite;
      animation-play-state: paused;
    }
  }

  .content {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    height: 100%;
    gap: 16px;
    border-radius: calc(var(--radius) * 0.85);
    font-weight: 600;
    transition: all 0.3s ease;
    background: linear-gradient(
      to bottom,
      var(--purple-300) 0%,
      var(--purple-400) 100%
    );
    box-shadow: inset -2px 12px 11px -5px var(--purple-200),
      inset 1px -3px 11px 0px rgb(0 0 0 / 35%);

    &::before {
      content: "";
      inset: 0;
      position: absolute;
      z-index: 10;
      width: 80%;
      top: 45%;
      bottom: 35%;
      opacity: 0.7;
      margin: auto;
      background: linear-gradient(to bottom, transparent, var(--purple-400));
      filter: brightness(1.3) blur(5px);
    }
  }

  .char {
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      color: transparent;
      position: relative;

      &:nth-child(5) {
        margin-left: 5px;
      }
    }

    &.state-1 {
      span:nth-child(5) {
        margin-right: -3px;
      }

      span {
        animation: ${charAppear} 1.2s ease backwards calc(var(--i) * 0.03s);
      }

      span::before,
      span::after {
        content: attr(data-label);
        position: absolute;
        color: var(--white);
        text-shadow: -1px 1px 2px var(--purple-500);
        left: 0;
      }

      span::before {
        opacity: 0;
        transform: translateY(-100%);
      }
    }

    &.state-2 {
      position: absolute;
      left: 80px;

      span::after {
        opacity: 1;
      }
    }
  }

  .icon {
    animation: ${resetArrow} 0.8s cubic-bezier(0.7, -0.5, 0.3, 1.2) forwards;
    z-index: 10;

    div,
    div::before,
    div::after {
      height: 3px;
      border-radius: 1px;
      background-color: var(--white);
    }

    div {
      position: relative;
      width: 24px;
      box-shadow: -2px 2px 5px var(--purple-400);
      transform: scale(0.9);
      background: linear-gradient(to bottom, var(--white), var(--purple-100));
      animation: ${swingArrow} 1s ease-in-out infinite;
      animation-play-state: paused;

      &::before,
      &::after {
        content: "";
        position: absolute;
        right: 0;
        transform-origin: center right;
        width: 14px;
        border-radius: 15px;
        transition: all 0.3s ease;
      }

      &::before {
        transform: rotate(44deg);
        top: 1px;
        box-shadow: 1px -2px 3px -1px var(--purple-400);
        animation: ${rotateArrowLine} 1s linear infinite;
        animation-play-state: paused;
      }

      &::after {
        bottom: 1px;
        transform: rotate(316deg);
        box-shadow: -2px 2px 3px 0 var(--purple-400);
        background: linear-gradient(200deg, var(--white), var(--purple-100));
        animation: ${rotateArrowLine2} 1s linear infinite;
        animation-play-state: paused;
      }
    }
  }

  .path {
    position: absolute;
    z-index: 12;
    bottom: 0;
    left: 0;
    right: 0;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    pointer-events: none;
  }

  .splash {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    stroke-dasharray: 60 60;
    stroke-dashoffset: 60;
    transform: translate(-17%, -31%);
    stroke: var(--purple-300);
  }

  /* Hover states */
  &:hover {
    .char.state-1 {
      span::before {
        animation: ${charAppear} 0.7s ease calc(var(--i) * 0.03s);
      }

      span::after {
        opacity: 1;
        animation: ${charDisappear} 0.7s ease calc(var(--i) * 0.03s);
      }
    }

    .wrap {
      transform: translate(8px, -8px);
    }

    .outline {
      opacity: 1;
    }

    .outline::before,
    .icon div::before,
    .icon div::after,
    .icon div {
      animation-play-state: running;
    }
  }

  &:active {
    .bg::before {
      filter: blur(5px);
      opacity: 0.7;
      box-shadow: -7px 6px 0 0 rgb(115 75 155 / 40%),
        -14px 12px 0 0 rgb(115 75 155 / 25%),
        -21px 18px 4px 0 rgb(115 75 155 / 15%);
    }

    .content {
      box-shadow: inset -1px 12px 8px -5px rgba(71, 0, 137, 0.4),
        inset 0px -3px 8px 0px var(--purple-200);
    }

    .outline {
      opacity: 0;
    }

    .wrap {
      transform: translate(3px, -3px);
    }

    .splash {
      animation: ${splashAnimation} 0.8s cubic-bezier(0.3, 0, 0, 1) forwards
        0.05s;
    }
  }

  &:focus {
    .path {
      animation: ${pathAnimation} 1.6s ease forwards 0.2s;
    }

    .icon {
      animation: ${arrow} 1s cubic-bezier(0.7, -0.5, 0.3, 1.5) forwards;
    }

    .char.state-1 span {
      animation: ${charDisappear} 0.5s ease forwards calc(var(--i) * 0.03s);
    }

    .char.state-2 span::after {
      animation: ${charAppear} 1s ease backwards calc(var(--i) * 0.03s);
    }
  }
`;

export default ButtonComponent;
