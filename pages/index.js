
import Link from 'next/link';
import ContactBar from '../components/ContactBar';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import HomeData from '../content/home.json'
import Head from 'next/head'

const siteTitle = "Long Tran"

export default function Home({ allPostsData, taglines }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='flex flex-col grow justify-center text-center'>
          <section>
              <h1 className="text-center leading-tight sm:leading-relaxed text-5xl sm:text-6xl font-semibold md:font-bold">
                  Hey! I&rsquo;m <br className="sm:hidden" />
                  <Link href="/about">
                      <span className="text-green-800 ease-in-out duration-300 hover:[text-shadow:-2px_2px_black] hover:cursor-pointer">
                      Long Tran
                      </span>
                  </Link>
                  , a...
              </h1>
              <ul className="flex flex-col items-center">
                  {taglines.map((tagline) => (
                      <li
                      key={tagline.position}
                      className="leading-normal text-md sm:text-lg"
                      >
                      {tagline.position} @{' '}
                      <a
                          href={tagline.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold sm:font-bold hover:underline"
                      >
                          {tagline.place}
                      </a>
                      </li>
                  ))}
              </ul>
          </section>

          <ContactBar/>

          {/* Display blog posts */}
          <section>
              <h2>Blog</h2>
              <ul>
              {allPostsData.map(({ id, date, title }) => (
                  <li key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small >
                      <Date dateString={date} />
                  </small>
                  </li>
              ))}
              </ul>
          </section> 
      </div>
    </>
  )
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
      taglines: HomeData.taglines,
    },
  }
}
