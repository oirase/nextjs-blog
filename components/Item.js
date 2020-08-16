import { useContext } from 'react'
import { Store } from './Store'

export default () => {
  //const { store, dispatch } = useContext(Store)
  const { store } = useContext(Store)
  return (
    <>
      {/*<p>{store.name}</p>*/}
      <p>{store}</p>
      {/*<button onClick={dispatch({name: 'orane'})}>changeName</button>*/}
    </>

  )
}
