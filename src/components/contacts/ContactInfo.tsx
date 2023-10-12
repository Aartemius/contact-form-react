import { Link } from "react-router-dom";
import { useScreenSize } from "../../utils/useScreenSize";
import ContactLinks from "./ContactLinks";
import Image from "../parts/Image";


const ContactInfo = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div
      className={`
      ${ isMobile ? 'text-center' : '' }
      p-10 text-white relative
      `}
      style={{
        background: '#000',
        width: (isMobile || isTablet) ? '100%' : 'calc(40% - 1rem)',
        borderRadius: '11px 11px 0 11px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="flex flex-col h-full">
        <h2 className={ `
        font-bold mb-3
        ${ isMobile ? 'text-lg' : 'text-xl' }
        ` }>Contact Information</h2>
        <span
          className={ isMobile ? 'block mb-6 text-sm' : 'mb-32 block' }
          style={{ color: '#C9C9C9' }}
        >
          Say something to start a live chat!
        </span>
        <ContactLinks
          linksSpacing={ isMobile ? '2rem' : '3rem' }
          blockBottomSpacing={ isMobile ? '3.5rem' : '10rem' }
        />
        <div className={ `flex mt-auto ${ isMobile ? 'justify-center' : '' }` }>
          <Link
            to="/"
            className="mr-2"
          >
            <Image
              src="/images/twitterIcon.svg"
              alt="location"
              width='30px'
              height='30px'
              className="rounded-icon"
            />
          </Link>
          <Link
            to="/"
            className="mr-2"
          >
            <Image
              src="/images/instagramIcon.svg"
              alt="location"
              width='30px'
              height='30px'
              className="rounded-icon"
            />
          </Link>
          <Link to="/">
            <Image
              src="/images/discordIcon.svg"
              alt="location"
              width='30px'
              height='30px'
              className="rounded-icon"
            />
          </Link>
        </div>
      </div>
      <div className="big-circle"
        style={{
          width: isMobile ? '140px' : '260px',
          height: isMobile ? '140px' : '260px',
          position: 'absolute',
          borderRadius: '50%',
          right: 0,
          bottom: 0,
          transform: 'translate(40%, 40%)',
          background: '#1A1A1A',

        }}
      ></div>
      <div
        className="small-circle"
        style={{
          width:  isMobile ? '54px' : '130px',
          height:  isMobile ? '54px' : '130px',
          position: 'absolute',
          borderRadius: '50%',
          right: 0,
          bottom: 0,
          transform: isMobile ? 'translate(-65%, -65%)' : 'translate(-40%, -40%)',
          // transform: 'translate(-40%, -40%)',
          background: 'rgba(255,255,255,.1)',
        }}
      ></div>
    </div>
  );
}

export default ContactInfo;