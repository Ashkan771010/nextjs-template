import { ThemeProvider } from "styled-components";
import theme from "../theme/ui-constants";
import CssReset from "../theme/ui-constants/css-reset";
import { FontFamily } from "../theme/ui-constants";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssReset />
        <FontFamily />
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
