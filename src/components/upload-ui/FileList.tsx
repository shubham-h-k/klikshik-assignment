import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { CircularProgress, Paper, Stack, Typography } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import { truncateText } from "@/lib/utils";

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
          }}
          component={ListItem}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ImageOutlinedIcon sx={{ mr: "8px" }} />
            <ListItemText primary={truncateText(file.name, 20)} />
          </Box>
          {file.name === curUploadingFile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography component="span" color="success" sx={{ mr: 1 }}>
                Uploading
              </Typography>
              <CircularProgress size="18px" color="success" thickness={3.6} />
            </Box>
          )}
          {uploadedFiles.includes(file.name) && <DoneAllIcon color="success" />}
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
