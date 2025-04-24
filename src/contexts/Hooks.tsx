import { useContext } from "react";
import { DataContext, ImageProxyContext } from "./Contexts";

export const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export const useImageProxy = () => {
  const context = useContext(ImageProxyContext);
  return context;
};
