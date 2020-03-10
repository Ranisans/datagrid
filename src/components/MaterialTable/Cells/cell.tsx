import styled from '@material-ui/core/styles/styled';
import TableCell from '@material-ui/core/TableCell';

const border = '1px solid gray';

const Cell = styled(TableCell)({
  height: '1.5rem',
  padding: '0 0.25rem',
  borderRight: border,
  borderBottom: border,
  background: 'white',
});

export default Cell;
