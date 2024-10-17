import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface PropsInputFileUpload {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: "select" | "uploading" | "uploaded";
  reset: () => void;
}

export default function InputFileUpload({
  onFileChange,
  status,
  reset,
}: PropsInputFileUpload) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<AddIcon />}
      disabled={status === "uploading"}
      onClick={reset}
    >
      Add images
      <VisuallyHiddenInput
        type="file"
        onChange={onFileChange}
        multiple
        accept="image/*"
      />
    </Button>
  );
}
