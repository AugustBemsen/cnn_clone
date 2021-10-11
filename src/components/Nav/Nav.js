import React from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import images from "../../imgs";

const Nav = () => {
  return (
    <>
      <NavStyles>
        <div>
          <img src={images.cnn_logo} alt="cnn" />
        </div>
        <div id="nav_cta">
          <button>
            Live Tv <span></span>
          </button>
          <MdMenu />
        </div>
      </NavStyles>
    </>
  );
};

export default Nav;
const NavStyles = styled.div`
  width: 100vw;
  height: 10vh;
  background: var(--blue-color);
  display: flex;
  color: var(--white-color);
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 1rem 3rem;
  padding-left: 0;

  img {
    display: block;
    position: absolute;
    top: 0;
    width: 100px;
  }

  button {
    width: 130px;
    margin-right: 2rem;
    background: none;
    border: 1.2px solid var(--white-color);
    color: var(--white-color);
    padding: 0.4rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;

    span {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: var(--red-color);
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  svg {
    font-size: 2.5rem;
    cursor: pointer;
  }

  #nav_cta {
    display: flex;
    align-items: center;
  }
`;
