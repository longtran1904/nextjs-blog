import '../styles/globals.css';
import Layout from '../components/SiteLayout';
import { useState } from 'react';


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
