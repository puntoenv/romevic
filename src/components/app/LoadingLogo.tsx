"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const LoadingLogo = ({ children }: Props) => {
  const [showLoader, setShowLoader] = useState(true);

  const time = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setShowLoader(false);
        resolve(true);
      }, 1500);
    });
  };

  time();

  return (
    <>
      {showLoader ? (
        <section className="absolute top-0 bottom-0 left-0 right-0 z-50 h-dvh flex justify-center items-center bg-black/10 backdrop-blur-3xl fade-in">
          <Image
            className="animate-bounce duration-1000 h-48 w-48 md:h-72 md:w-72 xl:h-96 xl:w-96"
            src="/icon.png"
            alt="logo"
            width={200}
            height={200}
          />
        </section>
      ) : (
        children
      )}
    </>
  );
};
