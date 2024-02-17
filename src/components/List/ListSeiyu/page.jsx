import Link from "next/link";

const SeiyuList = ({ listAandC }) => {
  return (
    <>
      <div>
        <div className="mb-10 mt-10">
          <h1>Character</h1>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {listAandC.data.map((v, index) => (
              <div
                className="bg-base-200 rounded-lg shadow-xl h-24"
                key={index}
              >
                <div className="flex justify-between">
                  <div className="flex items-center" key={index}>
                    <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                      <Link href={`/anime/${v.anime.mal_id}`}>
                        <img
                          src={v.anime.images.jpg.image_url}
                          className="rounded-lg shadow-2xl hover:border-2 border-white"
                          alt={`${v.anime.title} Image`}
                        />
                      </Link>
                    </div>
                    <div className="px-3 text-xs">
                      <p className="font-bold py-3">{v.anime.title}</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <div className="px-3 text-xs">
                        <h1 className="font-bold py-3">{v.character.name}</h1>
                        <p>{v.role}</p>
                      </div>
                      <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                        <Link href={`/character/${v.character.mal_id}`}>
                          <img
                            src={v.character.images.jpg.image_url}
                            alt={`${v.character.name} Image`}
                            className="rounded-lg shadow-2xl hover:border-2 border-white"
                          />
                        </Link>
                      </div>
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

export default SeiyuList;
