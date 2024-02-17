"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const options = {
    width: "100%",
    height: "300px",
  };

  const options1 = {
    width: "100%",
    height: "500px",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="relative">
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
        />
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={openModal}
        ></div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="w-full p-8 rounded-md shadow-lg">
            <div className="flex justify-end">
              <button
                className="text-white hover:text-orange-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <YouTube videoId={youtubeId} opts={options1} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
