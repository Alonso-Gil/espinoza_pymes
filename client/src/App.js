import React from 'react';
import AppRouter from './routes/AppRouter';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from 'notistack';

// Redux 
import { Provider } from 'react-redux';
import store from './redux/store';

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
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <AppRouter />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
