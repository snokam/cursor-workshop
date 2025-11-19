import Theme from "@snokam/core/theme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Theme.Provider>
    <Component {...pageProps} />
  </Theme.Provider>
);

export default App;
