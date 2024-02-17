import Link from "next/link";

const ListTopManga = ({ topPopulerManga }) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-3 p-5">
        {topPopulerManga.data?.map((manga, index) => (
          <Link href={`/manga/detail/${manga.mal_id}`} key={index}>
            <div className="relative">
              <div className="w-full h-72">
                <img
                  src={manga.images.webp.image_url}
                  alt=""
                  className="object-cover w-full h-full "
                />
              </div>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-75 text-white">
                <div className="text-sm text-center">
                  <p className="font-bold">{manga.title}</p>
                  <p className="text-gray-300">
                    {manga.genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListTopManga;
