import React, { ReactNode } from 'react';
import Header from './header/Header';
import './AppContainer.scss';
import ContactInfo from './contacts/ContactInfo';
import ContactForm from './form/ContactForm';
import Footer from './footer/Footer';
import { useScreenSize } from '../utils/useScreenSize';

const AppContainer: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const { isMobile } = useScreenSize();

  return (
    <div>
      <Header />
      <section className={`${ isMobile ? 'w-8/12' : 'w-full' } text-center mx-auto`}>
        <h1 className={`
          ${ isMobile ? 'text-2xl' : 'text-3xl' }
          mt-7 font-bold mb-3
        `}>Contact Us</h1>
        <span className={`
          ${ isMobile ? 'text-l' : 'text-xl' }
          mb-7 block
        `}>Any question or remarks? Just write us a message!</span>
      </section>
      <section className="w-full">
        <div
          className={`
            ${ isMobile ? 'p-3' : 'p-6' }
            app-container-wrap my-10 mx-auto flex flex-col lg:flex-row md:flex-col sm:flex-col bg-white rounded-md
          `}
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      { children }
      <Footer />
    </div>
  );
};

export default AppContainer;