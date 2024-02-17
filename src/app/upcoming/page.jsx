"use client";

import List from "@/components/List/ListAnime";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import PaginationBottom from "@/components/utilities/Pagination";
import { useEffect } from "react";
import { useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [pages, setPage] = useState(1);
  const [upcomingAnime, setUpcomingAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("seasons/upcoming", `page=${pages}`);
    setUpcomingAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [pages]);

  return (
    <div className="pt-20">
      <HeaderMenu title={`UPCOMING ANIME #${pages}`} />
      <List api={upcomingAnime} />
      <PaginationBottom
        page={pages}
        setPage={setPage}
        lastPage={upcomingAnime.pagination?.last_visible_page}
      />
    </div>
  );
};

export default Page;
