import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';

export default function blog({allPostsData}) {
    return (
        <>
        <div className='flex flex-col grow justify-center text-center dark:text-slate-50'>
            {/* Display blog posts */}
            <section>
                <h2 className="dark:text-orange-500">My Blog</h2>
                <ul>
                {allPostsData.map((post) => (
                    <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.details.title}</Link>
                    <br />
                    <small >
                        <Date dateString={post.details.date} />
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
    const allPostsData = getSortedPostsData("/content/posts");
    return{
      props: {
        allPostsData: allPostsData
      },
    }
  }