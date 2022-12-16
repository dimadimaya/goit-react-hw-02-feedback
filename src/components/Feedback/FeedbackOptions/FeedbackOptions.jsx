import React from 'react';
import styles from './FeedbackOptions.module.css';
export const FeedbackOptions = ({
  handleGoodClick,
  handleNeutralClick,
  handleBadlClick,
}) => {
  return (
    <>
      <button className={styles.btn} type="button" onClick={handleGoodClick}>
        Good
      </button>
      <button className={styles.btn} type="button" onClick={handleNeutralClick}>
        Neutral
      </button>
      <button className={styles.btn} type="button" onClick={handleBadlClick}>
        Bad
      </button>
    </>
  );
};
