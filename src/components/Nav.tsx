"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, ButtonGroup } from "@mui/material";

function Nav() {
  const pathname = usePathname();

  return (
    <Box component="nav" sx={{ mt: "32px", mb: "40px", textAlign: "center" }}>
      <ButtonGroup size="large" aria-label="Navigation Menu">
        <Button
          href="/"
          variant={pathname === "/" ? "contained" : "outlined"}
          component={NextLink}
        >
          Carousel
        </Button>
        <Button
          href="/upload-ui"
          variant={pathname === "/upload-ui" ? "contained" : "outlined"}
          component={NextLink}
        >
          Upload
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Nav;
