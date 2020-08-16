import { useReducer, createContext } from 'react'

const initialState = {
  name: 'apple',
  color: 'red',
  price: 500,
  from: 'aomori',
  number: 80
}

export const Store = createContext(initialState)

const reducer = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}



export default ({children}) => {

  //const [store, dispatch] = useReducer(reducer, initialState)

  return (
  <Store.Provider value={{store: 'apple'}}>
    {children}
  </Store.Provider>

  )
}
