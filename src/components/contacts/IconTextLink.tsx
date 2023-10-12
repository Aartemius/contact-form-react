import { FC } from "react";
import { Link } from "react-router-dom";
import Image from "../parts/Image";

interface IconTextLinkProps {
  linkSpacing?: string;
  mobileIconsAlign?: "items-center" | "items-start";
  linkUrl: string;
  icon: string;
  title: string;
}

const IconTextLink: FC<IconTextLinkProps> = ({
  linkSpacing,
  mobileIconsAlign,
  linkUrl,
  icon,
  title
}) => {

  return (
    <Link
      to={ linkUrl }
      className={`
         md:items-center flex-col md:flex-row flex 
        ${mobileIconsAlign ? mobileIconsAlign : 'items-center'} 
      `}
      style={{ marginBottom: linkSpacing || '' }}
    >
      <Image
        src={ icon }
        alt="phone"
        width='24px'
        height='24px'
        className="mr-3"
      />
      <span className="text-xs lg:text-base">{ title }</span>
    </Link>
  );
};

export default IconTextLink;