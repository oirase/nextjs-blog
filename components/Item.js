import { useContext } from 'react'
import { Store } from './Store'

export default () => {
  const { store, dispatch } = useContext(Store)
  return (
    <>
      <p>{store.name}</p>
      <button onClick={dispatch({name: 'orane'})}>changeName</button>
    </>

  )
}
