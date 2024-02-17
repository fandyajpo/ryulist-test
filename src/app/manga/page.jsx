"use client";

import ListTopManga from "@/components/List/ListManga/TopManga";
import { getMangaResponse } from "../../libs/api-libs";
import CarouselManga from "@/components/Carousel/CarouselManga";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import PaginationPage from "@/components/utilities/Pagination";
import { useState, useEffect } from "react";

const Page = () => {
  const [pagess, setPage] = useState(1);
  const [topManga, setManga] = useState([]);

  const fetchData = async () => {
    const dataPopularManga = await getMangaResponse(
      "top/manga",
      `page=${pagess}`
    );
    setManga(dataPopularManga);
  };

  useEffect(() => {
    fetchData();
  }, [pagess]);

  return (
    <section>
      <CarouselManga randomManga={topManga} />
      <HeaderMenu title={`MANGA POPULER`} />
      <div>
        <ListTopManga topPopulerManga={topManga} />
      </div>
      <PaginationPage
        page={pagess}
        setPage={setPage}
        lastPage={topManga.pagination?.last_visible_page}
      />
      <div></div>
    </section>
  );
};

export default Page;
