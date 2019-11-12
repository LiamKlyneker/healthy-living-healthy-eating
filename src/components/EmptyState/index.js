import React from 'react';

import { Typography } from '@material-ui/core';
import styles from './styles.module.scss';

const EmptyState = () => {
  return (
    <div className={styles.emptyWrapper}>
      <Typography variant="body1" color="textSecondary">Try to search Coca Cola, Fries or Pringles</Typography>
    </div>
  );
};

export default EmptyState;
