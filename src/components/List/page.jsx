import Header from "./Header";
import TopAnime from "./ListAnime/Top_Anime";
import UpcomingAnime from "./ListAnime/Upcoming_Anime";

const AllListAnime = ({ populer, upcoming }) => {
  return (
    <>
      <div className="my-10">
        <Header title="populer" LinkTitle="Liat semua" LinkHreft="/popular" />
        <TopAnime populer={populer} />
      </div>
      <div>
        <Header title="upcoming" LinkTitle="Liat semua" LinkHreft="/upcoming" />
        <UpcomingAnime upcoming={upcoming} />
      </div>
    </>
  );
};

export default AllListAnime;
