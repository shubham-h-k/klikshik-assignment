"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import theme from "@/theme";
import Carousel from "@/components/carousel/Carousel";
import Slides from "@/components/carousel/Slides";
import CarouselControl from "@/components/carousel/CarouselControl";
import CarouselIndicators from "@/components/carousel/CarouselIndicators";

function CarouselContainer({ data }: { data: string[] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = data.length;

  const previous = useCallback(() => {
    if (activeSlide === 0) {
      setActiveSlide(totalSlides - 1);
    } else {
      setActiveSlide((s) => s - 1);
    }
  }, [activeSlide, totalSlides]);

  const next = useCallback(() => {
    if (activeSlide === totalSlides - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide((s) => s + 1);
    }
  }, [activeSlide, totalSlides]);

  useEffect(
    function () {
      function handler(e: KeyboardEvent) {
        if (e.key === "ArrowRight" || e.key === "ArrowUp") next();
        if (e.key === "ArrowLeft" || e.key === "ArrowDown") previous();
      }
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    },
    [next, previous]
  );

  return (
    <Box
      sx={{
        width: "20rem",
        height: "20rem",
        mx: "auto",
        [theme.breakpoints.up("sm")]: {
          width: "28rem",
          height: "28rem",
        },
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{
          mb: "12px",
          fontSize: "12px",
          [theme.breakpoints.up("sm")]: {
            fontSize: "16px",
          },
        }}
      >
        * Upload images and view them instantly in the carousel
        <br />* Images are uploaded to and retrieved from Supabase
        <br />* Hover over OR click thumbnails to switch between images
        <br />* You can also use keyboard keys to switch between images
      </Typography>
      <Carousel>
        <Slides data={data} activeSlide={activeSlide} />
        <CarouselControl direction="previous" onClick={previous} />
        <CarouselControl direction="next" onClick={next} />
      </Carousel>
      <CarouselIndicators
        data={data}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </Box>
  );
}

export default CarouselContainer;
