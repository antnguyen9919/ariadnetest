
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from '../../sections/animations';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import Head from 'next/head'
import Link from 'next/link'

const hospitality = () => {
  return (
   <>
    <Head>
        <title>Hospitality</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
   
   <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      
      <main>
      <ParallaxProvider>
         <Parallaximg imgsrc="/Photos/Pages/hospitality2.jpg" height="80vh" opacity=".5" >
         <div className={styles.banner} >
                 
                 
                 <h1 className="text-left">Hospitality</h1>
               <h4 className='text-left'>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,
   
   identify their unnecessary costs and increase their revenues.
     
     </h4>
                 </div>
   
         </Parallaximg>
   
      </ParallaxProvider>
           <div>
               
               
               <div className={styles.row}>
                   <div className={styles.column}>
                   <img src ="/Photos/Pages/Hospitality/nav.svg" />
                     <h4>Guest Navigation</h4>
                     <p>Ariadne Navigation enables you to offer a better experience to your guests via navigating them to their destinations with great convenience, shorter routes
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img src ="/Photos/Pages/Hospitality/Promotion.svg" />
                     <h4>Push notifications
   
   </h4>
                     <p>Notifications based on location and history are to be pushed, e.g., happy to host you again, enjoy your 20% discount, or, breakfast is to start in 20 minutes, here are the directions…
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img src ="/Photos/Pages/Hospitality/Review.svg" />
                     <h4>Review and Feedback
   
   </h4>
                     <p>To improve your service, short online surveys can be pushed to your guests and their feedback can be received, e.g., how would you rate your experience with the pool today…
   
   
   
   </p>
                   </div>
               </div>
               <div className={styles.row} style={{marginBottom:"10em"}}>
                   <div className={styles.column}>
                   <img src ="/Photos/Pages/Hospitality/Strategies.svg" />
                     <h4>Strategy Optimization
   
   </h4>
                     <p>Identify which of your actions, services or promotions bring you the best return, dwell time and loyalty, and work on the most reasonable one</p>
                   </div>
                   <div className={styles.column}>
                   <img src ="/Photos/Pages/Hospitality/Hotel.svg" />
                     <h4>Guest Familiarity
   
   </h4>
                     <p>YEncourage your guests to enjoy your hotel and increase spending via introducing and promoting your amenities, venues and services
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img src ="/Photos/Pages/Hospitality/Funnel.svg" />
                     <h4>Conversion Funnel
   
   
   </h4>
                     <p>
                     Let your concessionaires acquire their conversion funnel of customers, and base your lease agreements on Ariadne&rsquo;s traffic data
   
   
   
   
   
   </p>
                   </div>
               </div>
   
               <div className={styles.blackCTA}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white' style={{fontWeight:"300"}} >Work together?</h1>
      <Link href ="/letstalk"><a><button className=' bg-white text-black hover:bg-slate-200 py-2 mt-8 px-3 text-lg mt-5'>Let&rsquo;s Talk</button></a></Link>
      </div>
        </div>
   
           </div>
   
   
      </main>
   
       </motion.div></>
  )
}

export default hospitality