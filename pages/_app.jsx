import MainPage from "./Layout/main";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';

import "../styles/global.css";
import "../styles/keyframes.css";
import "../styles/animations.css";

const theme = createTheme({
  status: {
    danger: "rgb(255, 174, 94)",
  },
  palette: {
    primary: {
      main: "rgb(255, 174, 94)",
    },
    secondary: {
      main: "rgb(204,102,0)",
    },
    error: {
      main: "rgb(255, 0, 0)",
    }
  },
  typography: {
    fontFamily: [
      'Fuzzy Bubbles',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <MainPage />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
