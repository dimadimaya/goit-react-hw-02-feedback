import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            className={styles.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
