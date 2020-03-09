import styled from '@emotion/styled';

interface PropsType {
  columnSize: number;
}

const StyledCol = styled('col')<PropsType>(
  (props) => ({
    width: `${props.columnSize}px`,
    minWidth: `${props.columnSize}px`,
  }),
);

export default StyledCol;
