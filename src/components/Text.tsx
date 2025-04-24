import { Box } from "@mui/material";

type Props = {
  text: string;
};

const splitRegex = /(?:(?:(?<!\\)\\n)|$)/g;

export const Text = ({ text }: Props) => {
  const lines = text
    .split(splitRegex)
    .map((line) => line.replace("\\\\", "\\").trim());

  const lineElements = lines.map((line, i) => {
    return (
      <Box
        component="span"
        key={i}
        sx={{ width: "100%", minHeight: "20px", display: "block" }}
      >
        {line}
      </Box>
    );
  });

  return lineElements;
};
