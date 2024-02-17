"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import HoverCard from "./HoverCard";
import { useState } from "react";

const TopAnime = ({ populer }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <div className="w-full">
        <Swiper
          slidesPerView={7}
          spaceBetween={0}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {populer.data.map((populer, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group relative">
                <Link href={`/anime/${populer.mal_id}`}>
                  <div className="py-12 ">
                    <div className="w-[150px] h-[220px] relative">
                      <Image
                        src={populer.images.webp.image_url}
                        alt=""
                        width={350}
                        height={350}
                      />
                    </div>
                    {hoveredIndex === index && (
                      <HoverCard
                        img={populer.images.webp.image_url}
                        title={populer.title}
                        genres={populer.genres.map((genre) => genre.name)}
                      />
                    )}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopAnime;
