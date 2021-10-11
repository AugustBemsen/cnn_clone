import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import Authors from "./Authors";
import NewsContent from "./MainContent";

const NewsBody = () => {
  return (
    <>
      <NewsBodyStyles>
        <Title children="Business incentives from minister of tech" />
        <Authors />
        <NewsContent />
      </NewsBodyStyles>
    </>
  );
};

export default NewsBody;
const NewsBodyStyles = styled.div`
  margin: 4.5rem 0 3rem;
  padding: 0 3rem;

  @media screen and (max-width: 500px) {
      margin-top: 3rem;
    padding: 0 1.2rem;
  }
`;
