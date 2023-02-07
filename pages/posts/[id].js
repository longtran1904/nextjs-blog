import Layout from '../../components/SiteLayout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';


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
            <article className='items-center py-4 px-48'>
                <h1>{postData.title}</h1>
                <div>
                <Date dateString={postData.date} />
                </div>
                <div className='items-center mt-8' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </>
      );
}