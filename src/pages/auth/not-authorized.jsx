import { useRouter } from "next/router";
import React from "react";

export default function NotAuthorized() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-2xl">No tienes acceso a esta página</div>
        <button
          className="text-xl mt-4 p-3 bg-fillGradient rounded-lg"
          onClick={() => router.push("/")}
        >
          Volver al Home
        </button>
      </div>
    </>
  );
}
