import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import mdToReact from '../../lib/MdtoReact';

export async function getStaticPaths() {
  const paths = getAllPostIds('/content/work');
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({params}){
    const postData = await getPostData(params.id, '/content/work');
    return {
        props:{
            postData,
        }
    }
}
export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>  
            <article className='items-center py-4 px-48 dark:text-slate-50'>
                <h1>{postData.title}</h1>
                <div>
                {/* <Date dateString={postData.date} /> */}
                    {postData.date}
                </div>
                <div className='items-center mt-8 leading-6 dark:text-slate-50'>{mdToReact(postData.description)}</div>
            </article>
        </>
      );
}