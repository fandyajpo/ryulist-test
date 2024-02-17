const HoverCard = ({ img, title, genres }) => {
  return (
    <>
      <div className="w-full max-h-96 absolute -top-0 right-3.5 -translate-x-[1/5] bg-gray-900 border-2 p-2 border-gray-600 z-50 ">
        <div className="mb-2 ">
          <img
            className="w-full h-56 object-cover rounded-lg"
            src={img}
            alt="DSFSDF"
          />
        </div>
        <div className="text-center">
          <p className="text-white text-xs font-bold">{title}</p>
          <p className="text-xs">{genres.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default HoverCard;
