import Link from "next/link";

const CharacterList = ({ characters }) => {
  const isLimitedCharacters = Array.isArray(characters); // Check if characters is an array
  return (
    <>
      <div className="mb-10">
        <h1>Character</h1>
        <div className="grid grid-cols-2 gap-4 pt-4">
          {isLimitedCharacters
            ? characters.map((c, index) => (
                <div
                  key={index}
                  className="bg-base-200 rounded-lg shadow-xl h-24"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                        <Link href={`/character/${c.character.mal_id}`}>
                          <img
                            src={c.character.images.webp.image_url}
                            className="rounded-lg shadow-2xl hover:border-2 border-white"
                            alt={`${c.character.name} Image`}
                          />
                        </Link>
                      </div>
                      <div className="px-3 text-xs">
                        <p className="font-bold py-3">{c.character.name}</p>
                        <p>{c.role}</p>
                      </div>
                    </div>
                    <div>
                      {c.voice_actors &&
                        c.voice_actors[0] &&
                        c.voice_actors[0].person &&
                        c.voice_actors[0].language && (
                          <div className="flex items-center">
                            <div className="px-3 text-xs">
                              <h1 className="font-bold py-3">
                                {c.voice_actors[0].person.name}
                              </h1>
                              <p>{c.voice_actors[0].language}</p>
                            </div>
                            <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                              <Link
                                href={`/seiyu/${c.voice_actors[0].person.mal_id}`}
                              >
                                <img
                                  src={
                                    c.voice_actors[0].person.images.jpg
                                      .image_url
                                  }
                                  alt={`${c.voice_actors[0].person.name} Image`}
                                  className="rounded-lg shadow-2xl hover:border-2 border-white"
                                />
                              </Link>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))
            : characters.data.map((c, index) => (
                <div
                  key={index}
                  className="bg-base-200 rounded-lg shadow-xl h-24"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                        <Link href={`/character/${c.character.mal_id}`}>
                          <img
                            src={c.character.images.webp.image_url}
                            className="rounded-lg shadow-2xl hover:border-2 border-white"
                            alt={`${c.character.name} Image`}
                          />
                        </Link>
                      </div>
                      <div className="px-3 text-xs">
                        <p className="font-bold py-3">{c.character.name}</p>
                        <p>{c.role}</p>
                      </div>
                    </div>
                    <div>
                      {c.voice_actors &&
                        c.voice_actors[0] &&
                        c.voice_actors[0].person &&
                        c.voice_actors[0].language && (
                          <div className="flex items-center">
                            <div className="px-3 text-xs">
                              <h1 className="font-bold py-3">
                                {c.voice_actors[0].person.name}
                              </h1>
                              <p>{c.voice_actors[0].language}</p>
                            </div>
                            <div className="w-[60px] h-[100px] hover:scale-110 transition-all">
                              <Link
                                href={`/seiyu/${c.voice_actors[0].person.mal_id}`}
                              >
                                <img
                                  src={
                                    c.voice_actors[0].person.images.jpg
                                      .image_url
                                  }
                                  alt={`${c.voice_actors[0].person.name} Image`}
                                  className="rounded-lg shadow-2xl hover:border-2 border-white"
                                />
                              </Link>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default CharacterList;
