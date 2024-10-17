import Slide from "@/components/carousel/Slide";

interface PropsSlides {
  data: string[];
  activeSlide: number;
}

function Slides({ data, activeSlide }: PropsSlides) {
  return (
    <>
      {data.map((img, index) => (
        <Slide key={img} img={img} index={index} activeSlide={activeSlide} />
      ))}
    </>
  );
}

export default Slides;
