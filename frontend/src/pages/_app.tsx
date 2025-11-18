import { theme } from "@snokam/core/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
