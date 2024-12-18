import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  hex: string;
  title: string;
  titulo: string;
  category: string;
  img?: string;
}

export const ProductCard = ({
  name,
  hex,
  titulo,
  category,
  title,
  img,
}: Props) => {
  return (
    <Link
      href={`/colorantes-textiles/${category}?color=${title}`}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg grid place-content-center bg-sky-950/10 hover:bg-sky-950/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-100/10 px-4"
      // style={{
      //   boxShadow: `0px 0px 5px ${hex}`,
      // }}
    >
      <div className="flex flex-col items-center justify-center py-6">
        {img ? (
          <Image
            src={img}
            height={100}
            width={100}
            alt="color"
            className="mb-4 rounded-full size-24 shadow-2xl"
            loading="eager"
          />
        ) : (
          <div
            className={`w-24 h-24 mt-1 mb-4 rounded-full shadow-lg text-center`}
            style={{
              backgroundColor: hex,
            }}
          />
        )}
        <h5 className="text-center mb-1 text-sm md:text-base xl:text-xl font-bold text-gray-950/70 uppercase">
          {titulo}
        </h5>
        <p className="text-center text-sm md:text-base xl:text-lg font-medium text-gray-950/50">
          {name}
        </p>
      </div>
    </Link>
  );
};
