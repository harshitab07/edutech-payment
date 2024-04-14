import React, { useEffect, useRef, useState } from 'react';
import HomeData from '../data';
import heroImg from "../assets/heroImg.webp";
import axios from 'axios';
import DropIn from "braintree-web-drop-in-react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Payment = () => {
  const [clientToken, setClientToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [dropInInstance, setDropInInstance] = useState(null);

  const getToken = async () => {
    try {
      const { data } = await axios.get('https://edutech-payment-api.onrender.com/api/v1/payment/payment-token');
      setClientToken(data.data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  const handlePayment = async () => {
    try {
      const { nonce } = await dropInInstance.requestPaymentMethod();
      setLoading(true);
      await axios.post('https://edutech-payment-api.onrender.com/api/v1/payment/payment', { nonce, email: "test@email.com"  });
      setLoading(false);
      toast.success('Order placed successfully!');
      setTimeout(() => navigate('/success'), 2000);
    } catch (err) {
      toast.error('Cannot place orders at this moment.')
      console.log(err);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <ToastContainer />
      <div className='landing-top px-8 pt-3 lg:px-15 lg:pt-10 flex gap-2 items-center'>
        <div className='pl-5 landing-content text-left'>
            <div className='flex flex-col items-start gap-1'><h1 className='text-3xl xl:text-5xl font-bold'>EduNation</h1><h1 className='text-3xl xl:text-5xl font-bold ml-10'>Your Study Partner</h1></div>
            <p className=' mt-3 text-bg'>{HomeData.content}</p>
        </div>
        <div className='landing-hero'><img src={heroImg} alt='heroImg' className='landing-page-hero hidden md:block' /></div>
      </div>
      <div className='landing-bottom flex flex-col items-center flex-wrap mx-5 mt-4 md:mt-8 justify-center p-3'>
        <div>
          <h3 className='text-center'>Buy our course for just $1</h3>
        </div>
        <div className='w-5/12'>
        {clientToken ? <DropIn
          options={{
            authorization: clientToken,
          }}
          onInstance={(instance) => setDropInInstance(instance)}         
        /> : <h2 className='text-lg'>Please wait...</h2>}
        </div>
        <button className='rounded-3xl bg-[#E2E7F1] py-2 px-4 w-60 font-semibold hover:bg-[#acc3f1]' onClick={handlePayment} disabled={loading} >Make Payment</button>
      </div>
    </div>
  )
}

export default Payment;
