import { ProductCard } from "../product/ProductCard";

interface Props {
  colors: Array<{
    name: string;
    hex: string;
    title: string;
    id: number;
  }>;
  name: string;
}

export const ProductsList = ({ colors, name }: Props) => {
  return (
    <>
      <div className="flex items-end">
        <h2 className="w-min text-nowrap">
          <span className="px-2">{name}</span>
          <div className="border-2 border-sky-500/50"></div>
        </h2>
        <div className="border mb-[1px] w-full border-gray-500/50"></div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 d-cols-3">
        {colors.map(({ name, hex, title, id }) => (
          <ProductCard key={id} name={name} hex={hex} title={title} />
        ))}
      </div>
    </>
  );
};
