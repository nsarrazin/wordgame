import React from 'react';
import { Box, Button } from '@mui/material';
import { Stats } from './stats';

export interface LandingProps {
  setStatus: (status:string) => void;
}

export function Landing(props: LandingProps) {
  const { setStatus } = props;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" height="80vh">
      <h1>Word Guesser</h1>
      <Button variant="contained" sx={{ margin: '0 auto' }} onClick={() => (setStatus('daily'))}>
        Play the Daily
      </Button>
      <Stats />
      <Button variant="contained" color="secondary" sx={{ margin: 'auto' }}>
        Create a challenge
      </Button>
    </Box>
  );
}
