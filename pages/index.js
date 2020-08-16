import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/Layout'
import Counter from '../components/Counter'

export default () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <p>index</p>
        <Counter />
        <Link href="/sub">
          <a>sub</a>
        </Link>
      </div>
    </Layout>
  )
}
