"use client";

import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Typography } from "@mui/material";

import theme from "@/theme";
import InputFileUpload from "@/components/upload-ui/InputFileUpload";
import LinearProgressWithLabel from "@/components/upload-ui/LinearProgressWithLabel";
import FileList from "@/components/upload-ui/FileList";

import { uploadFile } from "@/lib/actions";
import { maxImageSize } from "@/lib/constants";

const FileUploader = () => {
  const [status, setStatus] = useState<"select" | "uploading" | "uploaded">(
    "select"
  );
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [curUploadingFile, setCurUploadingFile] = useState("");
  const [progress, setProgress] = useState(0);

  const reset = function () {
    setStatus("select");
    setUploadedFiles([]);
    setProgress(0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleUpload = async () => {
    if (files) {
      const filesArr = Array.from(files);
      setStatus("uploading");
      for (let i = 0; i < filesArr.length; i++) {
        const formData = new FormData();
        formData.append("imageFile", filesArr[i]);
        formData.append("imageFileName", filesArr[i].name);
        if (
          filesArr[i].size <= maxImageSize &&
          filesArr[i].type.startsWith("image/")
        ) {
          try {
            setCurUploadingFile(filesArr[i].name);

            await uploadFile(formData);

            setCurUploadingFile("");
            setProgress((p) => p + 1);
            setUploadedFiles((files) => [...files, filesArr[i].name]);
          } catch {
            setCurUploadingFile("");
          }
        }
      }
      setStatus("uploaded");
    }
  };

  return (
    <form onSubmit={handleUpload} style={{ marginTop: "0px" }}>
      <Typography
        variant="body1"
        component="p"
        sx={{ mb: "24px", textAlign: "center" }}
      >
        * Size limit: 5MB per file
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: "24px" }}>
        <InputFileUpload
          onFileChange={handleFileChange}
          status={status}
          reset={reset}
        />
      </Box>

      {files && (
        <>
          <LinearProgressWithLabel value={progress} totalFiles={files.length} />
          <FileList
            files={files}
            curUploadingFile={curUploadingFile}
            uploadedFiles={uploadedFiles}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "4px" }}>
            {status === "uploaded" ? (
              <Button
                variant="contained"
                color="success"
                disableElevation
                sx={{
                  backgroundColor: theme.palette.success.main,
                  cursor: "default",
                }}
              >
                Done
              </Button>
            ) : (
              <LoadingButton
                loading={status === "uploading"}
                loadingPosition="start"
                startIcon={<CloudUploadIcon />}
                variant="contained"
                onClick={handleUpload}
              >
                {status === "uploading" ? "Uploading..." : "Upload"}
              </LoadingButton>
            )}
          </Box>
        </>
      )}
    </form>
  );
};

export default FileUploader;
