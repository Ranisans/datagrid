import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import { addSorting, setSorting } from '../../actions/sortAction';


interface KeyboardEvent {
  shiftKey: boolean;
}
interface StyleTypes {
  width: number;
}

interface PropsType extends StyleTypes{
  label: string;
  reduxKey: string;
  className: string;
}

const useStyles = makeStyles({
  root: (props: StyleTypes) => ({
    width: props.width,
    cursor: 'pointer',
    userSelect: 'none',
    outline: 'none',
    backgroundColor: 'white',
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 0.5rem',
    },
  }),
  arrowBlock: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'center',
    fontSize: '11px',
    color: 'lightgray',
    marginLeft: '0.5rem',
    '& span': {
      height: '1em',
      width: '1em',
      display: 'inline-block',
      '& svg': {
        fill: 'currentColor',
      },
    },
    '& .active': {
      color: '#1890ff',
    },
  },
});

const HeaderCell = ({
  label, width, reduxKey, className,
}: PropsType) => {
  const dispatch = useDispatch();
  const classes = useStyles({ width });

  // TODO вынести во внешний файл
  const val = [
    'none',
    'up',
    'down',
  ];

  const [sortValue, setSortValue] = useState(0);

  const sortState = useSelector((state: any) => state.sorting);

  useEffect(() => {
    const currentSortValue = sortState.sorting.get(reduxKey);
    if (currentSortValue !== undefined) {
      const reduxSortOrder = val.indexOf(currentSortValue);
      if (reduxSortOrder !== sortValue) {
        setSortValue(reduxSortOrder);
      }
    } else if (sortValue !== 0) {
      setSortValue(0);
    }
  }, [sortState, reduxKey, val, sortValue]);

  const clickHandler = (e: KeyboardEvent) => {
    const action = e.shiftKey ? addSorting : setSorting;
    let nextValue = sortValue + 1;
    if (nextValue >= val.length) {
      nextValue = 0;
    }
    setSortValue(nextValue);
    dispatch(action({ sorting: reduxKey, order: val[nextValue] }));
  };

  return (
    <div
      className={`${classes.root} ${className}`}
      onClick={clickHandler}
      onKeyPress={clickHandler}
      role="button"
      tabIndex={-1}
    >
      <div>
        <span>{label}</span>
        <span>
          <span className={classes.arrowBlock}>
            <span className={val[1] === val[sortValue] ? 'active' : undefined}>
              <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em">
                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
              </svg>
            </span>
            <span className={val[2] === val[sortValue] ? 'active' : undefined}>
              <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em">
                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
              </svg>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeaderCell;
