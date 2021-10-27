import React from 'react';
import AppRouter from './routes/AppRouter';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#184c7c'
      },
      secondary: {
        main: '#ac8b18'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
