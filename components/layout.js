import Head from 'next/head'
import Image from 'next/image';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Header from './Header';
import NavBar from './NavBar';
import { dom } from "@fortawesome/fontawesome-svg-core";

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
                    <meta
                        property="og:image"
                        content={`https://og-image.vercel.app/${encodeURI(
                            siteTitle,
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name='og:title' content={siteTitle}/>
                    <meta name='twitter:card' content='summary_large_image'/>
                    <style type="text/css">{dom.css()}</style>
                </Head>
                {/* <header className={styles.header}>
                    {home ? (
                        <>
                            <Header/>
                            <Image
                                priority
                                src="/images/profile.jpeg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt="Page Title"
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>

                        </>
                    ) : (
                        <>
                            <Link href="/">
                            <Image
                                priority
                                src="/images/profile.jpeg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt="Page Title"
                            />
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                            </h2>
                        </>
                    )}
                </header> */}
                <div className="relative min-h-screen flex flex-col">
                    <NavBar/>
                    <div className='flex-1 bg-white'>
                        <main>{children}</main>
                        {!home && (
                            <div className={styles.backToHome}> 
                                <Link href="/">← Back to home</Link>
                            </div>
                        )}
                    </div>
                </div>
        </div>
        

    )
}