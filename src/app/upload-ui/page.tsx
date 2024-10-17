import FileUploader from "@/components/upload-ui/FileUploader";
import { Container } from "@mui/material";
import React from "react";

function Page() {
  return (
    <Container maxWidth="sm">
      <FileUploader />
    </Container>
  );
}

export default Page;
