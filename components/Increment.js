import HighOrder from './HighOrder'

const Increment = ({ color }) => {

  const increment = () => {
    alert()
  }

  return (
  <button
    style={{background: color}}
    onClick={increment}>
    increment
  </button>
  )
}

export default HighOrder(Increment, 'blue')

