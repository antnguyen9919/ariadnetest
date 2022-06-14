import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';


import smallScreen from "../public/Photos/smallScreen.png"
import screens from '../public/Photos/screens.png'

import eAnalytics from '../public/Photos/enlarge/eAnalytics.png'
import ERP from '../public/Photos/enlarge/ERP.png'
import eCRM from '../public/Photos/enlarge/eCRM.png'

import {motion} from 'framer-motion'


import { useScroll } from '../components/useScroll'

/* import Brands from '../components/Brands' */
import HomeBlogPosts from '../sections/HomeBlogPosts'

import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import  VideoCarousel  from "../sections/VideoCarousel"



import Modal from 'react-modal';

import Carousel from 'react-multi-carousel';



import styles from '../styles/Home.module.css'
import {Testimonials} from '../components'
import { fontSize } from '@mui/system'


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
import s21 from "../public/Photos/brands/s21.png"
import peoplesensed from "../public/Photos/peoplesensed.png"
import locationsdeployed from "../public/Photos/locationsdeployed.png"
import countriesactive from "../public/Photos/countriesactive.png"
import costsavings from "../public/Photos/costsavings.png"
import s22 from "../public/Photos/brands/s22.png"
import floor from "../public/Photos/floor.png"
import device2 from "../public/Photos/device2.png"
import screen from "../public/Photos/screen.png"
import s3 from "../public/Photos/brands/s3.png"






const variants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}
}
const Vvariants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}
}
const DUvariants= {
  hidden:{opacity: 0, x:0, y:200},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:1,x:0,y:0}

}
const LRvariants ={
  hidden:{opacity: 0, x:-200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:-200,y:0}

}
const RLvariants ={
  hidden:{opacity: 0, x:200, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:200,y:0}

}




