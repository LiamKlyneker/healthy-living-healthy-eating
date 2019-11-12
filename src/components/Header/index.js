import React from 'react';

import { Typography } from '@material-ui/core';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Typography variant="h4">
        Healthy Living, Healthy Eating
      </Typography>
    </div>
  );
};

export default Header;
