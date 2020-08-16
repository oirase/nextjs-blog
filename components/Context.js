import { useContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "red"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App({children}) {
  return (
    <ThemeContext.Provider value={themes.dark}>
      {children}
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);  return (    <button style={{ background: theme.background, color: theme.foreground }}>      I am styled by theme context!    </button>  );
}

export default App
