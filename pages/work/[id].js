import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

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
    console.log(postData);
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>  
            <article className='items-center py-12 px-48 dark:text-slate-50'>
                <h1>{postData.title}</h1>
                <div>
                {/* <Date dateString={postData.date} /> */}
                    {postData.date}
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}
                    className='prose prose-lg items-center leading-6 dark:text-slate-50'>
                    {postData.description}
                </ReactMarkdown>
            </article>
        </>
      );
}