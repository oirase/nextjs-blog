import HighOrder from './HighOrder'

const Decrement = ({ color }) => {

  const decrement = () => {
    alert()
  }

  return (
  <button
    style={{background: color}}
    onClick={decrement}>
    decrement
  </button>
  )
}

export default HighOrder(Decrement, 'red')
