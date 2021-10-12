import React from "react";
import styled from "styled-components";

const NewsContent = ({ image, content, description }) => {
  return (
    <>
      <NewsContentStyles>
        <div className="new_img">
          <img src={image} alt="news logo" />
        </div>
        <div>
          <p>{description}</p>
          <p>{content}</p>
        </div>
      </NewsContentStyles>
    </>
  );
};

export default NewsContent;
const NewsContentStyles = styled.div`
  margin-top: 1.8rem;

  .new_img {
    width: 100%;
    height: 500px;
    overflow: hidden;

    @media screen and (max-width: 789px) {
      height: auto;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  p {
    margin-top: 2rem;
    @media screen and (max-width: 789px) {
      margin-top: 1rem;
    }
  }
`;
