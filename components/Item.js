import { useContext } from 'react'
import { Store } from './Store'

export default () => {
  //const { store, dispatch } = useContext(Store)
  const { store, dispatch } = useContext(Store)
  return (
    <>
      <p>{store.name}</p>
      {/*<p>{store}</p>*/}
      <button onClick={()=>{dispatch({name:'orange'})}}>changeName</button>
    </>

  )
}
