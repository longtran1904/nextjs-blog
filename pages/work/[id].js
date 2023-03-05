import Layout from '../../components/SiteLayout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';


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
                <div className='items-center mt-8 leadning-8 dark:text-slate-50' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
      );
}