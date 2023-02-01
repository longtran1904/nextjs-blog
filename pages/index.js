import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import HomeData from '../content/home.json'

import LandingPage from './LandingPage';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
      taglines: HomeData.taglines,
    },
  }
}

export default function Home( {allPostsData, taglines} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LandingPage allPostsData={allPostsData} taglines={taglines}/>
    </Layout>
  )
}

