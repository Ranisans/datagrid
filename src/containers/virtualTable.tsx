import React, {
  useState, useRef, useEffect,
} from 'react';

import Header from './header';
import { VirtualTablePropsType } from './types';
import BodyContainer from './bodyContainer';


const useScrollAware = (): [number, any] => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const ref = useRef<HTMLInputElement>();

  const onScroll = (e: any) => requestAnimationFrame(() => {
    setScrollTop(e.target.scrollTop);
  });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref && ref.current) {
      const scrollContainer = ref.current;

      setScrollTop(scrollContainer.scrollTop);
      scrollContainer.addEventListener('scroll', onScroll);
      return () => scrollContainer.removeEventListener('scroll', onScroll);
    }
  }, []);

  return [scrollTop, ref];
};

const VirtualTable = ({
  rows, rowHeight, styles, viewportHeight, columns,
}: VirtualTablePropsType) => {
  const rowsCount = rows.length;
  const totalHeight = rowsCount * rowHeight;
  const renderAhead = 20;

  const [scrollTop, ref] = useScrollAware();

  let startNode = Math.floor(scrollTop / rowHeight) - renderAhead;
  startNode = Math.max(0, startNode);

  let visibleNodesCount = Math.ceil(viewportHeight / rowHeight) + 2 * renderAhead;
  visibleNodesCount = Math.min(rowsCount - startNode, visibleNodesCount);

  const offsetY = startNode * rowHeight;

  const visibleRows = new Array(visibleNodesCount)
    .fill(null)
    .map((_, index) => rows[startNode + index]);

  return (
    <div className={styles.table} ref={ref}>
      <Header columns={columns} classes={styles} rowHeight={rowHeight} />
      <div
        className="viewport"
        style={{
          willChange: 'transform',
          height: totalHeight,
          position: 'relative',
        }}
      >
        <div style={{
          willChange: 'transform',
          transform: `translateY(${offsetY}px)`,
        }}
        >
          <BodyContainer rows={visibleRows} rowHeight={rowHeight} styles={styles} />
        </div>
      </div>
    </div>
  );
};

export default VirtualTable;
