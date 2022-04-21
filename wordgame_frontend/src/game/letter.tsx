import React from 'react';

export interface LetterProps{
    el: string
}

export function Letter(props:LetterProps) {
  const { el } = props;
  return <h3>{el}</h3>;
}
