import { Container } from "@mui/material";

import FileUploader from "@/components/upload-ui/FileUploader";

function Page() {
  return (
    <Container maxWidth="sm">
      <FileUploader />
    </Container>
  );
}

export default Page;
