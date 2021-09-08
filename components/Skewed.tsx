import {FC} from 'react';
import classNames from 'classnames';

const Skewed: FC<{bgColors?: [string, string]}> = ({
  bgColors = ['bg-brand-pink-200', 'bg-brand-yellow-200'],
  children,
}) => (
  <div className={classNames('transform skew-x-1 -skew-y-1', bgColors[0])}>
    <div className={classNames('transform -skew-x-3 skew-y-3', bgColors[1])}>
      <div className="skew-x-1 -skew-y-1 p-4">{children}</div>
    </div>
  </div>
);

export default Skewed;
