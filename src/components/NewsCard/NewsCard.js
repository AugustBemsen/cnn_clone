import React from "react";
import { BsHeart, BsThreeDots } from "react-icons/bs";
import { useHistory } from "react-router";
import styled from "styled-components";

const NewsCard = ({ news }) => {
  const history = useHistory();

  //   shorten string
  const truncate = (str) =>
    str.length > 38 ? str.substring(0, 36) + "..." : str;

  // handle news view
  const saveHandler = () => {
    const data = {
      image: news?.image,
      title: news?.title,
      channel: news?.source?.name,
      url: news?.source?.url,
      date: news.publishedAt,
      description: news.description,
      content: news.content,
    };
    localStorage.setItem("savedNews", JSON.stringify(data));
  };

  const ctaHandler = (name) => {
    saveHandler();
    history.push(`/news/${name}`);
  };

  return (
    <>
      <NewsCardStyles>
        <div className="card_group">
          <div className="inner_card_group">
            <h2>
              {news.source.name}
              🔥
            </h2>
          </div>

          <div className="inner_card_group">
            <div className="inner_card_group">
              <BsHeart />
              <p>234</p>
            </div>
            <BsThreeDots id="icon" />
          </div>
        </div>
        <div className="card_group_1" onClick={() => ctaHandler(news.title)}>
          <div className="text_div">
            <h3>{truncate(news.title)}</h3>
            <div className="inner_card_group">
              <span className="tags">finance</span>
              <span className="tags">technology</span>
            </div>
            <div className="inner_card_group">
              {/* <span className="cate">PSTK,</span>
              <span className="cate">FLTW,</span>
              <span className="cate">2 more,</span> */}
            </div>
          </div>
          <div className="image_div">
            <img src={news.image} alt="info" />
          </div>
        </div>
      </NewsCardStyles>
    </>
  );
};

export default NewsCard;
const NewsCardStyles = styled.div`
  width: 100%;
  max-height: 252px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 3px 5px 60px rgba(0, 0, 0, 0.05);
  }

  svg {
    cursor: pointer;
  }
  .card_group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  h2,
  h3 {
    font-size: 1.2rem;

    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }

  .inner_card_group {
    display: flex;
    align-items: center;

    p,
    svg {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 1rem;
      color: var(--grey-color);
    }

    .tags {
      margin-right: 1rem;
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
      background: rgba(255, 255, 255, 0.99);
      border-radius: 15px;
      cursor: pointer;
      margin-top: 1rem;
    }

    .cate {
      font-weight: 600;
      margin-right: 1rem;
      margin-top: 1.5rem;
      cursor: pointer;
      color: var(--grey-color);

      @media screen and (max-width: 789px) {
        margin-right: 0.8rem;
        margin-top: 0.8rem;
        font-size: 0.9rem;
      }
    }

    .cate:last-child {
      text-decoration: underline;
    }
  }

  .card_group_1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
  }

  .text_div {
    width: 60%;
  }

  .image_div {
    width: 33%;
    height: 140px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
`;
