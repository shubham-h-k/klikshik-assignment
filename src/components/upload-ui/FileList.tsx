import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress, Paper, Stack, Typography } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import { convertBytesToMB, truncateText } from "@/lib/utils";
import { maxImageSize } from "@/lib/constants";

export default function FileList({
  files,
  curUploadingFile,
  uploadedFiles,
}: {
  files: FileList;
  curUploadingFile: string;
  uploadedFiles: string[];
}) {
  return (
    <Stack component={List} spacing={2} sx={{ mt: "4px" }}>
      {Array.from(files).map((file) => (
        <Paper
          key={file.name}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            border: file.size > maxImageSize ? "1px solid red" : "none",
          }}
          component={ListItem}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImageOutlinedIcon sx={{ mr: "8px" }} />
            {file.size > maxImageSize || !file.type.startsWith("image/") ? (
              <ListItemText
                primary={truncateText(file.name, 20)}
                sx={{
                  textDecoration: "line-through",
                  color: "red",
                }}
              />
            ) : (
              <ListItemText primary={truncateText(file.name, 20)} />
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              component="span"
              color={
                file.size <= maxImageSize && file.type.startsWith("image/")
                  ? "success"
                  : "error"
              }
              sx={{ mr: 1 }}
            >
              {!file.type.startsWith("image/")
                ? "NOT AN IMAGE"
                : file.size > maxImageSize
                ? `${convertBytesToMB(file.size)} MB (Above limit)`
                : `${convertBytesToMB(file.size)} MB`}
            </Typography>
            {file.name === curUploadingFile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography component="span" color="success" sx={{ mr: 1 }}>
                  Uploading
                </Typography>
                <CircularProgress size="18px" color="success" thickness={3.6} />
              </Box>
            )}
            {uploadedFiles.includes(file.name) && (
              <DoneAllIcon color="success" />
            )}
          </Box>
        </Paper>
      ))}
    </Stack>
  );
}

{
  /* <IconButton aria-label="delete">
<CloseIcon color="warning" />
</IconButton> */
}
