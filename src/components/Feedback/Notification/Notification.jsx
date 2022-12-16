import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
