import React from "react";

type Props = {
  alt?: string;
  src?: string;
  fallback?: string;
  style?: React.CSSProperties;
  crossOrigin?: "anonymous" | "use-credentials" | undefined;
};

export const Image = (props: Props) => {
  const imageUrl = props.src ? props.src : props.fallback;

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
    <img
      style={style}
      alt={props.alt}
      src={imageUrl}
      crossOrigin={props.crossOrigin}
      onError={(e) => {
        e.currentTarget.src = props.fallback ?? "";
      }}
    />
  );
};
