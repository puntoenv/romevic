import { ProductsBanner, ProductsList } from "@/components/products";

export default function Products() {
  return (
    <>
      <div className="fade-in">
        <ProductsBanner />
        <div className=" ml-2 font-semibold text-xl md:text-2xl xl:text-3xl p-8 md:px-16 xl:px-32">
          <div className="flex items-end">
            <h2 className="w-min text-nowrap">
              <span className="px-2">Colorantes Directos</span>
              <div className="border-2 border-sky-500/50"></div>
            </h2>
            <div className="border mb-[1px] w-full border-gray-500/50"></div>
          </div>
          <ProductsList />
        </div>
      </div>
    </>
  );
}
