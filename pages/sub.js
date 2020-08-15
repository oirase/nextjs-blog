import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>sub | {siteTitle}</title>
        </Head>
        <p>sub</p>
        <Link href="/">
          <a>index</a>
        </Link>
      </div>
    </Layout>
  )
}
