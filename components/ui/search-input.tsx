"use client";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@/components/icons/search";
import CloseIcon from "@/components/icons/close";

interface SearchInputProps {
  value: string;
  handleInputChange: (value: string) => void;
}

export default function SearchInput({
  value,
  handleInputChange,
}: SearchInputProps) {
  const [searchText, setSearchText] = useState(value || "");
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input

  const handleInputChangeInternal = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setSearchText(value);
    handleInputChange(value);
  };

  const handleClear = () => {
    setSearchText("");
    handleInputChange("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <input
        ref={inputRef}
        className="flex h-9 w-full border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:file:text-gray-50 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300 transition-all duration-500 ease-in-out focus:ring-2 focus:ring-blue-500 rounded-lg pl-10 pr-10"
        id="search"
        type="text"
        value={searchText}
        onChange={handleInputChangeInternal}
        placeholder="Title here..."
        aria-label="Search"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      {searchText && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          aria-label="Clear search"
        >
          <CloseIcon className="h-5 w-5 text-gray-400" />
        </button>
      )}
    </div>
  );
}
