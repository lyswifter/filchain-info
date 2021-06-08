import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title className="titleview">{siteTitle}</title>
      </Head>

    </Layout>
  )
}