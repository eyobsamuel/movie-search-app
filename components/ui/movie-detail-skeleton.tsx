import GoBackButton from "@/components/ui/go-back";

const MovieDetailSkeleton = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100 text-gray-700">
      <main className="flex flex-col items-center gap-2 w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <div className="relative w-full flex items-center justify-center pb-4">
          <div className="absolute left-0">
            <GoBackButton />
          </div>
          <div className="w-2/3 h-8 bg-gray-300 rounded-lg mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="bg-gray-300 w-40 h-52 rounded-lg shadow-lg"></div>

          <div className="flex flex-col mt-4 gap-2">
            <div className="h-4 bg-gray-300 rounded w-48 sm:w-80"></div>
            <div className="h-4 bg-gray-300 rounded w-56 sm:w-96"></div>
            <div className="h-4 bg-gray-300 rounded w-56 sm:w-80"></div>
            <div className="h-4 bg-gray-300 rounded w-48 sm:w-64"></div>
            <div className="h-4 bg-gray-300 rounded w-56 sm:w-96"></div>
            <div className="h-4 bg-gray-300 rounded w-48 sm:w-96"></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-16 rounded-full"></div>
        </div>

        <div className="h-4 bg-gray-300 rounded w-32 mt-4"></div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>

        <div className="mt-4 w-full">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetailSkeleton;
