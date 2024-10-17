import CarouselContainer from "@/components/carousel/CarouselContainer";

export default async function Home() {
  const maxResults = 10;
  const response = await fetch(
    `http://localhost:3000/api/images?limit=${maxResults}`
  );

  const { data }: { data: string[] } = await response.json();

  return <CarouselContainer data={data} />;
}
