import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


export async function getStaticPaths() {
  const paths = getAllPostIds('/content/posts');
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({params}){
    const postData = await getPostData(params.id, '/content/posts');
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
            <article className='items-center py-12 px-48 dark:text-slate-50'>
                <h1>{postData.title}</h1>
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                    className='prose prose-lg items-center leading-6'>
                    {postData.description}
                </ReactMarkdown>
            </article>
        </>
      );
}