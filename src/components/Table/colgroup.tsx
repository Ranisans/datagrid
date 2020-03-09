import React from 'react';
import StyledCol from './col';

interface PropsType {
  columnsSize: number[];
}

const Colgroup = ({ columnsSize }: PropsType) => (
  <colgroup>
    {columnsSize.map((size, i) => (
      <StyledCol columnSize={size} key={i.toString()} />
    ))}
  </colgroup>
);

export default Colgroup;
