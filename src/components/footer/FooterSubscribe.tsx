import { useForm } from "react-hook-form";
import { useState } from "react";
import FormInput from "../form/FormInput";

export interface FormData {
  email: string;
}

const FooterSubscribe = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
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
      className="w-12/12 lg:w-3/12 rounded-lg p-4"
      style={{ background: '#131313' }}
    >
      <div className="font-semibold mb-3">Join Our Newsletter</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex mb-4"
      >
        <FormInput
          type="email"
          labelStyle={{ margin: 0 }}
          inputStyle={{
            height: '100%',
            background: 'rgba(255,255,255,.1)',
            fontSize: '12px',
            paddingLeft: '.75rem'
          }}
          placeholder="Your email address"
          register={ register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
              message: 'Incorrect email address'
            }
          }) }
        />
        <button 
        type="submit"
        className="bg-gray-500 text-white py-2 px-4 rounded"
        style={{ background: '#000' }}
        >
          {
            isLoading
            ?
            <img src="/images/preloader.gif" alt="loading" style={{ height: '16px' }} />
            :
            'Subscribe'
          }
        </button>
      </form>
      { errors.email && <div className="text-red-500">{ errors.email.message }</div> }
      <div>*  Will send you weekly updates for your better tool management.</div>
    </div>
  );
}

export default FooterSubscribe;