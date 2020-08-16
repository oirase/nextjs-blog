import Link from 'next/link'
import Decrement from '../components/Decrement'
import Increment from '../components/Increment'

export default () => {
  return (
    <>
      <Link href="/">
        <a>index</a>
      </Link>
      <Decrement />
      <Increment />
    </>
  )
}
