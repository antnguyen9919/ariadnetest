
import React from 'react'
import styles from '../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from "../sections/animations"
import Head from 'next/head'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../components/Parallaximg';
import Link from 'next/link'


const WhyAriadne = () => {
  return (

    <>
     <Head>
        <title>Why Ariadne</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
     <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      
      <main>
           <div>
           <ParallaxProvider>
         <Parallaximg imgsrc="/Photos/Pages/whyariadne.png" height="80vh" opacity=".5" >
         <div className={styles.banner} >
                 
                 
                 <h1 className="text-left">Why
   
   Ariadne</h1>
               <h4 className='text-left'>Not only localization, but a lot more we have for you! Discover the advantages of using our devices and benefits for your business!
     
     </h4>
                 </div>
   
         </Parallaximg>
   
      </ParallaxProvider>
               
               
               <div className={styles.row}>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/WiFi.svg" />
                     <h4>No Network Connection
   
   
   
   </h4>
                     <p>For localization and data, we don&rsquo;t need the customers and passengers to connect to any kind of network, such as WiFi or mobile data.
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/Phone.svg"  />
                     <h4>No Application Installation
   
   
   
   
   </h4>
                     <p>Unlike other technologies relying on application installation, our solution offers convenience and works without any application.
   
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/GDPR.svg"  />
                     <h4>GDPR Compliance
   
   
   
   
    </h4>
                     <p>Ariadne is the first framework that applies mathematically proven state-of-the-art anonymization methods in real time for stream data.
   
   
   
   </p>
                   </div>
               </div>
               <div className={styles.row}>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/Patent.svg" />
                     <h4>Patented Technology
   
   
   
   
    </h4>
                     <p>Ariadne Maps already secured its novel technology with multiple patents, publications and scientific papers.
   
   
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/Side.svg"  />
                     <h4>Vertical Differentiation
   
   
   
   
   </h4>
                     <p>We can differentiate between floors of your business area and give you exact details and data for each separate floor.
   
   
   
   
   
   
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/Target.svg"  />
                     <h4>Great Localization Accuracy
   
   
   
   
   
   </h4>
                     <p>
                     Ariadne Maps has been benchmarked by IPIN 2018 and found to be more accurate than leading companies such as Google, IBM, and Samsung.
   
   
   
   
   
   
   
   
   
   </p>
                   </div>
               </div>
   
               <div className={styles.row}  style={{marginBottom:"10em"}}>
                   <div className={styles.column}>
                     <img alt ='sth' src ="/Photos/Pages/whyA/Plug.svg"  />
                     <h4>Easy and Quick Installation
   
   
   
   </h4>
                     <p>A large project, including the installation and calibration, usually takes less than a day to complete and we directly generate analytics.
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/Half.svg"  />
                     <h4>Expert Team
   
   
   
   </h4>
                     <p>Ariadne expert team consists of PhD and Master degree holders and has multiple patents issued and published more than 15 papers.
   
   
   
   
   
   </p>
                   </div>
                   <div className={styles.column}>
                   <img alt ='sth' src ="/Photos/Pages/whyA/Check.svg"  />
                     <h4>Inexpensive Solution
   
   
   
   </h4>
                     <p>
                     Low costs mean lower prices! Ariadne Maps missions to offer its technology and service for the most affordable prices in the industry.
   
   
   
   
   
   
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
   
       </motion.div>
    
    </>

    
   
  )
}

export default WhyAriadne