import { useRef, useState, useEffect, useCallback } from 'react';
import styles from '../../../styles/WordsGrid.module.css';

interface Props {
  grid: string[][];
  highlightingChar: string[][];
}

const Grid: React.FC<Props> = (props) => {
  const { grid, highlightingChar } = props;
  return (
    <div className={styles.grid}>
      {grid.map((row, j) => {
        return row.map((item, i) => (
          <div
            key={i}
            className={
              highlightingChar[j][i] === 'grey'
                ? styles.item
                : styles.itemCompleted
            }
          >
            {item}
          </div>
        ));
      })}
    </div>
  );
};

export default Grid;
