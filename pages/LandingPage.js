
import Link from 'next/link';
import Date from '../components/date';

export default function LandingPage({allPostsData, taglines}) {
    return (
        <div className='flex flex-col min-h-screen justify-center'>
            <div className='relative mx-20 w-50 text-center py-20'>
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
      </div>
    )
}