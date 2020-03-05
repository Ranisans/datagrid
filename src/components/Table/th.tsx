import React, { useState } from 'react';
import styled from '@emotion/styled';


interface PropsType {
  name: string;
}

const StyledTh = styled.th`
  cursor: pointer;
  user-select: none;      
  div {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
`;

const StyledArrowBlock = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-content: center;

  font-size: 11px;

  color: lightgray;
  margin-left: 0.5rem;
  span {
    height: 1em;
    width: 1em;
    display: inline-block;
    svg {
      fill: currentColor;
    }
  }
  .active {
    color: #1890ff;
  }
`;

const Th = ({ name }: PropsType) => {
  const val = [
    'none',
    'up',
    'down',
  ];

  const [sortValue, setSortValue] = useState(0);

  const clickHandler = () => {
    if (sortValue + 1 >= val.length) {
      setSortValue(0);
    } else {
      setSortValue(sortValue + 1);
    }
  };

  return (
    <StyledTh onClick={clickHandler}>
      <div>
        <span>{name}</span>
        <span>
          <StyledArrowBlock>
            <span className={val[1] === val[sortValue] ? 'active' : undefined}>
              <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em">
                <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" />
              </svg>
            </span>
            <span className={val[2] === val[sortValue] ? 'active' : undefined}>
              <svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em">
                <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
              </svg>
            </span>
          </StyledArrowBlock>
        </span>
      </div>
    </StyledTh>
  );
};


export default Th;
