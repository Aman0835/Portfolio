import React from "react";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button type1">
        <span className="btn-txt">CONTACT</span>
        <ArrowUpRight size={20} className="inline-block ml-2" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 50px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #171717;
    transition: all 0.5s ease-in-out;
  }

  .btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 4px;
    position: relative; /* This is crucial for keeping text on top of the :after element */
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%; /* Make the pseudo-element the same height as the button */
    width: 100%; /* Make the pseudo-element the same width as the button */
    background-color: #333;
    border-radius: 30px;
    transition: transform 0.5s ease-in-out;
    z-index: -1;
    transform: scaleX(0); /* Start with a scale of 0 on the X-axis */
    transform-origin: left; /* Make the transition start from the left */
  }

  .button:hover {
    box-shadow: 1px 1px 200px #171717;
    color: #171717;
    border: 2px solid #171717; /* <-- Keep border black on hover */
  }

  .type1:hover::after {
    transform: scaleX(1); /* Expand to full width on hover */
  }
`;

export default Button;
