const VideoAnime = ({ animeEpisodes }) => {
  return (
    <>
      <div>{animeEpisodes.data.episodes[0].episode}</div>
    </>
  );
};

export default VideoAnime;
