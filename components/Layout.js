import Head from 'next/head'

export const siteTitle = 'next sample'

export default ({ children }) => {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header>
        <h1>{siteTitle}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
