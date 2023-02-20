import '../styles/globals.css';
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from '../components/SiteLayout';
import { useState } from 'react';

// Disable the automatic insertion of CSS into head of document
// Because we fixed to render on server side using dom.css from fontawesome
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false)
    const darkModeToggle = () => {
        setDarkMode(!darkMode)
        console.log("dark mode is switched: " + darkMode)
    }
    return (
        <Layout home darkModeToggle={darkModeToggle} darkMode={darkMode}>
            <Component {...pageProps} darkMode={darkMode} />
        </Layout>
    )
}
