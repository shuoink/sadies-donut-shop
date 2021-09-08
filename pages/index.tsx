import {FC, VFC} from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTripadvisor,
  FaTwitter,
  FaYelp,
} from 'react-icons/fa';
import Image from 'next/image';
import donuts1 from '../public/donuts-1.jpg';
import donuts2 from '../public/donuts-2.jpg';
import donuts3 from '../public/donuts-3.jpg';
import donuts4 from '../public/donuts-4.jpg';
import donuts5 from '../public/donuts-5.jpg';
import Header from '../components/Header';
import Page from '../components/Page';
import H2 from '../components/H2';
import Skewed from '../components/Skewed';

const DonutPics = () => (
  <div className="flex flex-row flex-wrap justify-around overflow-hidden max-h-80">
    <div className="m-2 md:m-4">
      <Skewed>
        <div className="w-64 h-64 relative">
          <Image src={donuts1} layout="fill" objectFit="cover" />
        </div>
      </Skewed>
    </div>
    <div className="hidden md:contents">
      <div className="m-2 md:m-4">
        <Skewed>
          <div className="w-64 h-64 relative">
            <Image src={donuts2} layout="fill" objectFit="cover" />
          </div>
        </Skewed>
      </div>
      <div className="m-2 md:m-4">
        <Skewed>
          <div className="w-64 h-64 relative">
            <Image src={donuts3} layout="fill" objectFit="cover" />
          </div>
        </Skewed>
      </div>
      <div className="m-2 md:m-4">
        <Skewed>
          <div className="w-64 h-64 relative">
            <Image src={donuts4} layout="fill" objectFit="cover" />
          </div>
        </Skewed>
      </div>
      <div className="m-2 md:m-4">
        <Skewed>
          <div className="w-64 h-64 relative">
            <Image src={donuts5} layout="fill" objectFit="cover" />
          </div>
        </Skewed>
      </div>
    </div>
  </div>
);

const Hours: FC = () => (
  <table className="w-full">
    <tbody>
      <tr>
        <th scope="row" className="font-normal text-left">
          Monday - Friday
        </th>
        <td className="text-right">6 - 11 AM</td>
      </tr>
      <tr>
        <th scope="row" className="font-normal text-left">
          Saturday
        </th>
        <td className="text-right">6 - 9 AM</td>
      </tr>
      <tr>
        <th scope="row" className="font-normal text-left">
          Sunday
        </th>
        <td className="text-right">Closed</td>
      </tr>
    </tbody>
  </table>
);

const LinkIcon: FC<JSX.IntrinsicElements['a']> = ({...rest}) => (
  <a
    {...rest}
    className="hover:text-brand-blue-800 transform hover:scale-110"
  ></a>
);

const Home: VFC = () => (
  <>
    <Header />
    <Page>
      <div className="col-span-8 px-2 self-center space-y-8">
        <DonutPics />
        <Skewed bgColors={['bg-brand-yellow-200', 'bg-brand-pink-200']}>
          <p className="text-brand-blue-900 md:text-brand-blue-700 md:text-4xl p-2">
            Our sweet and delicious donuts have been handmade for over 20 years.
            We make the dough in-house, hand-cut every donut, fry each donut to
            perfection, and add a sweet frosting to top it off.
          </p>
        </Skewed>
      </div>
      <div className="col-span-4 p-2 space-y-8 self-center text-4xl">
        <section className="py-2">
          <H2>Location</H2>
          <p>
            66574 Altenwerth Street
            <br />
            Lake Felton, Missouri, 09317
          </p>
        </section>
        <section className="py-2">
          <H2>Operating Hours</H2>
          <Hours />
        </section>
        <section className="py-2">
          <H2>Follow Us!</H2>
          <div className="flex space-x-2 pt-2">
            <LinkIcon href="#">
              <FaTwitter />
            </LinkIcon>
            <LinkIcon href="#">
              <FaFacebook />
            </LinkIcon>
            <LinkIcon href="#">
              <FaInstagram />
            </LinkIcon>
            <LinkIcon href="#">
              <FaPinterest />
            </LinkIcon>
            <LinkIcon href="#">
              <FaYelp />
            </LinkIcon>
            <LinkIcon href="#">
              <FaLinkedin />
            </LinkIcon>
            <LinkIcon href="#">
              <FaTripadvisor />
            </LinkIcon>
          </div>
        </section>
      </div>
    </Page>
  </>
);

export default Home;
