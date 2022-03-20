import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import NavBar from './components/NavBar/Main';
import Grid from './components/Words_Grid/Main';
import { useState, useCallback } from 'react';

const Home: NextPage = () => {
  const [highlightingChar, setHighlightingChar] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array.from({ length: 5 }, () => 'grey'))
  );
  const [focusChar, setFocusChar] = useState<number>(0);
  const [focusRow, setFocusRow] = useState<number>(0);
  const [line, setLine] = useState<string[]>([]);
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
  const word = 'WORDS'.split('');
  const [grid, setGrid] = useState<string[][]>([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);

  const handleKeyDown = useCallback(
    (event) => {
      const copy = [...grid];
      if (
        letters.some((key) => key === event.key.toUpperCase()) &&
        focusChar < 5 &&
        focusRow < 6
      ) {
        copy[focusRow][focusChar] = event.key.toUpperCase();
        setFocusChar(focusChar + 1);
        setLine([...line, event.key.toUpperCase()]);
      } else if (event.key === 'Backspace' && focusChar > -1) {
        if (focusChar < 0) {
          copy[focusRow][focusChar] = '';
        }
        copy[focusRow][focusChar - 1] = '';
        setFocusChar(focusChar - 1);
        let newLine = [...line];
        newLine.pop();
        setLine(newLine);
      } else if (event.key === 'Enter' && focusChar === 5 && focusRow !== 6) {
        let hightlight_copy = [...highlightingChar];
        line.forEach((char, i) => {
          let index = 0;
          let exist = word.some((c) => {
            index = word.indexOf(c);
            return c === char;
          });
          if (exist) {
            if (i === index) {
              hightlight_copy[focusRow][i] = 'green';
            } else {
              hightlight_copy[focusRow][i] = 'orange';
            }
          }
        });
        setHighlightingChar(highlightingChar);
        setFocusRow(focusRow + 1);
        setFocusChar(0);
      }
      setGrid(copy);
      console.log(focusChar);
    },
    [grid, focusChar, focusRow, letters, highlightingChar, line, word]
  );

  return (
    <div className={styles.container} tabIndex={0} onKeyDown={handleKeyDown}>
      <NavBar />
      <Grid grid={grid} highlightingChar={highlightingChar} />
    </div>
  );
};

export default Home;
