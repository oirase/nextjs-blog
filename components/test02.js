const Parent = () => {
  return <Child render={(data) => <GrandChild data={data} />} />
}

const Child = (props) => {
  return (
    {props.render()}
  )
}

const GrandChild = (props) => {
  <p>{props.data}</p>
}



const GrandChild = (props) => {
  <p>{props.data}</p>
}


const Parent = () => {
  return <Child render={<GrandChild data={data} />} />
}

const Child = (props) => {
  return (
    {props.render}
  )
}
