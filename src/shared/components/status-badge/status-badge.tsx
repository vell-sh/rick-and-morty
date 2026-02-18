import cn from 'classnames';
import { TStatus } from 'shared/types';

import './status-badge.css';

type TStatusProps = {
  status?: TStatus;
};

export const StatusBadge = ({ status = 'alive' }: TStatusProps) => {
  return <span className={cn('status-badge', { [`status-badge--${status}`]: status })}></span>;
};
