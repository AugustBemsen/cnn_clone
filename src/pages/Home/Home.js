import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import Hero from "../../parts/Home/Hero";

const Home = () => {
  return (
    <>
      <HomeStyles>
        <Nav />
        <Hero />
      </HomeStyles>
    </>
  );
};

export default Home;
const HomeStyles = styled.div`
  width: 100%;
`;
