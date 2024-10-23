import React from "react";
import { IconButton, styled } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import theme from "@/theme";

const CustomButton = styled(IconButton)({
  position: "absolute",
  zIndex: "10",
  top: "50%",
  cursor: "pointer",
  transform: "translateY(-50%)",
  border: "1px solid #000",
  //   backgroundColor: theme.palette.mode == "dark" ? "#000" : "#fff",
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    // backgroundColor: theme.palette.mode == "dark" ? "#444" : "#eee",
    backgroundColor: "#eee",
  },
});

interface PropsCarouselControl {
  direction: "previous" | "next";
  onClick: () => void;
}

function CarouselControl({ direction, onClick }: PropsCarouselControl) {
  if (direction === "previous")
    return (
      <CustomButton
        onClick={onClick}
        sx={{ left: "2%" }}
        aria-label="previous image"
      >
        <ArrowBackIosNewIcon htmlColor="#000" />
      </CustomButton>
    );
  if (direction === "next")
    return (
      <CustomButton
        onClick={onClick}
        sx={{ right: "2%" }}
        aria-label="next image"
      >
        <ArrowForwardIosIcon htmlColor="#000" />
      </CustomButton>
    );
}

export default CarouselControl;
