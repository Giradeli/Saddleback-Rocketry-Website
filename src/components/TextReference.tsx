import { useDataContext } from "../contexts/DataContext";

type Props = {
  refKey: string;
};

const newLineRegex = /((?<!\\)\\n)/g;

export const TextReference = (props: Props) => {
  const { textReferences } = useDataContext();
  const reference = textReferences.find((ref) => ref.key === props.refKey);
  const text = reference?.text ? reference.text : `[${props.refKey}]`;

  const lines = text
    .split(newLineRegex)
    .filter((line) => Boolean(line.replace(newLineRegex, "").trim()))
    .map((line) => line.replace("\\\\", "\\"));
  const lineElements = lines.map((line, i) => {
    return (
      <span style={{ width: "100%" }} key={i}>
        {line}
        <br />
      </span>
    );
  });

  return lineElements;
};
