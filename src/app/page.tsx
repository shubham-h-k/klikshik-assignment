import CarouselContainer from "@/components/carousel/CarouselContainer";
import { getData } from "@/lib/actions";

export const revalidate = 0;

export default async function Home() {
  const maxResults = 10;
  const data: string[] = await getData(maxResults);

  return <CarouselContainer data={data} />;
}
