import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import Authors from "./Authors";
import NewsContent from "./MainContent";

const NewsBody = () => {
  const [results, setResults] = useState([]);

  const getSavedHandler = () => {
    const getSaved = JSON.parse(localStorage.getItem("savedNews")) || [];
    setResults(getSaved);
  };
  useEffect(() => {
    getSavedHandler();

  }, []);

  return (
    <>
      {!results.length ? (
        <NewsBodyStyles>
          <Title children={results?.title} />
          <Authors
            brand={results?.url}
            author={results?.channel}
            date={results.date}
          />
          <NewsContent
            description={results.description}
            content={results.content}
            image={results.image}
          />
        </NewsBodyStyles>
      ) : null}
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
