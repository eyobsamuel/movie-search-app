const MovieListSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row overflow-x-auto sm:overflow-x-auto gap-4 p-4 justify-center sm:justify-around">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full sm:w-32 flex flex-col items-center gap-2 p-2 rounded bg-gray-100 animate-pulse shadow-md"
        >
          <div className="relative w-24 h-36 bg-gray-300 rounded"></div>

          <div className="flex flex-col mt-2 text-center w-full">
            <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>{" "}
            <div className="flex items-center justify-center gap-2">
              <div className="bg-gray-300 h-3 w-1/4 rounded"></div>
              <div className="bg-gray-300 h-3 w-1/4 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieListSkeleton;
