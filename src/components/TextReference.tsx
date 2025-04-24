// import { Box } from "@mui/material";
import { useDataContext } from "../contexts/Hooks";
import { Text } from "./Text";

type Props = {
  refKey: string;
};

// const splitRegex = /(?:(?:(?<!\\)\\n)|$)/g;

export const TextReference = (props: Props) => {
  const { textReferences } = useDataContext();
  const reference = textReferences.find((ref) => ref.key === props.refKey);
  const text = reference?.text ? reference.text : `[${props.refKey}]`;

  // const lines = text
  //   .split(splitRegex)
  //   .map((line) => line.replace("\\\\", "\\").trim());

  // const lineElements = lines.map((line, i) => {
  //   return (
  //     <Box
  //       component="span"
  //       key={i}
  //       sx={{ width: "100%", minHeight: "20px", display: "block" }}
  //     >
  //       {line}
  //     </Box>
  //   );
  // });

  // return lineElements;

  return <Text text={text} />;
};
