import React from 'react'
import Image from 'next/image'

import s1 from "../public/Photos/brands/s1.png"
import s2 from "../public/Photos/brands/s2.png"
import s4 from "../public/Photos/brands/s4.png"
import s5 from "../public/Photos/brands/s5.png"
import s6 from "../public/Photos/brands/s6.png"
import s7 from "../public/Photos/brands/s7.png"
import s8 from "../public/Photos/brands/s8.png"
import s9 from "../public/Photos/brands/s9.png"
import s10 from "../public/Photos/brands/s10.png"
import s11 from "../public/Photos/brands/s11.png"
import s12 from "../public/Photos/brands/s12.png"
import s13 from "../public/Photos/brands/s13.png"
import s14 from "../public/Photos/brands/s14.png"
import s15 from "../public/Photos/brands/s15.png"
import s16 from "../public/Photos/brands/s16.svg"
import s17 from "../public/Photos/brands/s17.png"
import s18 from "../public/Photos/brands/s18.png"
import s19 from "../public/Photos/brands/s19.png"
import s20 from "../public/Photos/brands/s20.png"




const Brands = () => {
  return (
    <div className='w-full  mb-10 mt-8 flex justify-center  justify-items-center  content-center items-center' style = {{paddingRight:"20px", paddingLeft: "20px"}}>

        <div className='w-full xl:px-7  flex justify-around flex-wrap justify-items-center xl:gap-x-16 2xl:gap-x-20 gap-x-2 gap-y-3 content-center items-center'>
       
        <div className='xl:w-40 2xl:w-40 w-24'>
        <Image src={s2} alt="" layout = "responsive" />
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s1} alt="" layout = "responsive" />
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s4} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s5} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-40 w-24'>
        <Image src={s6} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-50 w-24'>
        <Image src={s7} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-55 w-24'>
        <Image src={s8} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-70 w-24'>
        <Image src={s9} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-55 w-24'>
        <Image src={s12} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s11} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s10} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s13} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s14} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s15} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s16} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s17} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s18} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s19} alt="" layout = "responsive"/>
        </div>
        <div className='xl:w-40 2xl:w-60 w-24'>
        <Image src={s20} alt="" layout = "responsive"/>
        </div>
        
    </div>
    </div>
  )
}

export default Brands