import React from 'react';
import HomeData from '../data';
import heroImg from "../assets/heroImg.webp";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='landing-top px-8 pt-3 lg:px-15 lg:pt-10 flex gap-2 items-center'>
        <div className='pl-5 landing-content text-left'>
            <div className='flex flex-col items-start gap-1'><h1 className='text-3xl xl:text-5xl font-bold'>EduNation</h1><h1 className='text-3xl xl:text-5xl font-bold ml-10'>Your Study Partner</h1></div>
            <p className=' mt-3 text-bg'>{HomeData.content}</p>
            <button className='border bg-black text-white text-sm rounded-xl p-3 w-40 mt-2'><Link to='/sign-up'>Get Started</Link></button>
        </div>
        <div className='landing-hero'><img src={heroImg} alt='heroImg' className='landing-page-hero hidden md:block' /></div>
      </div>
      <div className='landing-bottom flex flex-wrap mx-5 mt-4 md:mt-8 justify-center p-3'>
        {
            HomeData.cards.map((card, index) => (
                <div className={`${ index%2 === 0 ? 'bg-white' : 'bg-[#E2E7F1]'} w-1/6 p-7`} style={{minWidth: '18rem'}}>
                    {card}
                </div>    
            ))
        }
      </div>
    </div>
  )
}

export default Home;
