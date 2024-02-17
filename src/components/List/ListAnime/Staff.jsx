const Staff = ({ staffAnime }) => {
  const isLimitedStaff = Array.isArray(staffAnime);
  return (
    <>
      <div className="mb-10">
        <h1>staff</h1>
        <div className="grid grid-cols-2 gap-4 pt-4">
          {isLimitedStaff
            ? staffAnime.map((staff, index) => (
                <div
                  key={index}
                  className="bg-base-200 rounded-lg shadow-xl h-24"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[100px]">
                        {staff.person.images.jpg.image_url ? (
                          <img
                            src={staff.person.images.jpg.image_url}
                            className="rounded-lg shadow-2xl"
                            alt={`${staff.person.name} Image`}
                          />
                        ) : (
                          <img
                            src={"/images/anime.png"}
                            className="rounded-lg shadow-2xl"
                            alt={`${staff.person.name} Image`}
                          />
                        )}
                      </div>
                      <div className="px-3 text-xs">
                        <p className="font-bold py-3">{staff.person.name}</p>
                        <p>{staff.positions[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : staffAnime.data.map((staff, index) => (
                <div
                  key={index}
                  className="bg-base-200 rounded-lg shadow-xl h-24"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-[60px] h-[100px]">
                        <img
                          src={staff.person.images.jpg.image_url}
                          className="rounded-lg shadow-2xl"
                          alt={`${staff.person.name} Image`}
                        />
                      </div>
                      <div className="px-3 text-xs">
                        <p className="font-bold py-3">{staff.person.name}</p>
                        <p>{staff.positions[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Staff;
