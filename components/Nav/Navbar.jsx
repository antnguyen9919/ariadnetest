import React,{useRef} from 'react'
import Link from 'next/link' 
import {Popover,Transition} from '@headlessui/react'
import { CircleFlag } from 'react-circle-flags'
import { i18n } from 'next-i18next'
import { useRouter } from "next/router";
import {DiGoogleAnalytics} from 'react-icons/di'
import {BiNavigation,BiNotification,BiUser} from 'react-icons/bi'

// import {FaUserCircle} from 'react-icons/fa'

import {MdLocalAirport,MdStoreMallDirectory,
  MdEmojiTransportation,MdLocationCity,MdRoomService, MdMenu} from 'react-icons/md'
import {AiOutlineShopping} from 'react-icons/ai'


const solutions=[
  {title:"Ariadne Analytics",icon:DiGoogleAnalytics,href:"/solutions/ariadne-analytics"},
{title:"Ariadne Navigation",icon:BiNavigation, href:"/solutions/ariadne-navigation"},
  {title:"Ariadne Engagement",icon:BiNotification, href:"/solutions/ariadne-engagement"},
  
]
const industries=[
  {title:"Retail stores",icon:MdStoreMallDirectory, href:"/industries/retail-stores"},
  {title:"Shopping centers",icon:AiOutlineShopping, href:"/industries/shopping-centers"},
  {title:"Airports",icon:MdLocalAirport, href:"/industries/airports"},
  {title:"Transportation",icon:MdEmojiTransportation, href:"/industries/transportation"},
  {title:"Cities",icon:MdLocationCity, href:"/industries/cities"},
  {title:"Hospitality",icon:MdRoomService, href:"/industries/hospitality"},
  
]
const company=[
  {title:"About Us",href:"/company/about-us"},
  {title:"Blog",href:"/blog"},
  {title:"Careers",href:"/company/careers"},
  {title:"Contact",href:"/company/contact"},
  // {title:"Hospitality",icon:BsInfoSquare, descriptions:"hospitality",href:"#"},
  
]

