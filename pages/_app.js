import '../styles/globals.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from '../components/Layout';

// Disable the automatic insertion of CSS into head of document
// Because we fixed to render on server side using dom.css from fontawesome
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return (
        <Layout home>
            <Component {...pageProps} />
        </Layout>
    )
}
