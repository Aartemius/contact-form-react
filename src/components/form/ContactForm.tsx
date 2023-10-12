import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import Image from '../parts/Image';
import { useScreenSize } from '../../utils/useScreenSize';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  feedback: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { isMobile, isTablet } = useScreenSize();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
    }, 1000);
  }

  return (
    <div
      className="w-full"
      style={{
        width: (isMobile || isTablet) ? '100%' : 'calc(60% - 1rem)',
      }}
    >
      <form
        className={ `${ isMobile ? 'pt-12' : 'p-12' } w-full flex flex-wrap relative ${ isMobile ? 'mb-16' : 'mb-36' }` }
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          type="text"
          label="First Name:"
          register={ register('firstName', { 
            required: 'First name is required', 
            pattern: {
              value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
              message: 'Invalid first name'
            }
          }) }
          error={ errors.firstName ? errors.firstName.message : undefined }
          labelStyle={{ marginRight: '10%' }}
        />

        <FormInput
          type="text"
          label="Last Name:"
          register={ register('lastName', {
            required: 'Last name is required',
            pattern: {
              value: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i,
              message: 'Invalid last name'
            }
          }) }
          error={ errors.lastName ? errors.lastName.message : undefined }
          labelStyle={{ marginRight: '0' }}
        />

        <FormInput
          type="email"
          label="Email:"
          register={ register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
              message: 'Invalid email'
            }
          }) }
          error={ errors.email ? errors.email.message : undefined }
          labelStyle={{ marginRight: '10%' }}
        />

        <FormInput
          type="tel"
          label="Phone:"
          register={ register('phone', {
            required: 'Phone is required', 
            pattern: {
              value: /^(?:\+|0{0,2})[0-9()\s-]{10,}$/,
              message: 'Invalid phone number'
            } 
          }) }
          error={ errors.phone ? errors.phone.message : undefined }
          labelStyle={{ marginRight: '0' }}
        />

        <label className="block mb-2 w-full">
          <span className="mb-4 block">Select Subject:</span>
          <div className="flex flex-wrap justify-between">
            <FormInput
              type="radio"
              label="General Inquiry"
              register={ register('subject', { required: true }) }
              value="inquiry1"
              labelClass={`${ isMobile ? 'w-6/12 mb-2' : 'mr-2' } flex flex-row-reverse justify-end whitespace-nowrap items-center`}
              labelStyle={ { width: (isMobile || isTablet) ? '50%' : 'fit-content' } }
              inputClass="mr-1"
            />
            <FormInput
              type="radio"
              label="General Inquiry"
              register={ register('subject', { required: true }) }
              value="inquiry2"
              labelClass={`${ isMobile ? 'w-6/12 mb-2' : 'mr-2' } flex flex-row-reverse justify-end whitespace-nowrap items-center`}
              labelStyle={ { width: (isMobile || isTablet) ? '50%' : 'fit-content' } }
            />
            <FormInput
              type="radio"
              label="General Inquiry"
              register={ register('subject', { required: true }) }
              value="inquiry3"
              labelClass={`${ isMobile ? 'w-6/12 mb-2' : 'mr-2' } flex flex-row-reverse justify-end whitespace-nowrap items-center`}
              labelStyle={ { width: (isMobile || isTablet) ? '50%' : 'fit-content' } }
              inputClass="mr-1"
            />
            <FormInput
              type="radio"
              label="General Inquiry"
              register={ register('subject', { required: true }) }
              value="inquiry3"
              labelClass={`${ isMobile ? 'w-6/12 mb-2' : 'mr-2' } flex flex-row-reverse justify-end whitespace-nowrap items-center`}
              labelStyle={ { width: (isMobile || isTablet) ? '50%' : 'fit-content' } }
            />
          </div>
          {errors.subject && <span className="text-red-500">Please select subject</span>}
        </label>

        <label className="block mb-2 w-full">
          Feedback:
          <textarea
            {...register('feedback')}
            className="p-1 w-full border-b border-black"
            placeholder="Write your message"
          />
        </label>

        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded ml-auto w-full md:w-auto z-10"
        >
          {
            isLoading
            ?
            <img src="/images/preloader.gif" alt="loading" style={{ height: '16px' }} />
            :
            'Send Message'
          }
        </button>
        <Image
          src="/images/letterSend.png"
          alt="send message"
          width={ isMobile ? '120px' : '240px'}
          height='auto'
          className="mr-3"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            transform: isMobile ? 'translate(-90%, 80%)' :  'translate(-30%, 56%)'
          }}
        />
      </form>
    </div>
  );
};

export default ContactForm;
