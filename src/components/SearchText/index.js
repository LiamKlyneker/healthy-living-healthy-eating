import React, { useState, useEffect } from 'react';

import { TextField, List, ListItem, ListItemText } from '@material-ui/core';
import styles from './styles.module.scss';

import inputList from '../../input-list';

const SeachText = ({ setItemToResult }) => {
  /* States */
  const [searchText, setSearchText] = useState('');
  const [openList, setOpenList] = useState(false);
  const [list, setList] = useState({});

  /* Effects */
  useEffect(() => {
    filterResults(searchText);
  }, [searchText]);

  /* Methods */
  const filterResults = () => {
    const listToFilter = [...inputList].filter(item => item.name.toUpperCase().indexOf(searchText.toUpperCase()) >= 0)
    setList(listToFilter);
  };

  const handleOptionClick = item => {
    setSearchText(item.name);
    setOpenList(false);
    setItemToResult(item);
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <TextField
          id="searchText"
          variant="outlined"
          label="Search your favorite junk food"
          value={searchText}
          onChange={event => {
            setOpenList(true);
            setSearchText(event.target.value)
          }}
          fullWidth
          name="junk-food"
        />
        {openList && (
          <div className={styles.input__list}>
            <List component="nav">
              {list.map(item => (
                <ListItem button onClick={() => handleOptionClick(item)}>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeachText;
