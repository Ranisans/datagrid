import { makeStyles } from '@material-ui/core/styles';

import { ColumnsEnum } from '../logic/logicTypes';

interface StylePropsType {
  gridColumnsSize: string;
}

export const rowHeight = 25;

enum columnId {
  NUMBER = 'number',
  NAME = 'name',
  BIRTH = 'birth',
  CITY = 'city',
  ADDRESS = 'address',
  PHONE_NUM = 'phoneNum',
  EMAIL = 'email',
  DO = 'do',
  BOOL = 'bool',
  DEPOSIT = 'deposit',
  LOAN = 'loan',
  INTEREST_RATE = 'interestRate'
}

export const useStyles = makeStyles({
  table: {
    width: '100%',
    overflow: 'scroll',
    maxHeight: '440px',
    // TODO изменить в мерах высоты
  },
  row: (props: StylePropsType) => ({
    display: 'grid',
    gridTemplateColumns: `${props.gridColumnsSize}`,
    '& > :nth-child(2)': {
      position: 'sticky',
      zIndex: 2,
      left: 0,
    },
  }),
});

export const columns = [
  {
    id: columnId.NUMBER,
    label: '№',
    minWidth: 50,
  },
  {
    id: columnId.NAME,
    label: 'Name',
    minWidth: 120,
  },
  {
    id: columnId.BIRTH,
    label: 'Day of Birth',
    minWidth: 120,
  },
  {
    id: columnId.CITY,
    label: 'City, Zip code',
    minWidth: 120,
  },
  {
    id: columnId.ADDRESS,
    label: 'Address',
    minWidth: 120,
  },
  {
    id: columnId.PHONE_NUM,
    label: 'Phone',
    minWidth: 60,
  },
  {
    id: columnId.EMAIL,
    label: 'Email',
    minWidth: 120,
  },
  {
    id: columnId.DO,
    label: 'Do?',
    minWidth: 120,
  },
  {
    id: columnId.BOOL,
    label: 'True?',
    minWidth: 60,
  },
  {
    id: columnId.DEPOSIT,
    label: 'Deposit',
    minWidth: 55,
  },
  {
    id: columnId.LOAN,
    label: 'Loan',
    minWidth: 55,
  },
  {
    id: columnId.INTEREST_RATE,
    label: '%',
    minWidth: 25,
  },
];

export const columnTypes = {
  [ColumnsEnum.stringColumns]: [
    columnId.NAME, columnId.CITY, columnId.ADDRESS, columnId.EMAIL,
  ],
  [ColumnsEnum.enumColumns]: [columnId.DO],
  [ColumnsEnum.booleanColumns]: [columnId.BOOL],
};
