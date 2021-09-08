import {VFC} from 'react';
import Header from '../components/Header';
import Page from '../components/Page';
import donut5 from '../public/donuts-5.jpg';
import Image from 'next/image';
import Skewed from '../components/Skewed';

const About: VFC = () => (
  <>
    <Header />
    <Page>
      <h1 className="col-span-12 text-6xl text-center font-cursive">About</h1>
      <div
        className="col-start-2 col-span-5 px-2 self-center space-y-8 relative mb-4 md:mb-0"
        style={{aspectRatio: '2 / 1.5'}}
      >
        <Image src={donut5} objectFit="contain" layout="fill" />
      </div>
      <div className="col-span-5 self-center">
        <Skewed>
          <div className="text-3xl space-y-8">
            <p>
              Qui delectus in libero. Officiis dolorem fugit in qui neque quos
              ab unde qui. Aut iusto id voluptatibus voluptas animi mollitia
              dignissimos.
            </p>

            <p>
              Ut veritatis sit illo temporibus. Ipsum libero velit minima
              corporis natus et et ipsa vitae. Nobis fugiat culpa quasi
              dignissimos. Quia ut nihil maxime. Sit natus et ut et itaque et
              similique occaecati.
            </p>

            <p>
              Nemo nemo sapiente quis nihil nostrum facere dicta minima. Omnis
              sunt earum. In dolor at sunt quis sapiente qui dolorum hic.
              Accusamus dolor et id quo mollitia ea sint voluptas rerum.
            </p>
          </div>
        </Skewed>
      </div>
    </Page>
  </>
);

export default About;
