import { useRef, useState, useEffect, useCallback } from 'react';
import styles from '../../../styles/WordsGrid.module.css';

interface Props {
  grid: string[][];
  highlightingChar: string[][];
}

const Grid: React.FC<Props> = (props) => {
  const { grid, highlightingChar } = props;

  const getClassName = (a: string) => {
    switch (a) {
      case 'green':
        return styles.itemGreen;
      case 'orange':
        return styles.itemOrange;
      default:
        return styles.itemGray;
    }
  };

  return (
    <div className={styles.grid}>
      {grid.map((row, j) => {
        return row.map((item, i) => (
          <div
            key={i}
            className={
              highlightingChar[j][i] === 'null'
                ? styles.item
                : getClassName(highlightingChar[j][i])
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
