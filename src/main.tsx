import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./AppRoutes.tsx";
import { BrowserRouter } from "react-router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Buffer } from "buffer";
import { DataContextProvider } from "./contexts/DataContext.tsx";
import { ThemeProvider } from "@emotion/react";
import { saddlebackTheme } from "./themes/saddleback.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataContextProvider>
      <ThemeProvider theme={saddlebackTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </DataContextProvider>
  </StrictMode>,
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.Buffer = Buffer;
