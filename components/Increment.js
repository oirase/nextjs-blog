import HighOrder from './HighOrder'
import Connect from './Connect'

const Increment = ({ color, data }) => {

  const increment = () => {
    alert()
  }

  return (
    <>
      <p>{data}</p>
      <button
        style={{background: color}}
        onClick={increment}>
        increment
      </button>
    </>
  )
}

export default Connect(10, 20)(HighOrder(Increment, 'blue'))

