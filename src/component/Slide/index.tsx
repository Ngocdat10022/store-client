import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slide = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <img alt="slide-1" src="/Images/slide_index_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img alt="slide-1" src="/Images/slide_index_2.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
