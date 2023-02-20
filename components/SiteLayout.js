import Head from 'next/head'
import Link from 'next/link';
import { dom } from "@fortawesome/fontawesome-svg-core";
import NavBar from "./NavBar";
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'

const name = 'Long Tran';
export const siteTitle = 'Next.js Sample Website';
export default function Layout({ children, home }) {
    const [darkMode, setDarkMode] = useState(false)
    const darkModeToggle = () => {
        setDarkMode(!darkMode)
        console.log("dark mode is switched: " + darkMode)
    }
    return (
        <div className={darkMode ? "dark":""}>
            <Head>
                <link rel='icon' href='favicon.ico'/>
                <meta 
                    name='description' 
                    content='Learn how to build a personal website using Next.js'
                />
                <meta name='og:title' content={siteTitle}/>
                <meta name='twitter:card' content='summary_large_image'/>
                <style type="text/css">{dom.css()}</style>
            </Head>
            <main className="relative min-h-screen flex flex-col dark:bg-gray-900">
                <NavBar darkModeToggle={darkModeToggle}/>
                <div className='flex flex-col grow'>
                    {children}
                    {!home && (
                        <div> 
                            
                            <Link href="/">← Back to home</Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
        

    )
}