import React from 'react';

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import styles from './styles.module.scss';

const SectionResult = ({ result }) => {
  return (
    <div className={styles.sectionWrapper}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              -
            </Avatar>
          }
          title={`Specime #${result.id}`}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={styles.media}
          image={result.image}
          title={result.name}
        />
        <CardContent>
          <Typography variant="h3" className={styles.cardContentTitle}>
            {result.name}
          </Typography>

          <Typography variant="overline" className={styles.cardContentSubTitle}>INGREDIENTS</Typography>
          <List dense={true}>
            {result.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={ingredient}
                />
              </ListItem>
            ))}
          </List>

          <Divider />
          <Typography variant="overline" className={styles.cardContentSubTitle}>CALORIES</Typography>
          <Typography variant="h4" className={styles.cardContentH4}>
            {result.calories}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionResult;
