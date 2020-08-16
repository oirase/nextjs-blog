const themes = {
 light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.crateContext(themes.light)

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    <ThemeContext>
    )
}

const Toolbar(props) => {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

const ThemeButton = () => {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
       I am styled by theme context!
    </button>
  )
}

export default App
