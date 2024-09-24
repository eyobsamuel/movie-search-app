"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        const queryParams = new URLSearchParams(window.location.search);
        const query = queryParams.get("from") || "";
        router.push(`/?q=${query}`);
      }}
      aria-label="Go back"
      className="flex items-center justify-center p-2 transition-colors duration-300 hover:bg-gray-200 rounded-full"
    >
      <Image src="/back.svg" alt="Back" width={30} height={30} />
    </button>
  );
};

export default GoBackButton;
