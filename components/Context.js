import { useContext, useReducer } from 'react'

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

export const ThemeContext = React.createContext(initialState);

function App({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
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
  const theme = useContext(ThemeContext);
  return (    <button style={{ background: theme.background, color: theme.foreground }}>      I am styled by theme context!    </button>  );
}

export default App
