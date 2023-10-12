import { FC } from "react";
import IconTextLink from "./IconTextLink";

interface ContactLinksProps {
  linksSpacing?: string;
  blockBottomSpacing?: string;
  mobileIconsAlign?: "items-center" | "items-start";
}

const ContactLinks: FC<ContactLinksProps> = ({
  linksSpacing,
  blockBottomSpacing,
  mobileIconsAlign,
}) => {

  return (
    <div style={{ marginBottom: blockBottomSpacing || '' }}>
      <IconTextLink
        linkSpacing={ linksSpacing }
        mobileIconsAlign={ mobileIconsAlign }
        linkUrl="tel:+10123456789"
        icon="/images/phoneIcon.svg"
        title="+1012 3456 789"
      />
      <IconTextLink
        linkSpacing={ linksSpacing }
        mobileIconsAlign={ mobileIconsAlign }
        linkUrl="mailto:demo@gmail.com"
        icon="/images/mailIcon.svg"
        title="demo@gmail.com"
      />
      <IconTextLink
        linkSpacing={ linksSpacing }
        mobileIconsAlign={ mobileIconsAlign }
        linkUrl="/"
        icon="/images/locationIcon.svg"
        title="132 Dartmouth Street Boston, Massachusetts 02156 United States"
      />
    </div>
  );
}

export default ContactLinks;