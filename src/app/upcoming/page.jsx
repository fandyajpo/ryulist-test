"use client";

import List from "@/components/List/ListAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import PaginationBottom from "@/components/utilities/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [pagess, setPage] = useState(1);
  const [upcomingAnime, setUpcomingAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("seasons/upcoming", `page=${pagess}`);
    setUpcomingAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [pagess]);

  return (
    <div className="pt-20">
      <HeaderMenu title={`UPCOMING ANIME #${pagess}`} />
      <List api={upcomingAnime} />
      <PaginationBottom
        page={pagess}
        setPage={setPage}
        lastPage={upcomingAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Page;
