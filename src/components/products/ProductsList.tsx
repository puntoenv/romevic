import { ProductCard } from "../product/ProductCard";
import { directColors } from "@/data/products/direct-dyes-on-cotton.json";

export const ProductsList = () => {
  return (
    <>
      <section>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 d-cols-3">
          {directColors.map(({ name, hex, title, id }) => (
            <ProductCard key={id} name={name} hex={hex} title={title} />
          ))}
        </div>
      </section>
    </>
  );
};