export default function Home() {


  
  
  const [element,controls] = useScroll();
 
  const [element2,controls2] = useScroll();
  const [element3,controls3] = useScroll();
  const [element4,controls4] = useScroll();
  const [element5,controls5] = useScroll();
  const [element6,controls6] = useScroll();
  const [element7,controls7] = useScroll();
  const [element8,controls8] = useScroll();
  const [element9,controls9] = useScroll();

  

  const customStyles = {
    overlay: {
      transition: '0.6s ease-out',
      position: 'fixed',
      zIndex:1000,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
     
      overflow: 'auto',
      zIndex:300,
      // width: '40%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      height: '100vh',
      width: '99%',
      zIndex:'9999',
      transform: 'translate(-50%, -50%)',
    },
  };
  


  const responsive = {
  
    desktop: {
      breakpoint: { max: 4000, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

 
  return (
   <div >

      <div >
      <Head>
        <title>Ariadne Maps</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
       
      </Head>

        <div className={styles.all}>
        <div  className={`${styles.hero}`} >
          <div className={styles.heroContainer}>

            <div className = {styles.heroTextContainer}>
            <div className={styles.heroText}>
            <h1  > From People Flow To Actionable Insights</h1>
            <p style = {{paddingTop: "10px"}}>Identify the moment when your visitors become your customers</p>
            <Link href ="/letstalk"><a><button className={styles.heroButton} /*'bg-red-600 hover:bg-red-700 py-1 px-3 2xl:text-lg' style = {{marginTop:"20px"}}*/ >Let&rsquo;s Talk</button></a></Link>
            </div>
            </div>

            <div className={`${styles.heroScreen}`} >
            <video className={styles.bgVid} 
            poster = "/Photos/screenload.png"
            initial="hidden" animate="enter" exit="exit" variants={Vvariants} transition={{duration: 2, type: 'easeInOut'}} 
            
            src ="/Videos/herosection.mp4" 
            type="videos/mp4" autoPlay playsInline muted loop  />
            {/* <Image
            
            layout="responsive"
            alt='homepageScreen'
            priority
            src = {smallScreen} /> */}
            </div>

          </div>
        </div>
        {/*
        <div className='block h-96 xl:hidden 2xl:hidden flex flex-row justify-center bg-gradient-to-b from-slate-700 to-slate-800 text-white'>
        <div className=' my-auto mx-auto w-5/6' >
            <h1  >From People Flow To <br/> Actionable Insights</h1>
            <p style = {{fontSize:"20px", fontWeight:"200", paddingTop: "10px"}}>Identify the moment when your visitors become your customers</p>
              <Link href ="/letstalk"><a ><button className=' bg-red-600 hover:bg-red-700 py-1 px-3 2xl:text-lg mt-4'>Let&rsquo;s Talk</button></a></Link>
            </div>
        </div>
          */}

      <main className={styles.main}>
        
        <div className={styles.brandsContainerOne}>
          <div className={styles.brandsContainerOneOne}>

            <Image src={s2} alt=""/>
            <Image src={s1} alt=""/>
            <Image src={s4} alt=""/> 


        </div>

          <div className={styles.brandsContainerOneTwo}>
            

            <Image src={s5} alt=""/>          
            <Image src={s6} alt=""/>
            <Image src={s18} alt=""/>

        </div>

        </div>   

        <div className={styles.brandsContainerTwo}>
            
        <div className={styles.brandsContainerTwoOne}>

            <Image src={s7} alt=""/>
            <Image src={s8} alt=""/>
            <Image src={s15} alt=""/> 


            </div>

            <div className={styles.brandsContainerTwoTwo}>


            <Image src={s3} alt=""/>          
            <Image src={s19} alt=""/>
            <Image src={s20} alt=""/>

            </div>

        </div> 
        
        <div className={styles.brandsContainerThree}>
            
        <div className={styles.brandsContainerThreeOne}>

            <Image src={s12} alt=""/>
            <Image src={s13} alt=""/>
            <Image src={s10} alt=""/> 


            </div>

            <div className={styles.brandsContainerThreeTwo}>


            <Image src={s14} alt=""/>          
            <Image src={s16} alt=""/>
            <Image src={s21} alt=""/>

            </div>


        </div>  


        <div className={`${styles.section1} `} id = "screens" ref = {element}
       

        >
         
          <motion.div
           transition={{duration: 0.4, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {variants} animate = {controls}
          >
          <div className={styles.facts}>
            
            <Image src={peoplesensed} alt=""/>
            <Image src={locationsdeployed} alt=""/>
            <Image src={countriesactive} alt=""/>
            <Image src={costsavings} alt=""/>
            
        </div>  
          </motion.div>
          
          <motion.div className={styles.section1screens}
          
           >
              <motion.div className={styles.screens}
              transition={{duration: 0.5, type: 'easeInOut'}} 
              initial="hidden"  exit="exit"
              variants = {LRvariants} animate = {controls}
              >
              <Image
            
              alt ='section1Screen'
              src = {screens} layout='responsive'  />
              <div
               >
              <p
              
              className='text-center text-red-500' ><button className=' hover:scale-105'  onClick={openModal} style={{marginTop:"25px", fontSize:"22px"}}><AddCircleOutlineIcon />&nbsp;Enlarge</button></p>
              </div>

              <Modal
            
        isOpen={modalIsOpen}
        preventScroll ={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnEsc={
          true
        }
      >
        
        <div className='overscroll-contain' /*style={{backgroundColor:"#f5f5f5"}}*/>
        
        <div className='flex flex-row justify-end overscroll-contain'>
        <button className='hover:bg-red-600 bg-red-500 px-3 text-white font-semibold' style={{background:"black"}} onClick={closeModal}>X</button>
        </div>
        
        
        
          
            <div className='flex flex-row justify-center items-center'>
            <div className=' w-2/3  items-center justify-center'>
          <h1 className = "text-center text-4xl" style={{marginBottom:"20px"}} >Omnichannel Solution</h1>
      <Carousel infinite 
      
      responsive={responsive}
      autoPlaySpeed={10000}
      itemClass="px-3"
      >
        <div className="flex flex-col items-center justify-center content-center align-center" >
            <div className='w-full' >
            <Image layout='responsive'
            
            src={eAnalytics} alt = 'eanalytics' />
            </div>
            <h1 className='text-3xl text-center' style={{marginTop:"20px"}}>Ariadne Analytics</h1>
            <p>People Counting, Dwell Time, Heat Map, Alerts, Transitions…</p>
          </div>

          <div className="flex flex-col items-center justify-center content-center align-center " >
            <div className='w-full' >
            <Image layout='responsive' src={eCRM} alt ='ecrm' />
            </div>
            <h1 className='text-3xl text-center' style={{marginTop:"20px"}}>CRM Optin Tool</h1>
            <p>Customers opt-in and you can see the contact info store by store</p>
          </div>

          <div className="flex flex-col items-center justify-center content-center align-center " >
            <div className='w-full ' >
            <Image layout='responsive' src={ERP} alt ='erp' />
            </div>
            <h1 className='text-3xl text-center' style={{marginTop:"20px"}}>ERP Data Integration</h1>
            <p>Measure the conversion rate of each product</p>
          </div>

          
          
      </Carousel>
    </div>
            </div>

        
        
      </div>
      </Modal>
              </motion.div>
              <motion.div className={styles.intro}
              transition={{duration: 0.5, type: 'easeInOut'}} 
              initial="hidden"  exit="exit"
              variants = {RLvariants} animate = {controls}
              >
                <h2 /*className= '2xl:leading-loose' */ style = {{margin:"0.5em 0em"}}>Responsible, Precise, Intuitive</h2>
                <p /*className= ' 2xl:leading-loose' style = {{fontSize:"18px"}}*/>
                Ariadne is the operating system of commercial real estates that provides advanced, 
                real-time customer analytics enabled with award winning accuracy and certified privacy 
                compliance. <br/> Track your customer journey with Ariadne’s low-cost, plug-and-play solution – no 
                app, no network connection, no cameras!</p>

                <p id={styles.list} /*className= 'leading-10 2xl:leading-loose'*/>

      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Footfall, Dwell Time, Heatmap, Transitions Between Areas, ERP/BI/POS Integration... <br/>
      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Workforce Management<br/>
      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Asset Tracking<br/>
      <span><CheckIcon /></span>&nbsp; &nbsp; &nbsp;Navigation<br/>

      </p>
              </motion.div>
          </motion.div>
        </div>

        <div className={`${styles.section2}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` } ref = {element2}>
          
<motion.div
transition={{duration: 0.4, type: 'easeInOut'}} 
initial="hidden"  exit="exit"
variants = {variants} animate = {controls2}>

<div className='flex flex-row justify-center' >
<h1 className='text-center' /* xl:w-3/4 sm:w-full xs:w-full' style={{fontSize:"40px"}} */>See how our customers are succeeding <br/> with Ariadne</h1>
          </div>

</motion.div>
          <motion.div
           transition={{duration: 0.5, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {variants} animate = {controls2}

          
          >
          <VideoCarousel/>
          </motion.div>
        </div>
        <div className={styles.section3} >
              <motion.div
              transition={{duration: 0.4, type: 'easeInOut'}} 
              initial="hidden"  exit="exit"
              variants = {variants} animate = {controls3}>
          <h1 className='text-center'>Ariadne Platform</h1>

              </motion.div>

          <div className={`${styles.gifbox}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` } ref = {element3}>
            <motion.div className = {styles.giftext}
             transition={{duration: 0.5, type: 'easeInOut'}} 
             initial="hidden"  exit="exit"
             variants = {LRvariants} animate = {controls3}>
               
              <h3 style={{marginBottom:"3vh"}}>Ariadne Analytics</h3>
              <p style={{marginBottom:"2vh"}}>Obtain people counting, heatmaps, loyalty rate and more!</p>
              <p>With Ariadne analytics, you can review your performance in real time.</p>
            </motion.div>

            <motion.div className = {styles.gif}
             transition={{duration: 0.5, type: 'easeInOut'}} 
             initial="hidden"  exit="exit"
             variants = {RLvariants} animate = {controls3}
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h1.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>

          </div>

          <div className={`${styles.gifbox} bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]`} ref = {element4}>
            <motion.div className = {styles.giftext}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {LRvariants} animate = {controls4}
            
            >
              <h3 style={{marginBottom:"3vh"}}>Ariadne Navigation</h3>
              <p style={{marginBottom:"2vh"}}>Navigate your visitors and guests for an enhanced experience!</p>
              <p>Present promotions in your map to engage and enhance your visitors satisfaction.</p>
            </motion.div>
            <motion.div className = {styles.gif}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {RLvariants} animate = {controls4}
            
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h2.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>
          </div>

          <div className={`${styles.gifbox} bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]`}  ref = {element5}>
            <motion.div className = {styles.giftext}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {LRvariants} animate = {controls5}
            >
              <h3 style={{marginBottom:"3vh"}}>Ariadne Engagement</h3>
              <p style={{marginBottom:"2vh"}}>Ariadne enables your visitors to opt-in to your loyalty program!</p>
              <p>The opt-in feature enables you to push notifications to your visitors the right moment.</p>
            </motion.div>
            <motion.div className = {styles.gif}
             transition={{duration: 0.5, type: 'easeInOut'}} 
             initial="hidden"  exit="exit"
             variants = {RLvariants} animate = {controls5}
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h3.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>
          </div>

          <div className={`${styles.gifbox} bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]`} ref = {element6}>
            <motion.div className = {styles.giftext}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {LRvariants} animate = {controls6}
            
            >
              <h3 style={{marginBottom:"3vh"}}>Ariadne Journey Mapping</h3>
              <p style={{marginBottom:"2vh"}}>Present promotions in your map to engage your visitors.</p>
              <p>Ariadne boosts your efficiency by enabling you to map and localize your products.</p>
            </motion.div>
            <motion.div className = {styles.gif}
            transition={{duration: 0.5, type: 'easeInOut'}} 
            initial="hidden"  exit="exit"
            variants = {RLvariants} animate = {controls6}
            >
            <video   playsInline className='pointer-events-none' width="100%" src="/Videos/h4.mp4" autoPlay loop muted type = "videos/mp4"/>
            </motion.div>
          </div>
          

        </div>




        

        <div className={`${styles.section4} bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]`} ref = {element7} >
        <motion.div
           transition={{duration: 0.5, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {DUvariants} animate = {controls7}
        >
        <h1 className='text-center'>Trusted by industry leaders</h1>

        </motion.div>
          <div className={styles.testimonialContainer}>

          <motion.div className = {styles.testimonialBox}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls7}>
          <div className={styles.testimonialImg}>
          <Image src={s5} alt=''/>


            </div>
               <p>“With 20% increase in product revenue, we scale it immediately to all of our 17 stores”</p>
               <h4 className='my-3'>Dimitris Galanis</h4>
               <h4 className='my-3'>CEO, Praktiker</h4>
          </motion.div>

          <motion.div className = {styles.testimonialBox}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls7}>
          <div className={styles.testimonialImg}>
          <Image src={s22} alt=''/>


            </div>
               <p>&quot;When they said: We are the Google Analytics of the physical world, they were not kidding!&quot;</p>
               <h4 className='my-3'>Thomas Grabert</h4>
               <h4 className='my-3'>Managing Director, Ö-Center Mall</h4>
          </motion.div>

          <motion.div className = {styles.testimonialBox}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls7}>
          <div className={styles.testimonialImg}>
          <Image src={s16} alt=''/>


            </div>
               <p>“A truly plug-n-play solution! I did the installation myself!”</p>
               <h4 className='my-3'>Gina Jacobs</h4>
               <h4 className='my-3'>Business Development Manager, San Diego Airport</h4>
          </motion.div>

          <motion.div className = {styles.testimonialBox}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls7}>
          <div className={styles.testimonialImg}>
          <Image src={s3} alt=''/>


            </div>
               <p>“We recorded the ROI already in the first month with a 40% increase in product revenue!”</p>
               <h4 className='my-3'>Rainer Latzlsperger</h4>
               <h4 className='my-3'>Procurist, Weko</h4>
          </motion.div>


          </div>


        </div>



        <div className={`${styles.section5}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` } ref = {element8} >
        <motion.div
           transition={{duration: 0.5, type: 'easeInOut'}} 
           initial="hidden"  exit="exit"
           variants = {DUvariants} animate = {controls8}
        >
        <h1 className='text-center'>Get Started</h1>
        <p className='text-center'>Ariadne is a plug-n-play solution that does not require ethernet connection or complicated installations.</p>
        </motion.div>
          <div className={styles.products}>

          <motion.div className = {styles.product}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls8}
          
          >
          <div className={styles.productImg}>
          <Image src={floor} alt=''/>


            </div>
          
                  <h2 className='mb-3 mt-7'>Configuration</h2>
                  <p>Design your own floorplan with our state of the art mapping solutions.</p>
          </motion.div>

          <motion.div className = {styles.product}
          transition={{duration: 0.6, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls8}>
            <div className={styles.productImg}>
            <Image src={device2} alt=''/>


            </div>
                  <h2 className='mb-3 mt-7'>Installation</h2>
                  <p>Simply plug the devices in the predetermined sockets.</p>
          </motion.div>

          <motion.div className = {styles.product}
          transition={{duration: 0.9, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {DUvariants} animate = {controls8}
          >
          <div className={styles.productImg}>
          <Image src={screen} alt=''/>


            </div>
          
                  <h2 className='mb-3 mt-7'>The Dashboard</h2>
                  <p>Voila! Now you can make the most out of your existing traffic.</p>
          </motion.div>


          </div>


        </div>

        <div className={`${styles.section6}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` } ref ={element9}>
          <motion.div
          
          transition={{duration: 0.4, type: 'easeInOut'}} 
initial="hidden"  exit="exit"
variants = {variants} animate = {controls9}>

          <h1 className="text-center ">Spotlight</h1>


          </motion.div>

          <motion.div className={styles.blogCarousel}
          transition={{duration: 0.5, type: 'easeInOut'}} 
          initial="hidden"  exit="exit"
          variants = {variants} animate = {controls9}
  
          
          >
          <HomeBlogPosts/>

          </motion.div>
        </div>

       


        <div className={`${styles.section7}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` }>

          <h1 className="text-center">Let&rsquo;s talk</h1>
          

          <iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03"
          loading='lazy'          
          frameBorder="0" max-width='100%' height='700em' backgroundcolor = "white" title = 'calendly' sandbox="allow-same-origin allow-scripts" ></iframe>
          
          
        </div>

      </main>
        </div>
      
    </div>
   </div>
  )
}