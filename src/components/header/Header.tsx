import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import NavMenuToggler from './NavMenuToggler';
import HeaderNavMenu from './HeaderNavMenu';
import './Header.scss';
import { useScreenSize } from '../../utils/useScreenSize';

const Header: FC = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const { isMobile } = useScreenSize();
  const toggleMobileNavMenu = () => setIsMobileNavVisible(!isMobileNavVisible);

  return (
    <header className={ `header ${ isMobile ? 'header-mobile' : 'header-desktop' }` }>
      <div className="header-wrap flex">
        <Link
          to="/"
          className="text-2xl font-bold font-inter"
        >
          Logo Here
        </Link>
        <HeaderNavMenu
          isMobileNavVisible={isMobileNavVisible}
          onCloseClick={toggleMobileNavMenu}
        />
        <NavMenuToggler onClick={toggleMobileNavMenu} />
      </div>
    </header>
  );
};

export default Header;
