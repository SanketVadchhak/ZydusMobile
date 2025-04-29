import React from "react";
import "../../Styles/SuccessStories.css";
import Avatar from "../../assets/shraddha.webp";
import Avatar1 from "../../assets/puneet.webp";
import PodcastImage from "../../assets/shraddha-podcast.webp";
import PodcastImage1 from "../../assets/puneet-podcast.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../Styles/HealthTools.css";

const SuccessStories = () => {
  return (
    <div className="success-stories">
      <div className="success-stories-info">
        <h2>
          <span>Beating CKD</span>: Stories of Hope & Resilience
        </h2>
        <p>
          Your journey doesn't have to be alone. Hear from those who've walked
          the path, faced CKD, and come out stronger
        </p>
      </div>
      <div className="success-stories-cards">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop={true}
        >
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="success-testimonial-header">
                <img
                  src={Avatar}
                  alt="Shraddha Patel"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Shraddha Patel</div>
                  <div className="testimonial-role">Home maker</div>
                </div>
              </div>

              <p className="testimonial-quote">
                I never imagined my life would change so drastically, but CKD
                taught me resilience. Every choice I make now is for a healthier
                tomorrow
              </p>

              <div className="testimonial-media">
                <img
                  src={PodcastImage}
                  alt="Podcast Interview"
                  className="media-image"
                />
                <button className="play-button">▶</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="success-testimonial-header">
                <img
                  src={Avatar1}
                  alt="Shraddha Patel"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Puneet Kataria</div>
                  <div className="testimonial-role">Investment Planner</div>
                </div>
              </div>

              <p className="testimonial-quote">
                The hardest part was accepting my diagnosis. The best part was
                realizing I could still take control of my health
              </p>

              <div className="testimonial-media">
                <img
                  src={PodcastImage1}
                  alt="Podcast Interview"
                  className="media-image"
                />
                <button className="play-button">▶</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-card">
              <div className="success-testimonial-header">
                <img
                  src={Avatar}
                  alt="Shraddha Patel"
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-name">Shraddha Patel</div>
                  <div className="testimonial-role">Home maker</div>
                </div>
              </div>

              <p className="testimonial-quote">
                I never imagined my life would change so drastically, but CKD
                taught me resilience. Every choice I make now is for a healthier
                tomorrow
              </p>

              <div className="testimonial-media">
                <img
                  src={PodcastImage}
                  alt="Podcast Interview"
                  className="media-image"
                />
                <button className="play-button">▶</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SuccessStories;
