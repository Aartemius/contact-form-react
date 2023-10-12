import { FC } from 'react';
import { Link } from "react-router-dom";
import Image from '../parts/Image';

interface HeaderNavMenuProps {
  isMobileNavVisible: boolean;
  onCloseClick: () => void;
}

const HeaderNavMenu: FC<HeaderNavMenuProps> = ({ isMobileNavVisible, onCloseClick }) => {
  
  return (
    <nav className={ `header-nav ${ isMobileNavVisible ? 'open' : '' }` }>
      <Image
        src="/images/closeIcon.svg"
        alt="close"
        width='25px'
        height='25px'
        className='close-icon'
        onClick={onCloseClick}
      />
      <ul className="flex">
        <li>
          <Link
            to="/"
            className={`text-2xl text-white font-bold logo-link`}
          >
            Logo Here
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/">
            <span className="mr-1">Features</span>
            <Image
              src="/images/arrowDown.svg"
              alt="dropdown"
              width='9px'
              height='9px'
              className="inline"
            />
          </Link>
        </li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li className="flex items-center">
          <Link
            to="/"
            className="mr-7 flex justify-center items-center"
            style={{ 
              padding: '6px',
              borderRadius: '50%',
              border: '1px solid #000',
              width: '35px',
              height: '35px'
            }}
          >
            <Image
              src="/images/profileIcon.svg"
              alt="profile"
              width='20px'
              height='20px'
            />
          </Link>
          <Link
            to="/"
            className="flex justify-center items-center"
            style={{ 
              padding: '6px',
              borderRadius: '50%',
              border: '1px solid #000',
              width: '35px',
              height: '35px'
            }}
          >
            <Image
              src="/images/cartIcon.svg"
              alt="cart"
              width='20px'
              height='20px'
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavMenu;