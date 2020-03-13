import styled from '@material-ui/core/styles/styled';

const border = '1px solid gray';

const Cell = styled('div')({
  height: '1.5rem',
  padding: '0 0.25rem',
  borderRight: border,
  borderBottom: border,
  background: 'white',
});

export default Cell;
