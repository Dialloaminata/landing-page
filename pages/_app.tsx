import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { AppProps } from "next/app";
import { Localization } from "../providers/i18n";

function MyApp({ Component, pageProps: { initialLang, ...props } }: AppProps) {
  return (
    <Localization initialLang={initialLang}>
      <Component {...props} />
    </Localization>
  );
}

export default MyApp;