const  Navbar = () => {
  let solutionRef = useRef(null)
  let industriesRef = useRef(null)
  let companyRef = useRef(null)
  let langRef = useRef(null)
  

  const { locale, locales, defaultLocale, asPath } = useRouter();
  
  console.log(locale)
  return (

    <div  >
      <Popover className='fixed top-0 w-full bg-black z-50' >
      
      <div className="2xl:max-w-7xl max-w-4xl  px-4 mx-auto md:px-6">
      
          <div className="flex items-center justify-between h-16 2xl:h-20">

          <Link href="/" ><a className="flex items-center">
        <img src="/Photos/Asset16.png" className="mr-3 h-6 scale-125 sm:h-9 2xl:scale-150" alt="Ariadne Logo" /></a></Link>
            <div className='-my-2 -mr-2 md:hidden'>
              
          <Popover.Button className="inline-flex items-center justify-center text-gray-400 
          bg-white opacity-95 rounded-sm p-2
          "  >
          <span className='sr-only'>Open Menu</span>
            <MdMenu className='w-6 h-6' aria-hidden="true"   />
          </Popover.Button>

        
          
     

            </div>
            

            <div className='hidden w-3/4 md:flex md:w-3/4 xl:w-2/4 '>
              
            <Popover.Group as='nav' className='flex w-full justify-evenly ' >
             

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={solutionRef}
                 onMouseEnter={()=>solutionRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none'
                 >
                   <span className='text-white font-light text-lg 2xl:text-2xl  hover:text-red-600 transition ease-in'>Solutions</span>

                 </Popover.Button>

                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8'>
                      {solutions.map((solution,index)=>(
                        <Link key = {index} href = {solution.href}><a className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black transition ease-in-out '><solution.icon className='w-6 h-6 text-slate-500 '/>
                        <div className='ml-4 '>
                          <p className='text-md font-semibold'>{solution.title}</p>
                          <p className='text-base  font-medium'>{solution.descriptions}</p>
                        </div></a>

                          
                        </Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={industriesRef}
                 onMouseEnter={()=>industriesRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none'
                 >
                   <span className='text-white font-light text-lg 2xl:text-2xl hover:text-red-600 transition ease-in'>Industries</span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8 '>
                      {industries.map((solution,index)=>(
                        <Link key = {index} href = {solution.href}  ><a className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black transition ease-in-out  '>
<solution.icon className='w-6 h-6 text-slate-500'/>
                          <div className='ml-4 '>
                            <p className='text-md  font-semibold'>{solution.title}</p>
                            <p className='text-base  font-medium'>{solution.descriptions}</p>
                          </div>
                        </a>
                          
                        </Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>

              <Link href='/why-ariadne'><a className='text-lg 2xl:text-2xl font-light  text-white hover:text-red-600 transition ease-in'>Why Ariadne</a></Link>

              <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={companyRef}
                 onMouseEnter={()=>companyRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none '
                 >
                   <span className='text-white font-light text-lg 2xl:text-2xl hover:text-red-600 transition ease-in '>Company</span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8 '>

                      {company.map((comp,index)=>(
                        <Link key = {index} href = {comp.href} ><a className='flex items-start 
                        p-2 -m-3 rounded-lg text-gray-500 hover:text-black transition ease-in-out '>
<div className='ml-4 '>
                            <p className='text-md  font-semibold'>{comp.title}</p>
                            
                          </div>
                        </a></Link>
                      ))}
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>


            </Popover.Group>

            </div>

            
            
            <div className='items-center justify-end hidden md:flex'>
            <Link href ="/letstalk"><a><button className='bg-red-600 hover:bg-red-700 py-1 px-3 2xl:text-lg text-white'  >Let&rsquo;s Talk</button></a></Link>
            {/* <Link href={!user? '/login':'/dashboard'}></Link> */}
            {/* <a className=' text-base 2xl:text-2xl' href ='https://app.seulet.com' >
            <FaUserCircle className=' w-6 h-5 2xl:h-9 ml-7 text-white transition ease-in hover:scale-110' />
            <CircleFlag countryCode="de" className=' w-8 h-full 2xl:h-9 ml-7 transition ease-in hover:scale-110' />
            </a> */}

            <Popover>
               {({open,close})=>(
                 <>
                 <Popover.Button 
                 ref={langRef}
                 onMouseEnter={()=>langRef.current.click()}
                 className='inline-flex items-center text-base font-medium rounded-ms  focus:outline-none '
                 >
                   <span><CircleFlag countryCode={(locale==="de"||locale==="fr")? locale: "gb"  } className=' w-8 h-full 2xl:h-9 ml-7 transition ease-in hover:scale-110' /></span>

                 </Popover.Button>
                 <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
                <Popover.Panel onMouseLeave={close}
                              className='absolute z-10 w-screen max-w-xs px-2 mt-6 -ml-4  transform sm:px-0 lg:ml-0 lg:-translate-x-1/2'
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  ">
                    <div className='relative grid gap-6 px-5 py-6 bg-white opacity-95 sm:gap-8 sm:p-8'>
                    
                    <Link href={asPath} locale="en"><a className='flex items-center cursor-pointer transition ease-in hover:scale-110'>
                    <span><CircleFlag countryCode="gb" className=' w-8 h-full 2xl:h-9 ml-7 ' /> </span>
                    <span><h1 className=' w-8 h-full 2xl:h-9 ml-7'>English</h1> </span>
                    
                    </a></Link>
                   <Link href={asPath} locale="de"><a className='flex items-center cursor-pointer transition ease-in hover:scale-110'>
                    <span><CircleFlag countryCode="de" className=' w-8 h-full 2xl:h-9 ml-7 ' /> </span>
                    <span><h1 className=' w-8 h-full 2xl:h-9 ml-7'>German</h1> </span>
                    
                    </a></Link>
                    <Link href={asPath} locale="fr"><a className='flex items-center cursor-pointer transition ease-in hover:scale-110'>
                    <span><CircleFlag countryCode="fr" className=' w-8 h-full 2xl:h-9 ml-7 ' /> </span>
                    <span><h1 className=' w-8 h-full 2xl:h-9 ml-7'>French</h1> </span>
                    
                    </a></Link>
                    
                    
                    </div>
                  </div>

                </Popover.Panel>
                    </Transition>


                 </>
               )}
              </Popover>
            
            </div>
            

          </div>
          
        </div>
        
        <div className='md:hidden '>
        {/* <h1 className='text-white'>sas</h1> */}
        <Popover.Panel className="absolute z-10 bg-black w-full text-white">
                            <h1 className='text-center'>Solutions</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>
                      {solutions.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white' >
                         <solution.icon className='w-6 h-6 text-slate-500 '/>
                          <div className='ml-3 '>
                            <p className='text-sm font-normal'>{solution.title}</p>
                            
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    <h1 className='text-center'>Industries</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>

                      {industries.map((solution,index)=>(
                        <a key = {index} href = {solution.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white active:text-amber-200' >
                          <solution.icon className='w-6 h-6 text-slate-500 '/>
                          <div className='ml-3 '>
                            <p className='text-sm  font-normal'>{solution.title}</p>
                          
                          </div>
                        </a>
                      ))}
                    </div>

                    <h1 className='text-center'>Company</h1>
                            <div className='relative grid grid-cols-2 gap-6 px-5 py-6 sm:gap-8 sm:p-8'>
                                  <a href='#' className='text-sm p-2 -m-3 text-lg font-light text-white' >Why Ariadne?</a>
                            {company.map((comp,index)=>(
                        <a key = {index} href = {comp.href} className='flex items-start 
                        p-2 -m-3 rounded-lg text-white ' >
                          
                          <div className='ml-1 '>
                            <p className='text-sm  font-normal'>{comp.title}</p>
                          
                          </div>
                        </a>
                      ))}
                    </div>


        
      </Popover.Panel>
            </div>
      
        
    </Popover>
    </div>
  )
}

export default Navbar