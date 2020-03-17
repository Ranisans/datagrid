import { makeStyles } from '@material-ui/core/styles';

import { ColumnsEnum } from '../logic/logicTypes';

interface StylePropsType {
  gridColumnsSize: string;
  hiddenColumn: Set<number>;
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
  number: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(0) ? 'none' : 'block'}`,
  }),
  name: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(1) ? 'none' : 'block'}`,
  }),
  birth: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(2) ? 'none' : 'block'}`,
  }),
  city: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(3) ? 'none' : 'block'}`,
  }),
  address: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(4) ? 'none' : 'block'}`,
  }),
  phoneNum: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(5) ? 'none' : 'block'}`,
  }),
  email: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(6) ? 'none' : 'block'}`,
  }),
  do: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(7) ? 'none' : 'block'}`,
  }),
  bool: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(8) ? 'none' : 'block'}`,
  }),
  deposit: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(9) ? 'none' : 'block'}`,
  }),
  loan: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(10) ? 'none' : 'block'}`,
  }),
  interestRate: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(11) ? 'none' : 'block'}`,
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
    minWidth: 180,
  },
  {
    id: columnId.BIRTH,
    label: 'Day of Birth',
    minWidth: 120,
  },
  {
    id: columnId.CITY,
    label: 'City, Zip code',
    minWidth: 240,
  },
  {
    id: columnId.ADDRESS,
    label: 'Address',
    minWidth: 240,
  },
  {
    id: columnId.PHONE_NUM,
    label: 'Phone',
    minWidth: 160,
  },
  {
    id: columnId.EMAIL,
    label: 'Email',
    minWidth: 220,
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
    minWidth: 120,
  },
  {
    id: columnId.LOAN,
    label: 'Loan',
    minWidth: 120,
  },
  {
    id: columnId.INTEREST_RATE,
    label: '%',
    minWidth: 40,
  },
];

export const columnTypes = {
  [ColumnsEnum.stringColumns]: [
    columnId.NAME, columnId.CITY, columnId.ADDRESS, columnId.EMAIL,
  ],
  [ColumnsEnum.enumColumns]: [columnId.DO],
  [ColumnsEnum.booleanColumns]: [columnId.BOOL],
};
