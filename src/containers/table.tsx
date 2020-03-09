import React from 'react';
import StyledTableWrapper from '../components/tableWrapper';
import StyledTable from '../components/Table/tableBody';
import Colgroup from '../components/Table/colgroup';
import HeaderRow from './headerRow';
import TbodyContainer from './tbodyContainer';
import generateData from '../logic/dataGenerator';


const Table = () => {
  const colSizes = [30, 120, 120, 120, 120, 60, 60, 55, 55, 25];
  const tableHeaderLabels = ['№', 'Name', 'Day of Birth', 'City, Zip code', 'Address', 'Phone', 'Email', 'Deposit', 'Loan', '%'];
  const tableData = generateData();
  return (
    <StyledTableWrapper>
      <StyledTable>
        <Colgroup columnsSize={colSizes} />
        <HeaderRow labels={tableHeaderLabels} />
        <TbodyContainer data={tableData} />
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
