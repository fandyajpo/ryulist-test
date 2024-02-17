import Link from "next/link";

const ListCharacterManga = ({ cManga }) => {
  return (
    <>
      <div>
        <div className="mb-10 mt-10">
          <h1>Seiyu</h1>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {cManga.data.map((ch, index) => (
              <div
                className="bg-base-200 rounded-lg shadow-xl h-24"
                key={index}
              >
                <div className="flex justify-between">
                  <div className="flex items-center" key={index}>
                    <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                      <Link
                        href={`/manga/detail/character/${ch.character.mal_id}`}
                      >
                        <img
                          src={ch.character.images.jpg.image_url}
                          className="rounded-lg shadow-2xl hover:border-2 border-white"
                          alt={`${ch.character.name} Image`}
                        />
                      </Link>
                    </div>
                    <div className="px-3 text-xs">
                      <p className="font-bold py-3">{ch.character.name}</p>
                      <p className="font-bold py-3">{ch.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCharacterManga;
