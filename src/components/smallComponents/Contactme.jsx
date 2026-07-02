import React from "react";
import styled from "styled-components";
import { ArrowUpRight } from "lucide-react";

const Button = () => {
  return (
    <StyledWrapper>
      <a href="#contact" className="button">
        <span className="btn-content">
          CONTACT
          <ArrowUpRight size={20} />
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 220px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    border: 2px solid #171717;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  .btn-content {
    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    gap: 10px;

    font-weight: 700;
    letter-spacing: 3px;
    color: #171717;
    transition: color 0.4s ease;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #171717;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.45s ease;
    z-index: 1;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button:hover .btn-content {
    color: #E8E8E3;
  }

  .button:hover svg {
    transform: translate(4px, -4px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 640px) {
    .button {
      width: 180px;
      height: 52px;
    }

    .btn-content {
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
`;

export default Button;