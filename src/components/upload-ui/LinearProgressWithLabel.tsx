import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LinearProgressWithLabel({
  value,
  totalFiles,
}: {
  value: number;
  totalFiles: number;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value * (100 / totalFiles)}
          sx={{ height: "12px", borderRadius: "100px" }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {value}/{totalFiles}
        </Typography>
      </Box>
    </Box>
  );
}
