
export default (WrappedComponent, color) => {
  return (props) => {
    return <WrappedComponent color={color} {...props}/>
  }
}
