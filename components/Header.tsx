import classNames from 'classnames';
import {useRouter} from 'next/dist/client/router';
import {FC, VFC} from 'react';

const NavLink: FC<JSX.IntrinsicElements['a'] & {active?: boolean}> = ({
  active,
  ...rest
}) => (
  <a
    {...rest}
    className={classNames('hover:underline hover:text-brand-pink-400', {
      'underline': active,
      'text-brand-pink-400': active,
    })}
    style={{
      textUnderlineOffset: '.25rem',
      textDecorationColor: 'currentColor',
      textDecorationThickness: '8px',
    }}
  />
);

const Header: VFC = () => {
  const {pathname} = useRouter();
  return (
    <header className="flex flex-col md:flex-row items-center md:items-center justify-between bg-gradient-to-b from-brand-blue-400 to-transparent fixed top-0 right-0 left-0 z-10 p-4 pb-0 select-none">
      <h1 className="font-cursive text-4xl md:text-6xl text-brand-pink-400 whitespace-nowrap">
        Sadie's Donut Shop
      </h1>
      <nav className="space-x-4 md:text-3xl">
        <NavLink href="/" active={pathname === '/'}>
          Home
        </NavLink>
        <NavLink href="/about" active={pathname === '/about'}>
          About
        </NavLink>
        <NavLink href="/menu" active={pathname === '/menu'}>
          Menu
        </NavLink>
        <NavLink href="/contact" active={pathname === '/contact'}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
