import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Card from "../components/Card";
import Head from "next/head";

export default function blog({allPostsData}) {
    return (
        <>
        <Head>
            <title>My Blog</title>
        </Head>
        <div className='ml-12 mr-12 lg:ml-24 lg:mr-60 py-12 flex flex-col grow dark:text-slate-50'>
            {/* Display blog posts */}
            <section>
                <h2 className="font-burtons dark:text-orange-500">my blog</h2>
                <ul>
                {allPostsData.map((post) => (
                    <Card param="posts" info={post}/>
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