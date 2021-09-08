import {ReactNode, useState, VFC} from 'react';
import Header from '../components/Header';
import Page from '../components/Page';
import Image from 'next/image';
import H2 from '../components/H2';
import classNames from 'classnames';
import donut1 from '../public/donut-1.png';
import donut2 from '../public/donut-2.png';
import donut3 from '../public/donut-3.png';
import donut4 from '../public/donut-4.png';
import donut5 from '../public/donut-5.png';
import donut6 from '../public/donut-6.png';
import donut7 from '../public/donut-7.png';
import donut8 from '../public/donut-8.png';
import bagelEverything from '../public/bagel-everything.jpg';
import bagelPlain from '../public/bagel-plain.jpg';
import cocoa from '../public/cocoa.jpg';
import coffee from '../public/coffee.jpg';
import croissant from '../public/croissant.jpg';
import orangeJuice from '../public/orange-juice.jpg';

const CATEGORIES: Array<{
  name: string;
  displayName: string;
  items: Array<{
    name: string;
    img: StaticImageData;
  }>;
}> = [
  {
    name: 'donuts',
    displayName: 'Donuts',
    items: [
      {img: donut1, name: 'Baked Carrot Cake'},
      {img: donut2, name: 'Baked Lemon Donuts with Lemo'},
      {img: donut3, name: 'Baked Cinnamon Sugar'},
      {img: donut4, name: 'Baked Funfetti'},
      {img: donut5, name: 'Old Fashioned Powdered Sugar'},
      {img: donut6, name: 'Baked Jelly'},
      {img: donut7, name: 'Chocolate Cake'},
      {img: donut8, name: 'Chocolate Frosted'},
    ],
  },
  {
    name: 'drinks',
    displayName: 'Drinks',
    items: [
      {img: coffee, name: 'Coffee'},
      {img: cocoa, name: 'Cocoa'},
      {img: orangeJuice, name: 'Orange Juice'},
    ],
  },
  {
    name: 'bagels',
    displayName: 'Bagels',
    items: [
      {img: bagelEverything, name: 'Everything Bagel'},
      {img: bagelPlain, name: 'Plain Bagel'},
    ],
  },
  {
    name: 'sandwiches',
    displayName: 'Sandwiches',
    items: [{img: croissant, name: 'Ham, Egg, and Cheese Croissant'}],
  },
];

const Menu: VFC = () => {
  const [activeCategoryName, setActiveCategory] = useState<string>(
    CATEGORIES[0].name
  );
  return (
    <>
      <Header />
      <Page>
        <h1 className="col-span-12 text-6xl text-center font-cursive">Menu</h1>
        <div className="col-span-12 md:text-2xl text-center">
          Et iure distinctio quaerat accusamus. Amet laboriosam et. Maiores
          distinctio ut.
        </div>
        <nav className="col-span-10 col-start-2 text-center text-xl pb-4 space-x-2 md:space-x-0 md:grid grid-cols-4 gap-20">
          {CATEGORIES.map(category => (
            <button
              className={classNames(
                'hover:underline hover:text-brand-pink-400',
                {
                  'underline': category.name === activeCategoryName,
                  'text-brand-pink-400': category.name === activeCategoryName,
                }
              )}
              style={{
                textUnderlineOffset: '.25rem',
                textDecorationColor: 'currentColor',
                textDecorationThickness: '8px',
              }}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.displayName}
            </button>
          ))}
        </nav>
        {CATEGORIES.map(
          category =>
            category.name === activeCategoryName && (
              <section
                key={category.name}
                id={category.name}
                className="col-span-10 col-start-2"
              >
                <div className="md:grid grid-cols-4 gap-20">
                  {category.items.map(item => (
                    <div
                      key={item.name}
                      className="border border-brand-blue-400 bg-brand-blue-100 shadow-lg p-4 rounded space-y-2"
                    >
                      <div
                        className="relative w-full"
                        style={{aspectRatio: '1 / 1'}}
                      >
                        <Image
                          src={item.img ?? donut1}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>

                      <div className="font-bold">{item.name}</div>
                      <div>
                        Debitis repellendus et natus architecto dolores velit
                        quod ut possimus.
                      </div>
                      <div className="font-bold">$1.50</div>
                    </div>
                  ))}
                  <div className="flex-initial" />
                </div>
              </section>
            )
        )}
      </Page>
    </>
  );
};
export default Menu;
