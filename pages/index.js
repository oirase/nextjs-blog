import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Layout, {siteTitle} from '../components/Layout'
import Counter from '../components/Counter'
import Context from '../components/Context'
import Basket from '../components/Basket'


const initialState = 0

export default () => {

  const [count, setCount] = useState(initialState)

  return (
    <Layout>
    <Basket />
    <Context>

      <div>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <p>index</p>

        <Counter />
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>+</button>
        <Link href="/sub">
          <a>sub</a>
        </Link>
      </div>
    </Context>
    </Layout>
  )
}
