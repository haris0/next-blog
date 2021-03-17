import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import Layout, { siteTitle } from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export const getStaticProps =async()=>{
  const allPostsData = getSortedPostsData()
  return {
    props:{
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Haris, I have a high interest in Frontend</p>  
        <p>
          This is a simple blog website, the result of starting to learn the next js
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
