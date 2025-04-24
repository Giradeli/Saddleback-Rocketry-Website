import {
  defaultProxyUrlOptions,
  GetProxyUrlOptions,
  ImageProxyContext,
} from "./Contexts";

type Props = {
  children?: React.ReactNode;
  isEnabled: boolean;
};

export const ImageProxyContextProvider = ({ isEnabled, children }: Props) => {
  const baseProxyUrl = "/cdn-cgi/image/";

  const getProxyUrl = (url: string, options?: GetProxyUrlOptions) => {
    if (!isEnabled) {
      return undefined;
    }
    const opts: GetProxyUrlOptions = {
      ...defaultProxyUrlOptions,
      ...options,
    };

    const optionParams = Object.entries(opts).filter(
      ([key, value]) => key && value,
    );

    const urlParams = new URLSearchParams();
    for (const [k, v] of optionParams) {
      urlParams.append(k, v);
    }

    const proxyUrl =
      baseProxyUrl + `${urlParams.toString().replaceAll("&", ",")}` + `/${url}`;

    return proxyUrl;
  };

  return (
    <ImageProxyContext.Provider value={{ isEnabled, getProxyUrl }}>
      {children}
    </ImageProxyContext.Provider>
  );
};
