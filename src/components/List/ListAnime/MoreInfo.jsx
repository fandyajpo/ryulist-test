const MoreInfo = ({ moreInfo }) => {
  return (
    <>
      {moreInfo.data.moreinfo ? (
        <div className="mb-10">
          <h1>More info</h1>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{moreInfo.data.moreinfo}</h2>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MoreInfo;
