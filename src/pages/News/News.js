import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import NewsBody from "../../parts/News/NewsBody";

const News = () => {
  return (
    <>
      <NewsStyles>
        <Nav />
        <NewsBody />
      </NewsStyles>
    </>
  );
};

export default News;
const NewsStyles = styled.div`
  width: 100%;
  overflow: hidden;

`;
