import { ProductCard } from "../product/ProductCard";

type Category = "basic" | "acid" | "direct" | "disperse" | "reactive";

interface Color {
  name: string;
  hex: string;
  title: string;
  id: number;
  titulo: string;
}

interface Product {
  category: Category;
  colors: Color[];
}

interface Props {
  products: Product;
  name: string;
}

export const ProductsList = ({ products, name }: Props) => {
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
        {products.colors.map(({ name, hex, title, id, titulo }) => (
          <ProductCard
            category={products.category}
            key={id}
            name={name}
            hex={hex}
            title={title}
            titulo={titulo}
          />
        ))}
      </div>
    </>
  );
};
