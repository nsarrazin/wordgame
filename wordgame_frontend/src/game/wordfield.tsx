import React from 'react';
import { Box } from '@mui/material';
import { Letter } from './letter';

export interface WordFieldProps{
    letters : string
}

export function WordField(props:WordFieldProps) {
  const { letters } = props;

  return (
    <Box display="flex" flexDirection="row" alignContent="center">
      <h3>(</h3>
      {letters.split('').map((el, idx) => <Letter key={`key-${el}-${idx.toString()}`} el={el} />)}
      <h3>)</h3>
    </Box>
  );
}
