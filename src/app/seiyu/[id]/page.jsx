import { getAnimeResponse } from "@/libs/api-libs";
import SeiyuList from "@/components/List/ListSeiyu/page";

import { format } from "date-fns";

const Page = async ({ params: { id } }) => {
  const seiyu = await getAnimeResponse(`people/${id}/full`);
  const peran = await getAnimeResponse(`people/${id}/voices`);

  const birthday = seiyu?.data?.birthday;

  const formattedBirthday = format(new Date(birthday), "MMMM dd, yyyy");

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
                seiyu.data.images.jpg.image_url
                  ? seiyu.data.images.jpg.image_url
                  : "/images/anime.png"
              }
              alt={seiyu.data.title}
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
              {seiyu.data.name}
              {/* <span className="text-base">{seiyu.data.given_name}</span> /
              <span className="text-base">{seiyu.data.family_name}</span> */}
            </h1>
            <p className="my-3 text-lg text-gray-300">
              Given Name : {seiyu.data.given_name}
            </p>
            <p className="my-3 text-lg text-gray-300">
              Family Name : {seiyu.data.family_name}
            </p>
            <p className="my-3 text-lg text-gray-300">
              Birthday: {formattedBirthday}
            </p>
            <p className="my-3 text-lg text-gray-300">
              Favorites : {parseInt(seiyu.data.favorites).toLocaleString()}
            </p>
            <p className="my-3 text-lg text-gray-300">
              {" "}
              About : {seiyu.data.about}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-20">
        <SeiyuList listAandC={peran} />
      </div>
    </>
  );
};

export default Page;
