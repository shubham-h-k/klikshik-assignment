import React from "react";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import theme from "@/theme";

interface PropsCarouselIndicators {
  data: string[];
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

function CarouselIndicators({
  data,
  activeSlide,
  setActiveSlide,
}: PropsCarouselIndicators) {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        p: 0,
        flexWrap: "wrap",
        alignItems: "center",
        gap: "12px",
        listStyle: "none",
      }}
    >
      {data.map((img, i) => (
        <Box component="li" key={img}>
          <Button
            onMouseOver={() => setActiveSlide(i)}
            onClick={() => setActiveSlide(i)}
            sx={{
              position: "relative",
              display: "block",
              width: "4rem",
              height: "4rem",
              overflow: "hidden",
              border: 2,
              borderColor: activeSlide === i ? "#3D3BDD" : "#eaeaea",
              borderRadius: "10px",
              [theme.breakpoints.up("sm")]: {
                width: "4.375rem",
                height: "4.375rem",
              },
            }}
          >
            <Image
              src={img}
              alt={img}
              fill
              sizes="12vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority={true}
            />
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default CarouselIndicators;
