import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/data/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <section>
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
          //   navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative h-[45vh] md:h-[50vh]">
                <h2 className="text-center italic">
                  &ldquo; {review.review_details.slice(0,300)}... &rdquo;
                </h2>
                <div className="w-full flex flex-col justify-center items-center bg-black">
                  <div className="absolute bottom-20">
                    <div className="flex flex-col justify-center items-center gap-3">
                      <img
                        src={review.img}
                        alt="img"
                        className="h-16 w-16 rounded-full"
                      />
                      <h2>{review.name}</h2>
                      <h2 className="text-blue-500 font-semibold">{review.designation}</h2>
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

export default Review;
