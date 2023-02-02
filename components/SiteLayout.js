import Head from 'next/head'
import Link from 'next/link';
import { dom } from "@fortawesome/fontawesome-svg-core";
import NavBar from "./NavBar";

const name = 'Long Tran';
export const siteTitle = 'Next.js Sample Website';
export default function Layout({ children, home }) {
    return (
        <div>
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
            <main className="relative min-h-screen flex flex-col bg-green-100">
                <NavBar />
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