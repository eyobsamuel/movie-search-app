"use client";
import SearchInput from "@/components/ui/search-input";
import { useEffect, useState, Suspense } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useLazySearchMoviesQuery } from "@/store/movie-api-slice";
import MovieList from "./../components/ui/movie-list";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [searchTerm, setSearchTerm] = useState(q || "");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [loading, setLoading] = useState(false);

  const [trigger, { data, error, isFetching }] = useLazySearchMoviesQuery();

  useEffect(() => {
    if (q && q.length >= 3) {
      trigger(q);
    }
  }, [q, trigger]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (debouncedSearchTerm) {
      params.set("q", debouncedSearchTerm);
    } else {
      params.delete("q");
    }
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      const req = trigger(debouncedSearchTerm);
      return () => {
        req.abort();
      };
    }
  }, [debouncedSearchTerm, trigger]);

  const handleInputChange = (newSearchTerm: string) => {
    const trimmedTerm = newSearchTerm.trim();
    setSearchTerm(trimmedTerm);
    setLoading(true);
  };

  useEffect(() => {
    if (!isFetching) {
      setLoading(false);
    }
  }, [isFetching]);

  const renderContent = () => {
    if (searchTerm.length < 3) {
      return (
        <p className="text-center">
          Please type at least 3 characters to search.
        </p>
      );
    }

    if (error) {
      return <p className="text-center">Error fetching movies</p>;
    }

    if (data?.Response === "True" || isFetching) {
      return (
        <MovieList
          movies={data?.Search?.slice(0, 3) || []}
          isLoading={isFetching || loading}
        />
      );
    }

    if (data?.Response === "False") {
      return <p className="text-center">{data?.Error}</p>;
    }

    return null;
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gray-100 text-gray-700">
      <main className="flex flex-col items-center gap-8 w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center">Movie Search App</h1>
        <SearchInput handleInputChange={handleInputChange} value={searchTerm} />
        <div className="w-full">
          <Suspense fallback={<div>Loading...</div>}>
            {renderContent()}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
