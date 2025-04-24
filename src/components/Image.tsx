import React, { useState } from "react";
import { useImageProxy } from "../contexts/Hooks";
import Skeleton from "@mui/material/Skeleton";

type Props = {
  alt?: string;
  src?: string;
  fallback?: string;
  style?: React.CSSProperties;
  crossOrigin?: "anonymous" | "use-credentials" | undefined;
  scaleToW?: number;
  scaleToH?: number;
  disableSkeleton?: boolean;
};

export const Image = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  const { getProxyUrl } = useImageProxy();

  const scaleToWidth = props.scaleToW ?? 1024;
  const scaleToHeight = props.scaleToH ?? 1024;

  const imageUrl = props.src ? props.src : props.fallback;
  const proxyUrl = getProxyUrl(imageUrl ?? "", {
    height: scaleToHeight,
    width: scaleToWidth,
  });

  const url = proxyUrl ? proxyUrl : imageUrl;

  if (!imageUrl) {
    return (
      <div
        style={{
          ...props.style,
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            color: "red",
            textAlign: "center",
            transform: "rotate(15deg)",
            userSelect: "none",
          }}
        >
          MISSING IMAGE
        </span>
      </div>
    );
  }
  const style = {
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    ...props.style,
  };

  return (
    <>
      <img
        style={{
          ...style,
          display: loaded ? undefined : "none",
          userSelect: "none",
        }}
        alt={props.alt}
        src={url}
        crossOrigin={props.crossOrigin}
        onError={(e) => {
          e.currentTarget.src = props.fallback ?? "";
        }}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && !props.disableSkeleton && (
        <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
      )}
    </>
  );
};
