import { getAnimeResponse } from "@/libs/api-libs";
import CharacterList from "@/components/List/ListAnime/CharacterList";
import NavbarAnime from "@/components/Navbar/NavbarAnime";
import VideoPlayer from "@/components/utilities/VideoPlayer";

const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const trailerYoutubeId = anime.data.trailer?.youtube_id;
  const characters = await getAnimeResponse(`anime/${id}/characters`);
  // console.log(characters);

  const limitedCharacters = characters.data.slice(0, 6);

  const limitSynopsis = (synopsis, limit) => {
    if (synopsis.length <= limit) {
      return synopsis;
    }
    return synopsis.slice(0, limit) + "...";
  };

  return (
    <>
      <div className="h-screen w-full bg-gray-800">
        {trailerYoutubeId ? (
          <VideoPlayer youtubeId={trailerYoutubeId} />
        ) : (
          <div className="relatif">
            <img
              src="/images/anime.png"
              className="w-full h-72 object-cover "
            />
          </div>
        )}

        <div className="flex justify-center px-24 absolute inset-0 mt-48">
          <div className="w-1/3 ">
            <img
              src={
                anime.data.images.webp.image_url
                  ? anime.data.images.webp.image_url
                  : "/images/anime.png"
              }
              alt={anime.data.title}
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
              {anime.data.title} /{" "}
              <span className="text-base">{anime.data.title_japanese}</span>
            </h1>
            <p className="text-gray-300">
              {limitSynopsis(anime.data.synopsis).replace(
                /\[Written by MAL Rewrite\]/g,
                ""
              )}
            </p>
          </div>
        </div>
      </div>
      <div>
        <NavbarAnime
          overview={`/anime/${id}`}
          characterAnime={`/anime/character/${id}`}
          staffAnime={`/anime/staff/${id}`}
        />
      </div>
      {/*  */}
      <div className="flex justify-between px-24 pt-10">
        <div className="w-1/5 ">
          <div role="alert" className="alert alert-info my-3 ">
            <p>
              <span className="pe-3">⭐</span>
              {anime.data.score}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>
              <span className="pe-3">🏆</span>
              {anime.data.rank}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Year : {anime.data.year}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>
              Genre : {anime.data.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Seasons : {anime.data.season}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Type : {anime.data.type}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Eposide : {anime.data.episodes}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Status : {anime.data.status}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Studio : {anime.data.studios.map((stuido) => stuido.name)}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>duration : {anime.data.duration}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Rating : {anime.data.rating}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Popularity : {anime.data.popularity}</p>
          </div>
          <div role="alert" className="alert alert-info my-3">
            <p>Member : {anime.data.members}</p>
          </div>
        </div>
        <div className="w-full px-20">
          <div>
            <CharacterList characters={characters} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
