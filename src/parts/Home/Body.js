import React from "react";
import styled from "styled-components";
import NewsCard from "../../components/NewsCard/NewsCard";
import Title from "../../components/Title/Title";

const HomeBody = ({ allNews }) => {
  return (
    <>
      <HomeBodyStyles>
        <Title children="Trending news" />
        <div className="news_group">
          {allNews?.map((news, i) => (
            <NewsCard news={news} key={i + 2} />
          ))}
        </div>
        <div className="home_cta">
          <button>View All</button>
        </div>
      </HomeBodyStyles>
    </>
  );
};

export default HomeBody;
const HomeBodyStyles = styled.div`
  margin: 2rem 0;
  padding: 2.5rem;
  @media screen and (max-width: 789px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    padding-top: 1rem;
  }
  .news_group {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;
    column-count: 2;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 48% 48%;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }
  }

  .home_cta {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 789px) {
      margin-top: 3rem;
    }

    button {
      width: 250px;
      padding: 0.9rem 1.4rem;
      color: var(--blue-color);
      background: none;
      border: 1.5px solid var(--blue-color);
      border-radius: 25px;
      transition: all 0.3s ease-in-out;
      font-size: 1.1rem;
      font-weight: bold;

      &:hover {
        background: var(--blue-color);
        color: var(--white-color);
      }
    }
  }
`;
