import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard } from "swiper";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import slide1 from "../../assets/Banners/slide3.png";
SwiperCore.use([Autoplay, Keyboard]);

const swiperSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      
      style={{ zIndex: "-999" }}
      onSlideChange={() => console.log("slide change")}
      autoplay={true}
      keyboard={true}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SlidesWrapper>
          <EachSlide src={slide1} />
        </SlidesWrapper>
      </SwiperSlide>

      {/* second one */}
      <SwiperSlide>
        <SlidesWrapper>
          <EachSlide src={slide1} />
        </SlidesWrapper>
      </SwiperSlide>
      {/* third one */}
      <SwiperSlide>
        <SlidesWrapper>
          <EachSlide src={slide1} />
        </SlidesWrapper>
      </SwiperSlide>
    </Swiper>
  );
};

const SlidesWrapper = styled.div`
  padding-top: 4rem;
`;

const EachSlide = styled.img`
  width: 100%;
  height: 100%;
`;

export default swiperSlider;
