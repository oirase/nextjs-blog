
export default (value1, value2) => {
  const value3 = value1 + value2
  return (WrappedComponent) => {
    return (props) => {
      return <WrappedComponent data={value3} {...props} />
    }
  }
}
