import React from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
import { WordField } from './wordfield';
import { History } from './history';
import { KeyboardComponent } from './keyboard';
import { Guess } from '../types';
import { similarity } from '../utils';

export interface GameProps {
    gamekey: string|null;
    daily: boolean;
  }

async function fetchWeights(word:string|null):Promise<Array<number>|null> {
  console.log('fetching');
  const { data } = await axios(`/word2vec/${word}.csv`);

  const arrayWeights = data.split(';').map(Number);

  return arrayWeights;
}

export function Game(props: GameProps) {
  const { gamekey, daily } = props;
  const [history, setHistory] = React.useState<Array<Guess>>([]);
  const [letters, setLetters] = React.useState<string>('');

  const result = useQuery(
    letters || 'null',
    () => fetchWeights(letters),
    { enabled: false },
  );

  const keyWord = useQuery(
    'daily',
    () => fetchWeights(gamekey),
  );

  function submit() {
    result.refetch();
  }

  function wordExist(weights:Array<number>) {
    const newGuess = {
      word: letters,
      score: similarity(weights, keyWord.data || []),
    };
    setHistory([...history, newGuess]);
    setLetters('');
  }

  const submitCallback = React.useCallback(submit, [letters, history]);

  React.useEffect(() => {
    if (result.data) {
      wordExist(result.data);
    }
  }, [result.data]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyItems="center"
      alignItems="center"
    >
      <WordField letters={letters} />
      <History history={history} />
      <KeyboardComponent setLetters={setLetters} letters={letters} submit={submitCallback} />
    </Box>
  );
}
