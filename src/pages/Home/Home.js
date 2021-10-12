import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import Nav from "../../components/Nav/Nav";
import HomeBody from "../../parts/Home/Body";
import Hero from "../../parts/Home/Hero";

const Home = () => {
  const key = process.env.REACT_APP_API_KEY;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=${key}`
      )
      .then((res) => {
        setNews(res.data?.articles);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [key]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <HomeStyles>
          <Nav />
          <Hero news={news[0]} />
          <HomeBody allNews={news} />
        </HomeStyles>
      )}
    </>
  );
};

export default Home;
const HomeStyles = styled.div`
  width: 100%;
  overflow: hidden;
`;
