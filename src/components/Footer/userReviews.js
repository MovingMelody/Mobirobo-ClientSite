import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
export default function userReviews() {
  return (
    <div>
      <ReviewsWrapper>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          style={{ zIndex: "-999" }}
          onSlideChange={() => console.log("slide change")}
          autoplay={true}
          keyboard={true}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <EachUserReview>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                laudantium rem vitae eius. Ratione ea dolores officiis veritatis
                exercitationem!
              </p>
              <i>Rajesh C</i>
            </EachUserReview>
          </SwiperSlide>
          <SwiperSlide>
            <EachUserReview>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a
                laudantium rem vitae eius. Ratione ea dolores officiis veritatis
                exercitationem!
              </p>
              <i>Rajesh C</i>
            </EachUserReview>
          </SwiperSlide>
        </Swiper>
      </ReviewsWrapper>
    </div>
  );
}

const ReviewsWrapper = styled.div`
  /* padding: 15px 15px; */
  /* display: none; */
  width:90%;
  margin:0 auto;
  
`;

const EachUserReview = styled.div`
  font-family: "poppins", sans-serif;
  -webkit-box-shadow: 8px 12px 24px 5px rgba(204, 214, 246, 0.64);
  box-shadow: 8px 12px 24px -5px rgba(204, 214, 246, 0.64);
  padding: 15px 15px;
  overflow-wrap:break-word;
  background: #fff;
  width:80%;
  margin:0 auto;
`;
