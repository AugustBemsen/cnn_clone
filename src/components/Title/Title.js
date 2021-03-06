import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <>
      <TitleStyles>{children}</TitleStyles>
    </>
  );
};

export default Title;
const TitleStyles = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
   }
`;
