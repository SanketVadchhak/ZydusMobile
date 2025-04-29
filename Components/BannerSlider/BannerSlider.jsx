import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../Styles/BannerSlider.css";

// Import images
import Banner1 from "../../assets/banner-one.webp";
import Banner2 from "../../assets/banner-two.webp";
import Banner3 from "../../assets/banner-three.webp";
import Banner4 from "../../assets/banner-four.webp";

const BannerSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="banner-swiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="Banner One" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner Two" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner Three" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt="Banner Four" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
