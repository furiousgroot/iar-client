import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// image import 
import sliderImg1 from "/images/SICA-21.jpg";
import sliderImg2 from "/images/SICA-24.jpg";
import sliderImg3 from "/images/SICA-25.jpg";

const Carousel = () => {
  const sliderImages = [
    { id: "01", img: sliderImg1 },
    { id: "02", img: sliderImg2 },
    { id: "03", img: sliderImg3 },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper md:w-[60vw]"
      >
        {sliderImages.map((sliderImage) => (
          <SwiperSlide key={sliderImage.id}>
            <img src={sliderImage.img} alt="slider image" className="w-full md:border-2 p-3 h-[30vh] md:h-[70vh]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
