import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../Styles/HealthTools.css";
import Marketing from "../../assets/food-scanner.webp";
import Marketing1 from "../../assets/health-score.webp";
import Marketing2 from "../../assets/diagnostics.webp";

const HealthTools = () => {
  return (
    <section className="health-tools">
      <div className="health-tools-info">
        <h2>
          <span>GoodFlip</span>: Your Partner in Kidney Health
        </h2>
        <p>
          Managing CKD starts with the right tools. GoodFlip helps you assess,
          track, and take&nbsp; action—so you stay in control of your kidney
          health
        </p>
      </div>
      <div className="health-tools-cards">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={1.2}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
        >
          <SwiperSlide>
            <div className="food-scanner">
              <p>Food Scanner</p>
              <h3>Is Your Meal Good for your Kidney?</h3>
              <p>
                Scan your food and enter a few details to analyze your meal for
                better kidney care
              </p>
              <img src={Marketing} alt="" />
              <button>Scan Now →</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="health-score">
              <p>Kidney Health Score</p>
              <h3>Decode Your Kidney Health!</h3>
              <p>
                Answer a few quick questions to get your{" "}
                <strong>Kidney Profile Score</strong>{" "}
              </p>
              <img src={Marketing1} alt="" />
              <button>Get Your Score →</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diagnostics">
              <p>Diagnostics</p>
              <h3>Know Your Kidney Vitals</h3>
              <p>
                Identify key vitals and take the right steps toward better care
              </p>
              <img src={Marketing2} alt="" />
              <button>Book Diagnostics →</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HealthTools;
