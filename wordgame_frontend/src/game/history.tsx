import React from 'react';
import { Box, Typography } from '@mui/material';
import { Guess } from '../types';

export interface HistoryProps{
    history: Array<Guess>;
}

export function History(props:HistoryProps) {
  const { history } = props;

  return (
    <Box display="flex" flexDirection="column" flexGrow={1} width="100%" padding="0 2rem">
      <h2>History</h2>
      {history.slice(0).reverse().map((el) => {
        const percentage = `${(el.score * 100).toFixed(2)}%`;
        return (
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" sx={{ color: el.score >= 1.0 ? 'green' : 'black' }}>{el.word}</Typography>
            <Typography variant="h5" sx={{ color: el.score >= 1.0 ? 'green' : 'black' }}>{percentage}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
