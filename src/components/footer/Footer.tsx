import React from 'react';
import ContactLinks from '../contacts/ContactLinks';
import FooterSubscribe from './FooterSubscribe';
import FooterLinksBlock from './FooterLinksBlock';
import { Link } from 'react-router-dom';

const companyLinks = [
  { name: 'About', url: '/' },
  { name: 'Contact', url: '/' },
  { name: 'Blogs', url: '/' }
]
const legalLinks = [
  { name: 'Privacy Policy', url: '/' },
  { name: 'Terms & Services', url: '/' },
  { name: 'Terms of Use', url: '/' },
  { name: 'Refund Policy', url: '/' }
]
const quickLinks = [
  { name: 'Techlabz Keybox', url: '/' },
  { name: 'Downloads', url: '/' },
  { name: 'Forum', url: '/' }
]

const Footer: React.FC = () => (
  <footer className="bg-black text-white">
    <div className="p-4 lg:p-16">
      <Link
        to="/"
        className="text-2xl font-bold font-inter"
      >
        Logo here
      </Link>
      <hr className="my-8" />
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-6/12 lg:w-3/12 px-4 mb-6">
          <h3 className="font-semibold mb-3">Reach us</h3>
          <ContactLinks
            linksSpacing="1rem"
            mobileIconsAlign="items-start"
          />
        </div>
        <FooterLinksBlock
          heading="Company"
          links={ companyLinks }
        />
        <FooterLinksBlock
          heading="Legal"
          links={ legalLinks }
        />
        <FooterLinksBlock
          heading="Quick links"
          links={ quickLinks }
        />
        <FooterSubscribe />
      </div>
    </div>
  </footer>
);

export default Footer;