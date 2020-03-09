import React from 'react';
import StyledThead from '../components/Table/thead';
import Th from '../components/Table/th';
import StyledTr from '../components/Table/tr';


interface PropsType {
  labels: string[];
}

const HeaderRow = ({ labels }: PropsType) => (
  <StyledThead>
    <StyledTr>
      {labels.map((label, i) => (
        <Th name={label} key={i.toString()} />
      ))}
    </StyledTr>
  </StyledThead>
);

export default HeaderRow;
