import React from "react";
import { useDataContext } from "../contexts/Hooks";
import { Image } from "./Image";

type Props = {
  alt?: string;
  refKey: string;
  fallback?: string;
  style?: React.CSSProperties;
  scaleToW?: number;
  scaleToH?: number;
};

export const ImageReference = (props: Props) => {
  const { imageReferences } = useDataContext();
  const reference = imageReferences.find((ref) => ref.key === props.refKey);
  let imageUrl = reference?.imageUrl ? reference.imageUrl : props.fallback;
  imageUrl = imageUrl?.replace(/\?.+$/, "");

  return (
    <Image
      alt={props.alt}
      fallback={props.fallback}
      src={imageUrl}
      style={props.style}
      scaleToH={props.scaleToH}
      scaleToW={props.scaleToW}
    />
  );
};
