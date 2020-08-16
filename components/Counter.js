import { useContext, useReducer } from 'react'
import { ThemeContext } from './Context'
import Basket from './Basket'
/*
const initialState = {count: 0}

const initialCount = 0

const init = (initialCount) => {
  return {count: initialCount}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}
*/
export default () => {
  //const [state, dispatch] = useReducer(reducer, initialState)
  const {state, dispatch} = useContext(ThemeContext)

  return (
    <>
      <Basket />
      {/*<p style={{ background: theme.background, color: theme.foreground }}>theme</p>*/}
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: 0})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  )
}
