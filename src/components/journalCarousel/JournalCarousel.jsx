import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// image import
import sliderImg1 from "/images/hero1.jpg";
import sliderImg2 from "/images/hero2.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const JournalCarousel = () => {
  const slider = [
    {
      id: "01",
      img: sliderImg1,
      text: "Join Us",
      title: "Membership",
      details:
        "Benefits includes waivers against publication fees, fast track publication Benefits includes waivers against publication fees, fast track publication Benefits includes waivers against publication fees, fast track publication Benefits includes waivers against publication fees, fast track publication",
      button_text: "apply for membership",
    },
    {
      id: "02",
      img: sliderImg2,
      text: "Welcome to",
      title: "IAR Publishers",
      details:
        "Exploring scholars to success, devoting it works in education and research",
      button_text: "publish with us",
    },
  ];
  return (
    <>
      <section className="overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper w-[100vw] md:h-[45vh]"
        >
          {slider.map((info) => (
            <SwiperSlide key={info.id}>
              <div className="relative">
                <img src={info.img} alt="img" className="h-[25vh] md:h-auto" />
                <div className="absolute top-0 bg-[#00000081] w-[100vw] h-[45vh] text-white">
                  <div className="px-3 py-1 md:py-5 md:px-20">
                    <p>{info.text}</p>
                    <h2 className="text-5xl font-bold tracking-wide md:py-4 py-2">
                      {info.title}
                    </h2>
                    <h2>{info.details.slice(0, 100)}...</h2>
                    <div className="mt-3 md:mt-10">
                      <Link to={"/"}>
                        <div className="flex items-center gap-2 py-2 px-10 w-[75vw] md:w-[25vw] text-lg bg-sky-500  uppercase rounded-md">
                          <h2>{info.button_text}</h2>
                          <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default JournalCarousel;
