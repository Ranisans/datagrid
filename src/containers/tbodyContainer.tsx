import React from 'react';

import StyledTbody from '../components/Table/tbody';
import { RowType } from '../types/rowType';
import Row from './row';

interface PropsType {
  data: RowType[];
}

const TbodyContainer = ({ data }: PropsType) => (
  <StyledTbody>
    {data.map((rowData, i) => (
      <Row data={rowData} key={i.toString()} />
    ))}
  </StyledTbody>
);

export default TbodyContainer;
