import { useDataContext } from "../contexts/Hooks";

type Props = {
  refKey: string;
};

const splitRegex = /(?:(?:(?<!\\)\\n)|$)/g;

export const TextReference = (props: Props) => {
  const { textReferences } = useDataContext();
  const reference = textReferences.find((ref) => ref.key === props.refKey);
  const text = reference?.text ? reference.text : `[${props.refKey}]`;

  const lines = text
    .split(splitRegex)
    .map((line) => line.replace("\\\\", "\\").trim());

  const lineElements = lines.map((line, i) => {
    return (
      <span style={{ width: "100%" }} key={i}>
        {line}
      </span>
    );
  });

  return lineElements;
};
