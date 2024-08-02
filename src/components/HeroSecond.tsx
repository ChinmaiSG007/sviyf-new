import { Swiper, SwiperSlide } from "swiper/react";
import Hero1 from "./../../public/hero (1).jpg";
import Hero2 from "./../../public/hero (2).jpg";
import Hero3 from "./../../public/hero (3).jpg";
import Hero4 from "./../../public/hero (4).jpg";
import Hero5 from "./../../public/hero (5).jpg";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSecond = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 z-20 left-0 right-0 bg-black/50  text-white  flex flex-col justify-center items-center gap-3  ">
        <p className="text-4xl md:text-6xl font-black uppercase">
          Swami Vivekananda
        </p>
        <p className="text-3xl md:text-4xl font-bold uppercase">
          Institution and Yoga Foundation
        </p>
      </div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src={Hero1} alt="" className=" h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero2} alt="" className=" h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero3} alt="" className=" h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero4} alt="" className=" h-full w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero5} alt="" className=" h-full w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSecond;
