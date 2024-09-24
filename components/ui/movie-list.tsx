"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Chip from "./chip";
import { useState } from "react";
import MovieListSkeleton from "./movie-list-skeleton";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
}

const MovieList = ({ movies, isLoading }: MovieListProps) => {
  const router = useRouter();

  const getMovieDetailUrl = (imdbID: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    const from = queryParams.get("q") || "";
    return `/movie-detail?id=${imdbID}&from=${encodeURIComponent(from)}`;
  };

  const handleNavigation = (imdbID: string) => {
    router.push(getMovieDetailUrl(imdbID));
  };

  const MovieImage = ({
    src,
    alt,
    idx,
  }: {
    src: string;
    alt: string;
    idx: number;
  }) => {
    const [imageSrc, setImageSrc] = useState(
      src === "N/A" ? "/no-image.svg" : src
    );

    return (
      <div className="relative w-24 h-36">
        <Image
          src={imageSrc}
          alt={`${alt} poster ${idx}`}
          fill
          className="object-fill rounded"
          onError={() => setImageSrc("/no-image.svg")}
        />
      </div>
    );
  };

  if (isLoading) {
    return <MovieListSkeleton />;
  }

  return (
    <div className="flex flex-col sm:flex-row overflow-x-auto sm:overflow-x-auto gap-4 p-4 justify-center sm:justify-around">
      {movies.map((movie, idx) => (
        <div
          key={movie.imdbID}
          className="flex-shrink-0 w-full sm:w-32 flex flex-col items-center gap-2 hover:bg-gray-100 cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg p-2 rounded"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleNavigation(movie.imdbID);
            }
          }}
          onClick={() => handleNavigation(movie.imdbID)}
          aria-label={`View details for ${movie.Title}`}
        >
          <MovieImage src={movie.Poster} alt={movie.Title} idx={idx} />

          <div className="flex flex-col mt-2 text-center">
            <h2 className="font-bold text-sm">{movie.Title}</h2>
            <div className="flex items-center justify-center">
              <p className="mr-2 text-xs">{movie.Year}</p>
              <Chip key={movie.Type} label={movie.Type} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
