import styled from '@emotion/styled';
import { CellType } from './types';

const Cell = styled('td')<CellType>(
  {
    display: 'table-cell',
    height: '1.5rem',
    padding: '0 0.25rem',
    borderRight: 'solid gray 1px',
    borderBottom: '1px solid gray',
    boxSizing: 'border-box',
  },
  (props) => ({
    width: `${props.size}rem`,
  }),
);

export default Cell;
