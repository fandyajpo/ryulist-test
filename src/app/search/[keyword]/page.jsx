import { getAnimeResponse } from "@/libs/api-libs";
import List from "@/components/List/ListAnime";
import Header from "@/components/List/Header";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  const genresAnime = await getAnimeResponse("genres/anime");

  return (
    <>
      <section className="pt-20">
        <Header title={`pencarian untuk ${decodeKeyword}.....`} />
        <List api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
