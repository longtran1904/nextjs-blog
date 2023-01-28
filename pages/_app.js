import '../styles/globals.css';
import '../styles/index.css';
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}