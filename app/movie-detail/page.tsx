"use client";
import Chip from "@/components/ui/chip";
import GoBackButton from "@/components/ui/go-back";
import MovieDetailSkeleton from "@/components/ui/movie-detail-skeleton";
import { useGetMovieDetailsQuery } from "@/store/movie-api-slice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

const MovieDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data: movie, error, isLoading } = useGetMovieDetailsQuery(id);
  const router = useRouter();

  if (isLoading) return <MovieDetailSkeleton />;

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100 text-gray-700">
      <main className="flex flex-col items-center gap-2 w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <div className="w-full flex items-center justify-center pb-4">
          {!error && movie?.Response !== "False" && (
            <div className="mr-2 flex-shrink-0">
              <GoBackButton />
            </div>
          )}

          <h1 className="text-2xl font-bold text-center flex-grow truncate">
            {movie?.Title}
          </h1>
        </div>

        {error || movie?.Response === "False" ? (
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/movie.svg"
              alt="Error Icon"
              width={124}
              height={124}
              className="mb-4"
            />
            <div className="text-center">
              <h2 className="text-9xl font-bold mb-2">404</h2>
              <h2 className="text-4xl font-bold mb-2">Movie Not Found</h2>
            </div>
            <button
              onClick={() => router.push("/")}
              className="mt-4  bg-gray-300 text-black py-2 px-4 rounded transition hover:bg-gray-400 hover:text-white"
            >
              Go Back
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Image
                src={movie?.Poster === "N/A" ? "/no-image.svg" : movie?.Poster}
                alt={movie?.Title}
                width={150}
                height={200}
                className="bg-gray-300 object-cover rounded-lg shadow-lg"
              />
              <div className="flex flex-col mt-4">
                {movie?.Director && movie?.Director !== "N/A" && (
                  <p>
                    <strong>Director:</strong> {movie?.Director}
                  </p>
                )}
                {movie?.Writer && movie?.Writer !== "N/A" && (
                  <p>
                    <strong>Writer:</strong> {movie?.Writer}
                  </p>
                )}
                {movie?.Actors && movie?.Actors !== "N/A" && (
                  <p>
                    <strong>Actors:</strong> {movie?.Actors}
                  </p>
                )}
                {movie?.Language && movie?.Language !== "N/A" && (
                  <p>
                    <strong>Language:</strong> {movie?.Language}
                  </p>
                )}
                {movie?.Country && movie?.Country !== "N/A" && (
                  <p>
                    <strong>Country:</strong> {movie?.Country}
                  </p>
                )}
                {movie?.Awards && movie?.Awards !== "N/A" && (
                  <p>
                    <strong>Awards:</strong> {movie?.Awards}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {movie?.Genre?.split(", ")?.map((genre: string) => (
                <Chip key={genre} label={genre.trim()} />
              ))}
            </div>

            <div className="text-gray-600">
              {movie?.Released !== "N/A" && `${movie?.Released} • `}
              {movie?.Runtime !== "N/A" && `${movie?.Runtime} • `}
              {movie?.Rated !== "N/A" && movie?.Rated}
            </div>

            {movie?.imdbRating !== "N/A" && (
              <div className="flex items-center justify-center gap-1">
                <Image
                  src="/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                <span>
                  {movie?.imdbRating} ({movie?.imdbVotes} votes)
                </span>
              </div>
            )}
            {movie?.Plot !== "N/A" && (
              <p className="mt-4 text-gray-700">{movie?.Plot}</p>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default function MovieDetailPage() {
  return (
    <Suspense fallback={<MovieDetailSkeleton />}>
      <MovieDetail />
    </Suspense>
  );
}
