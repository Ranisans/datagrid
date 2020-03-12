import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface PropsType {
  callback: (value: boolean) => void;
}

const useStyles = makeStyles({
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '21px',

  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    borderRadius: '34px',
    transition: '.4s',

    '&:before': {
      position: 'absolute',
      content: '""',
      height: '15px',
      width: '15px',
      left: '4px',
      bottom: '3px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transition: '.4s',
    },
  },
  input: {
    opacity: 0,
    width: 0,
    height: 0,
    '&:checked + $slider': {
      backgroundColor: '#2196F3',
    },
    '&:focus $slider': {
      boxShadow: '0 0 1px #2196F3',
    },
    '&:checked + $slider:before': {
      transform: 'translateX(16px)',
    },
  },
});

const Switcher = ({ callback }: PropsType) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    callback(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes.switch}>
      <input className={classes.input} type="checkbox" checked={isChecked} onChange={checkHandler} />
      <span className={classes.slider} />
    </label>
  );
};

export default Switcher;
