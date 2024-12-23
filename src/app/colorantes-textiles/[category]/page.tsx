import { LoadingLogo } from "@/components/app";
import { ColorCard } from "@/components/color";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function ProductCategory({ params }: Props) {
  const { category } = await params;
  return (
    <LoadingLogo>
      <ColorCard category={category} />
    </LoadingLogo>
  );
}
