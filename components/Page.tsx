import {FC} from 'react';
import Footer from './Footer';

const Page: FC = ({children}) => (
  <div className="flex flex-col min-h-screen pt-24">
    <div className="flex-grow flex flex-col justify-center">
      <div className="md:grid grid-cols-12 gap-20 px-4">{children}</div>
    </div>
    <div className="text-sm p-4">
      <Footer />
    </div>
  </div>
);

export default Page;
