import React from "react";
import styled from "styled-components";

const GooeyButton: React.FC<{ children?: React.ReactNode }> = ({
  children = "Hover me",
}) => {
  return (
    <>
      <StyledButton className="c-button c-button--gooey">
        {children}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </StyledButton>

      {/* SVG filter for the gooey effect - hidden but necessary for the effect */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: 0, width: 0 }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
};

const StyledButton = styled.button`
  &.c-button {
    color: #000;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    padding: 0.9em 1.6em;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    background: transparent;
    border: none;
    outline: none;
  }

  &.c-button--gooey {
    color: #06c8d9;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 4px solid #06c8d9;
    border-radius: 0;
    position: relative;
    transition: all 700ms ease;

    .c-button__blobs {
      height: 100%;
      filter: url("#goo");
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      bottom: -3px;
      right: -1px;
      z-index: -1;

      div {
        background-color: #06c8d9;
        width: 34%;
        height: 100%;
        border-radius: 100%;
        position: absolute;
        transform: scale(1.4) translateY(125%) translateZ(0);
        transition: all 700ms ease;
      }

      div:nth-child(1) {
        left: -5%;
      }

      div:nth-child(2) {
        left: 30%;
        transition-delay: 60ms;
      }

      div:nth-child(3) {
        left: 66%;
        transition-delay: 25ms;
      }
    }

    &:hover {
      color: #fff;
    }

    &:hover .c-button__blobs div {
      transform: scale(1.4) translateY(0) translateZ(0);
    }
  }
`;

export default GooeyButton;
