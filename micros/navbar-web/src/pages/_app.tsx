import type { AppProps } from "next/app";
import { CommonScripts } from "@snokam/core";
import { theme } from "@snokam/core/theme";
import { ThemeProvider } from "@mui/material";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <CommonScripts />
  </ThemeProvider>
);

export default App;
