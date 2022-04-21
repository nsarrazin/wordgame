import React from 'react';
import Keyboard, { KeyboardReactInterface } from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { Box } from '@mui/material';
import { useRerender } from '@react-hookz/web';

export interface KeyboardProps{
    letters: string
    setLetters : (letters:string) => void;
    submit: () => void;
}

export function KeyboardComponent(props:KeyboardProps) {
  const { letters, setLetters, submit } = props;
  const keyboardRef = React.useRef<KeyboardReactInterface | null>(null);

  const onKeyPressFunc = (button: string): void => {
    if (button === '{ent}' && letters !== '') {
      submit();
      keyboardRef.current!.clearInput();
    }
  };

  const onChangeInput = (event: string): void => {
    setLetters(event);
  };

  const keypressListener = (e:KeyboardEvent) => {
    if (letters !== '') {
      if (e.key === 'Backspace') {
        const newLetters = letters.slice(0, letters.length - 1);
        setLetters(newLetters);
        keyboardRef.current!.setInput(newLetters);
      }
      if (e.key === 'Enter') {
        submit();
        keyboardRef.current!.clearInput();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', keypressListener);
    return () => window.removeEventListener('keydown', keypressListener);
  }, [letters]);

  return (
    <Box maxHeight="30vh" maxWidth="500px" width="100vw" position="absolute" bottom={0}>
      <Keyboard
        keyboardRef={(r) => { keyboardRef.current = r; }}
        input={letters}
        layout={{
          default: [
            'q w e r t y u i o p',
            'a s d f g h j k l',
            'z x c v b n m {bksp}',
            '{ent}',
          ],
        }}
        display={{
          '{bksp}': '⌫',
          '{ent}': 'submit',
        }}
        onChange={onChangeInput}
        onKeyPress={onKeyPressFunc}
        physicalKeyboardHighlight
        physicalKeyboardHighlightPress
        physicalKeyboardHighlightBgColor="#9ab4d0"
      />
    </Box>
  );
}
