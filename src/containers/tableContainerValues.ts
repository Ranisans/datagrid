import { makeStyles } from '@material-ui/core/styles';

import { ColumnsEnum } from '../logic/logicTypes';

interface StylePropsType {
  gridColumnsSize: string;
  hiddenColumn: Set<string>;
}

export const rowHeight = 25;

enum columnId {
  CHECK = 'check',
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
    '& > :nth-child(3)': {
      position: 'sticky',
      zIndex: 2,
      left: 0,
    },
  }),
  check: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.CHECK) ? 'none' : 'block'}`,
  }),
  number: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.NUMBER) ? 'none' : 'block'}`,
  }),
  name: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.NAME) ? 'none' : 'block'}`,
  }),
  birth: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.BIRTH) ? 'none' : 'block'}`,
  }),
  city: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.CITY) ? 'none' : 'block'}`,
  }),
  address: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.ADDRESS) ? 'none' : 'block'}`,
  }),
  phoneNum: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.PHONE_NUM) ? 'none' : 'block'}`,
  }),
  email: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.EMAIL) ? 'none' : 'block'}`,
  }),
  do: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.DO) ? 'none' : 'block'}`,
  }),
  bool: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.BOOL) ? 'none' : 'block'}`,
  }),
  deposit: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.DEPOSIT) ? 'none' : 'block'}`,
  }),
  loan: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.LOAN) ? 'none' : 'block'}`,
  }),
  interestRate: (props: StylePropsType) => ({
    display: `${props.hiddenColumn.has(columnId.INTEREST_RATE) ? 'none' : 'block'}`,
  }),
});

export const columns = [
  {
    id: columnId.CHECK,
    label: '',
    minWidth: 50,
  },
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
