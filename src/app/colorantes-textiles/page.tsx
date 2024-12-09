import { ProductsBanner, ProductsTabs } from "@/components/colorantes-textiles";
import { Suspense } from "react";

export default async function Products() {
  return (
    <>
      <div className="fade-in">
        <ProductsBanner />
        <Suspense fallback={<div className="" />}>
          <ProductsTabs />
        </Suspense>
      </div>
    </>
  );
}
