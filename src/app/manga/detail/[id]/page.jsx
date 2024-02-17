import { getAnimeResponse, getMangaResponse } from "@/libs/api-libs";
import MoreInfo from "@/components/List/ListAnime/MoreInfo";
import ListCharacterManga from "@/components/List/ListManga/ListCharacterManga";
import { format } from "date-fns";

const page = async ({ params: { id } }) => {
  const manga = await getAnimeResponse(`manga/${id}/full`);
  const characterManga = await getMangaResponse(`manga/${id}/characters`);
  const moreInfo = await getAnimeResponse(`manga/${id}/moreinfo`);

  const limitSynopsis = (synopsis, limit) => {
    if (synopsis.length <= limit) {
      return synopsis;
    }
    return synopsis.slice(0, limit) + "...";
  };

  return (
    <>
      <div className="h-screen w-full bg-gray-800">
        <div className="relatif">
          <img src="/images/anime.png" className="w-full h-72 object-cover " />
        </div>

        <div className="flex justify-center px-24 absolute inset-0 mt-48">
          <div className="w-1/3 ">
            <img
              src={
                manga.data.images.webp.image_url
                  ? manga.data.images.webp.image_url
                  : "/images/anime.png"
              }
              alt={manga.data.title}
            />
            <div className="flex mt-5">
              <button className="btn w-40 me-2">Add to list</button>
              <button className="btn bg-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full mt-32">
            <h1 className="text-2xl font-bold mb-2">
              {manga.data.title} /{" "}
              <span className="text-base">{manga.data.title_japanese}</span>
            </h1>
            <p className="text-gray-300">
              {limitSynopsis(manga.data.synopsis, 800).replace(
                /\[Written by MAL Rewrite\]/g,
                ""
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-24 pt-10">
        <div className="w-1/5 ">
          <div role="alert" className="alert alert-info my-3 ">
            <p>
              <span className="pe-3">⭐</span>
              {manga.data.score}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>
              <span className="pe-3">🏆</span>
              {manga.data.rank}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Chapters : {manga.data.chapters ? manga.data.chapters : "-"}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>
              Genre : {manga.data.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Volumes : {manga.data.volumes ? manga.data.volumes : "-"}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Type : {manga.data.type}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>
              Published:{" "}
              {format(new Date(manga.data.published.from), "MMMM dd, yyyy")}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>
              To: {format(new Date(manga.data.published.to), "MMMM dd, yyyy")}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Status : {manga.data.status}</p>
          </div>
          {/* <div role="alert" className="alert alert-info my-3">
            <p>Studio : {manga.data.studios.map((stuido) => stuido.name)}</p>
          </div> */}
          <div role="alert" className="alert alert-info my-3">
            <p>Autor : {manga.data.authors.map((autor) => autor.name)}</p>
          </div>

          <div role="alert" className="alert alert-info my-3">
            <p>Popularity : {manga.data.popularity}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Member : {manga.data.members}</p>
          </div>
        </div>
        <div className="w-full px-20">
          <div>
            <MoreInfo moreInfo={moreInfo} />
          </div>
          <div>
            <ListCharacterManga cManga={characterManga} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
