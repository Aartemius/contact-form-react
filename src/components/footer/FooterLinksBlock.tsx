import { FC } from "react";
import { Link } from "react-router-dom";

interface FooterLinksBlockProps {
  heading: string;
  links: {
    name: string;
    url: string;
  }[];
  linksSpacing?: string;
}
const FooterLinksBlock: FC<FooterLinksBlockProps> = ({
  links,
  heading,
  linksSpacing
}) => (
  <div className="w-6/12 lg:w-2/12 px-4">
    <div className="font-semibold mb-3">{ heading }</div>
    <div className="flex flex-col">
      { links.map((link, index) => (
        <Link
          key={ link.url + link.name + index }
          to={link.url}
          style={{ marginBottom: linksSpacing ? linksSpacing : '1rem' }}
          className="text-xs lg:text-base"
        >
          { link.name }
        </Link>
      )) }
    </div>
  </div>
);

export default FooterLinksBlock;