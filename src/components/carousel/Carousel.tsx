import React from "react";
import Box from "@mui/material/Box";

interface PropsCarousel {
  children: React.ReactNode;
}

function Carousel({ children }: PropsCarousel) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        border: 1,
        borderColor: "#eaeaea",
        borderRadius: "10px",
        mb: "16px",
      }}
    >
      {children}
    </Box>
  );
}

export default Carousel;
