import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Cell from './cell';
import { ObjectCellType } from './types';

const useStyles = makeStyles({
  flex: {
    width: '95%',
    display: 'inline-flex',
    justifyContent: 'space-between',
  },
});

const ObjectCell = ({ value }: ObjectCellType) => {
  const classes = useStyles();
  const newValue = typeof value.meaning === 'number' ? value.meaning.toLocaleString('ru-RU') : value;
  return (
    <Cell>
      <div className={classes.flex}>
        <div>{newValue}</div>
        <div>{value.label}</div>
      </div>
    </Cell>
  );
};

export default ObjectCell;
