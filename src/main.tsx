import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./AppRoutes.tsx";
import { BrowserRouter } from "react-router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { DataContextProvider } from "./contexts/DataContextProvider.tsx";
import { ThemeProvider } from "@emotion/react";
import { saddlebackTheme } from "./themes/saddleback.ts";
import { ImageProxyContextProvider } from "./contexts/ImageProxyContextProvider.tsx";

const url = `/cdn-cgi/image/compression=fast,format=webp,metadata=none//favicon.png`;
fetch(url)
  .then((response) => {
    renderRoot(
      response.ok &&
        Boolean(response.headers.get("Content-Type")?.startsWith("image/")),
    );
  })
  .catch(() => {
    renderRoot(false);
  });

const renderRoot = (imgProxyEnabled: boolean) => {
  console.log("Image Proxy Enabled:", imgProxyEnabled);
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ImageProxyContextProvider isEnabled={imgProxyEnabled}>
        <DataContextProvider>
          <ThemeProvider theme={saddlebackTheme}>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </DataContextProvider>
      </ImageProxyContextProvider>
    </StrictMode>,
  );
};
