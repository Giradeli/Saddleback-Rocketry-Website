import { useEffect } from "react";
import { useDataContext } from "../contexts/Hooks";

type Props = {
  refKey: string;
};

const newLineRegex = /((?<!\\)\\n)/g;
const splitRegex = /(?:(?:(?<!\\)\\n)|$)/g;

export const TextReference = (props: Props) => {
  const { textReferences } = useDataContext();
  const reference = textReferences.find((ref) => ref.key === props.refKey);
  const text = reference?.text ? reference.text : `[${props.refKey}]`;

  const lines = text
    .split(splitRegex)
    .filter((line) => Boolean(line?.replace(newLineRegex, "").trim()))
    .map((line) => line.replace("\\\\", "\\"));

  useEffect(() => {
    const test = "line1\\nline2\\n\\nline4\\\\nline4";
    const test2 = test
      .split(splitRegex)
      // .filter((line) => Boolean(line?.replace  All(newLineRegex, "").trim()))
      .map((line) => line.replaceAll("\\\\", "\\"));
    console.log(test2);
  }, []);

  const lineElements = lines.map((line, i) => {
    return (
      <span style={{ width: "100%" }} key={i}>
        {line}
      </span>
    );
  });

  return lineElements;
};
