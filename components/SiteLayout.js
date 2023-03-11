import Head from 'next/head'
import Link from 'next/link';
import NavBar from "./NavBar";

const name = 'Long Tran';
export const siteTitle = 'Next.js Sample Website';
export default function Layout({ children, home, darkModeToggle, darkMode }) {
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
            </Head>
            <main className="relative w-screen min-h-screen flex flex-col dark:bg-gray-900">
                <NavBar darkModeToggle={darkModeToggle} darkMode={darkMode}/>
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