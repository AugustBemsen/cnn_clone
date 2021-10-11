import React from "react";
import styled from "styled-components";

const Authors = () => {
  return (
    <>
      <AuthorsStyles>
        <span>By</span>
        <span>Monica Serrone,</span>
        <span>Monica Serrone,</span>
        <span>Monica Serrone,</span>
        <span>Monica Serrone,</span>
        <span>Monica Serrone,</span>
        <span>Monica Serrone,</span>
        <span>Monica Serrone,</span>
        <span>And</span>
        <span>Monica Serrone,</span>
        <span>CNN</span>
      </AuthorsStyles>
      <AuthorsStyles>
        <span>Updated</span>
        <span>01:34 PM EDT,</span>
        <span>Sat August 28, 2021</span>
      </AuthorsStyles>
    </>
  );
};

export default Authors;
const AuthorsStyles = styled.p`
  margin-top: 1.5rem;
  width: 80%;

  span {
    color: var(--blue-color);
    margin-right: 0.8rem;
    cursor: pointer;
  }

`;
