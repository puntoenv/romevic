import Image from "next/image";

export const ProductsBanner = () => {
  return (
    <>
      <Image
        className="w-full h-24 md:h-full"
        src="/products-banner.jpg"
        alt="Products Banner"
        width={2000}
        height={500}
        loading="eager"
      />
    </>
  );
};
