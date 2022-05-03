import React from 'react'
import Image from 'next/image'
import DB from '../public/Photos/Caros/DB.png'
import Glasgow from '../public/Photos/Caros/Glasgow.png'
import Grabert from '../public/Photos/Caros/Grabert.png'
import Atlantis2 from '../public/Photos/Caros/Atlantis2.png'
const Testimonials = () => {
  return (
    <div className='min-h-screen mb-10 py-8 ' >
      <div className='w-full   mb-8 py-8 flex xl:flex-row 2xl:flex-row flex-col flex-md-row items-center flex-sm-col justify-between ' >
        <div className='w-1/6'>
          <Image src={DB} layout='responsive' />
        </div>
        <div className='w-2/3 mt-4 xl:mt-0 xl:text-right 2xl:text-right'>
          <p className='italic' >&#8220;
          You presented to us what we were expecting to see in at least 7 years          &#8221;</p>
          <p className='font-semibold mt-2'>Janis Diekmann, Deutsche Bahn, Innovation Manager</p>
        </div>


      </div>

      <div className='w-full  my-8 py-8 flex xl:flex-row-reverse 2xl:flex-row-reverse flex-col flex-md-row items-center  justify-between' >
        <div className='w-1/6'>
          <Image src={Grabert} layout='responsive' />
        </div>
        <div className='w-2/3 mt-4 xl:mt-0'>
          <p className='italic text-justify'>&#8220;When they said: We are the Google Analytics of the physical world-, they were not kidding! Thanks to Ariadne Maps, 
          I have now reliable data and numbers about the visitors on my shopping centre. We can now use this information to
           make better decisions and optimize the customer experience&#8221;</p>
          <p className='font-semibold mt-2'>Thomas Grabert, Ö-Center Mall, Managing Director</p>
        </div>


      </div>

      <div className='w-full   my-8 py-6 flex xl:flex-row 2xl:flex-row flex-col flex-md-row items-center flex-sm-col justify-between' >
        <div className='w-1/6'>
          <Image src={Glasgow} layout='responsive' />
        </div>
        <div className='w-2/3 xl:text-right 2xl:text-right mt-4 xl:mt-0'>
          <p className='italic'>&#8220;
          I cannot think of anyone who does not need your devices          &#8221;</p>
          <p className='font-semibold mt-2'>Gordon Bain, Glasgow Airport, Head of Project Delivery</p>
        </div>


      </div>
      <div className='w-full  my-8 py-8 flex xl:flex-row-reverse 2xl:flex-row-reverse flex-col flex-md-row items-center  justify-between' >
        <div className='w-1/6'>
          <Image src={Atlantis2} layout='responsive' />
        </div>
        <div className='w-2/3 mt-4 xl:mt-0'>
          <p className='italic'>&#8220;
          Your devices are like beacons on steroids
          &#8221;</p>
          <p className='font-semibold mt-2' >Anthony Lynsdale, Atlantis The Palm, VP Information Technology</p>
        </div>


      </div>

      

    </div>
  )
}

export default Testimonials