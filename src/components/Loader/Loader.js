import React from "react";
import Styled, { keyframes } from "styled-components";
import images from "../../imgs";

const Loader = () => {
  return (
    <LoaderStyle>
      <div className="loader">
        <img src={images.cnn_logo} alt="cnn" />
      </div>
    </LoaderStyle>
  );
};

export default Loader;

const loaderAnimation = keyframes`
    0% {
        transform: scale(.6);
    }
    100% {
        transform: scale(1);
    }
`;

const LoaderStyle = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: var(--blue-color);
    display: flex;
    align-items: center;
    justify-content: center;

    .loader {
        animation-name: ${loaderAnimation};
        animation-duration: .7s;
        animation-iteration-count: infinite;
    }
`;
