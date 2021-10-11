import React from "react";
import styled from "styled-components";
import images from "../../imgs";

const NewsContent = () => {
  return (
    <>
      <NewsContentStyles>
        <div className="new_img">
          <img src={images.hero_bg} alt="news logo" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quae iste minima eligendi hic odio et. Hic modi eveniet amet
            architecto quibusdam pariatur quod veniam quis, aspernatur ipsa
            eaque, sequi eius consectetur voluptatem totam explicabo doloremque
            expedita, culpa nihil optio obcaecati? Minima dolor, maxime ex
            inventore quibusdam commodi blanditiis amet optio voluptatibus
            repellat eligendi perspiciatis minus sequi soluta saepe laudantium
            dignissimos! Eligendi, impedit sequi. Nam, a necessitatibus! Dolor,
            magnam suscipit?
          </p>
        </div>
      </NewsContentStyles>
    </>
  );
};

export default NewsContent;
const NewsContentStyles = styled.div`
  margin-top: 1.8rem;

  .new_img {
    width: 100%;
    height: 500px;
    overflow: hidden;

    @media screen and (max-width: 789px) {
      height: auto;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  p {
    margin-top: 2rem;
    @media screen and (max-width: 789px) {
      margin-top: 1rem;
    }
  }
`;
