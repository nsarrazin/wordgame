import React from 'react';
import './App.css';
import {
  CssBaseline, ThemeProvider, Box,
} from '@mui/material';

import { createTheme } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import { signInAnonymously } from '@firebase/auth';
import { useMountEffect } from '@react-hookz/web';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Landing } from './lobby/landing';
import { Game } from './game/game';
import { validate } from './utils';

import { auth } from './firebase';

const theme = createTheme({
  palette: {
    primary: {
      light: '#63b8ff',
      main: '#0989e3',
      dark: '#005db0',
      contrastText: '#000',
    },
    secondary: {
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
});
const queryClient = new QueryClient();

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get('key');

  const [status, setGameStatus] = React.useState<string>(validate(key) ? 'challenge' : 'lobby');

  useMountEffect(() => { signInAnonymously(auth); });

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Box sx={{
            margin: 'auto', maxWidth: '500px', width: '100%', textAlign: 'center', minHeight: '80vh',
          }}
          >
            {status === 'lobby'
              ? <Landing setStatus={setGameStatus} />
              : <Game gamekey={key} daily={status === 'daily'} />}

          </Box>
        </ThemeProvider>
      </CssBaseline>
    </QueryClientProvider>
  );
}

export default App;
