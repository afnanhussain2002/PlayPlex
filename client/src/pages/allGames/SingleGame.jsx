const SingleGame = ({ game }) => {
  console.log(game);
  const {
    _id,
    productName,
    productPrice,
    productShortDes,
    productPhoto,
    uploaderName,
    uploaderPhoto,
  } = game;
  return (
    <>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
        <div className="px-4 py-2">
          <h1 className="text-gray-900 font-bold text-3xl uppercase">
            {productName}
          </h1>
          <p className="text-gray-600 text-sm mt-1">{productShortDes}</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <img className="w-8 rounded-full" src={uploaderPhoto} alt="creator" />
          <p>{uploaderName} ||</p>
          <p>Creator</p>
        </div>
        <img
          className="h-56 w-full object-cover mt-2"
          src={productPhoto}
          alt={productName}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">${productPrice}</h1>
          <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
            See Details
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleGame;
