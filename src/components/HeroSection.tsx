import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Hero1 from "./../../public/hero (1).webp";
import Hero2 from "./../../public/hero (2).webp";
import Hero3 from "./../../public/hero (3).webp";
import Hero4 from "./../../public/hero (4).webp";
import Hero5 from "./../../public/hero (5).webp";

const HeroSection = () => {
  return (
    <div className=" relative">
      {/* <div className="absolute top-0 bottom-0 z-20 left-0 right-0 bg-black/50  text-white  flex flex-col justify-center items-center gap-3 px-1 ">
        <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase Akira">
          Swami Vivekananda
        </h2>
        <h3 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-semibold uppercase Akira text-center">
          Institution and Yoga Foundation
        </h3>
      </div> */}
      <Carousel
        className=" "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[calc(60vh)] sm:h-[calc(60vh)] md:h-[calc(70vh)] lg:h-[calc(85vh)] ">
          <CarouselItem className=" h-full w-full ">
            <div className=" h-full w-full ">
              <img src={Hero1} alt="" className=" h-full w-full object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" h-full w-full ">
              <img src={Hero2} alt="" className=" h-full w-full object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" h-full w-full ">
              <img src={Hero3} alt="" className=" h-full w-full object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" h-full w-full ">
              <img src={Hero4} alt="" className=" h-full w-full object-cover" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className=" h-full w-full ">
              <img src={Hero5} alt="" className=" h-full w-full object-cover" />
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default HeroSection;
