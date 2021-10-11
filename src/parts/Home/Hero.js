import React from "react";
import styled from "styled-components";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import images from "../../imgs";

const Hero = () => {
  return (
    <>
      <HeroStyles>
        <div className="hero_group">
          <div className="inner_group">
            <h1>CNN News</h1>
            <p>24 🔥</p>
          </div>

          <div>
            <BsThreeDots id="icon" />
          </div>
        </div>
        <h3>Business incentives from minister of tech</h3>
        <div className="hero_group">
          <div className="inner_group">
            <span>finance</span>
            <span>technology</span>
          </div>
          <div className="inner_group">
            <BsHeart />
            <p>234</p>
          </div>
        </div>
      </HeroStyles>
    </>
  );
};

export default Hero;

const HeroStyles = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 4rem 3rem;
  background: url(${images.hero_bg});
  background: linear-gradient(rgba(29, 38, 113, 0.3), rgba(195, 55, 100, 0.4)),
    url(${images.hero_bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .hero_group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  svg {
      cursor: pointer;
  }

  .inner_group {
    display: flex;
    align-items: center;

    p, svg {
      font-size: 1.8rem;
      font-weight: 600;
    }

    span {
      margin-right: 1rem;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 25px;
      margin-top: 2rem;
    }

    svg {
        margin-right: 1rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-right: 2rem;
    font-weight: 600;
  }

  #icon {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.3rem;
    font-weight: 900;
  }
`;
