import styled from '@emotion/styled';
import { ColType } from './types';

const StyledCol = styled('col')<ColType>(
  (props) => ({
    width: `${props.columnSize}px`,
    minWidth: `${props.columnSize}px`,
  }),
);

export default StyledCol;
