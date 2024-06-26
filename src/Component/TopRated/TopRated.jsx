const TopRated = ({ rating }) => {
  const { name, image, price } = rating;
  return (
    <div className="m-2 md:max-w-[290px] overflow-hidden bg-white rounded-lg shadow-black shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2 h-16">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {name}
        </h1>
      </div>

      <img
        className="object-cover w-full mt-2"
        src={image}
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${price}</h1>
      </div>
    </div>
  );
};

export default TopRated;
