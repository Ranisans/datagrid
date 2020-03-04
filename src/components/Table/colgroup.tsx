import React from 'react';
import { ColType } from './types';
import StyledCol from './col';

interface PropsType {
  columnsSize: ColType[];
}

const Colgroup = ({ columnsSize }: PropsType) => (
  <colgroup>
    {columnsSize.map((element, i) => (
      <StyledCol columnSize={element.columnSize} key={i.toString()} />
    ))}
  </colgroup>
);

export default Colgroup;
