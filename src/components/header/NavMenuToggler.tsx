import { FC } from "react";

import Image from "../parts/Image";
import { useScreenSize } from "../../utils/useScreenSize";

interface NavMenuTogglerProps {
  onClick: () => void;
}

const NavMenuToggler: FC<NavMenuTogglerProps> = ({ onClick }) => {
  const { isMobile } = useScreenSize();

  return (
    <>
      {isMobile &&
        <Image
          src="/images/navTogglerIcon.svg"
          alt="cart"
          width='24px'
          height='24px'
          style={{ cursor: 'pointer' }}
          onClick={ onClick }
        />
      }
    </>
  );
}

export default NavMenuToggler;