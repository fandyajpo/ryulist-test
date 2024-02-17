"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Link from "next/link";

const CarouselManga = ({ randomManga }) => {
  const limitSynopsis = (synopsis, limit) => {
    if (synopsis.length <= limit) {
      return synopsis;
    }
    return synopsis.slice(0, limit) + "...";
  };
  return (
    <>
      <div className="text-color-primary">
        <Swiper
          spaceBetween={30}
          effect="fade"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper h-full"
        >
          {randomManga?.data?.map((anime, index) => (
            <SwiperSlide key={index} className="relative h-full">
              <div className="bg-cover bg-no-repeat relative h-full w-full">
                <img
                  src={anime.images.webp.large_image_url}
                  alt=""
                  className="w-full h-full object-cover max-h-80 brightness-50"
                />
              </div>
              <div className="absolute inset-0 p-4 bg-black bg-opacity-40 text-white">
                <div className="flex items-center justify-evenly bg-no">
                  <div className="px-2 mx-5">
                    <h1 className="text-lg font-bold mb-4">{anime.title}</h1>
                    <p className="mb-4 text-lg">
                      {limitSynopsis(anime.synopsis, 400)}
                    </p>
                    <p className="mb-4">
                      {anime.genres.map((genre) => genre.name).join(", ")}
                    </p>
                    <Link href={`/manga/detailmanga/${anime.mal_id}`}>
                      <div className="inline-flex items-center gap-2 rounded-lg border border-color-secondary bg-color-hut2 px-8 py-3 text-white hover:bg-color-accent hover:text-color-primary focus:outline-none focus:ring active:text-color-accent">
                        <span className="text-sm font-medium"> More </span>

                        <svg
                          className="h-5 w-5 rtl:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={anime.images.webp.image_url}
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CarouselManga;
