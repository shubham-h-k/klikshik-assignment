import { Box } from "@mui/material";
import Image from "next/image";

interface PropsSlide {
  img: string;
  activeSlide: number;
  index: number;
}

function Slide({ img, index, activeSlide }: PropsSlide) {
  return (
    <Box
      key={img}
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        transition: "transform 0.3s",
        transform: `translateX(${100 * (index - activeSlide)}%)`,
      }}
    >
      <Image
        src={img}
        alt={img}
        fill
        priority={true}
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </Box>
  );
}

export default Slide;
