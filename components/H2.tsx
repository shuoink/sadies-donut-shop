import {FC} from 'react';

const H2: FC<JSX.IntrinsicElements['h2']> = props => (
  <h2
    {...props}
    className="font-cursive pb-2 border-b-8 border-current text-4xl"
  />
);

export default H2;
