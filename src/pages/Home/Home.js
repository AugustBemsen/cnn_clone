import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import HomeBody from "../../parts/Home/Body";
import Hero from "../../parts/Home/Hero";

const Home = () => {
  return (
    <>
      <HomeStyles>
        <Nav />
        <Hero />
        <HomeBody />
      </HomeStyles>
    </>
  );
};

export default Home;
const HomeStyles = styled.div`
  width: 100%;
  overflow: hidden;
`;
