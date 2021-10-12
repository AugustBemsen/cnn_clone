import moment from "moment";
import React from "react";
import styled from "styled-components";

const Authors = ({ author, date, brand }) => {
  return (
    <>
      <AuthorsStyles>
        <span>By</span>
        <span>{author},</span>
        <span>{brand}</span>
      </AuthorsStyles>
      <AuthorsStyles>
        <span>Updated</span>
        <span>{moment(date).format("LLLL")}</span>
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

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-top: 1rem;
    span {
      margin-right: 0.4rem;
      font-size: 0.89rem;
    }
  }
`;
