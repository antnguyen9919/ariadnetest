
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from '../../sections/animations';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import Head from 'next/head'
import Link from 'next/link'

const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const transportation = () => {
  return (
   <>
    <Head>
        <title>Transportation</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
   
   
   <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      
      <main>
      <ParallaxProvider>
      <Parallaximg imgsrc="/Photos/Pages/transport.jpg" height="80vh" opacity=".5" >
      <div className={styles.banner} >
              
              
              <h1 className="text-left">Transportation</h1>
            <h4 className='text-left'>Ariadne Maps helps leading transportation companies, including bus and railway 

operators, become more data-driven, understand their passengers and abandon costly strategies.
  
  </h4>
              </div>

      </Parallaximg>

   </ParallaxProvider>
        <div>
            
            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="/Photos/Pages/Transportation/Tickets.svg"  />
                  <h4>Ticket Pricing



</h4>
                  <p>Major transportation companies use surveys to determine their ticket prices, which is costly and inefficient. Ariadne Maps offers required data to improve your ticket prices.

</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/Transportation/Share.svg"  />
                  <h4>Revenue Sharing


</h4>
                  <p>Ariadne Maps helps track a traveler&rsquo;s journey for transit agencies to better share the revenues between railway companies of different nations or subsidiaries of the same company





</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/Transportation/Train.svg"  />
                  <h4>Train Scheduling


 </h4>
                  <p>How often do trains come to the station? How crowded are they? Quantify how many people are waiting for train at each point time, optimize the train timing and length





</p>
                </div>
            </div>
            <div className={styles.row} style={{marginBottom:"10em"}}>
                <div className={styles.column}>
                <img src ="/Photos/Pages/Transportation/Bag.svg"  />
                  <h4>Retail Hubs


 </h4>
                  <p>Network Rail footfall studies show that 25% of people coming to its stations are not travelers, but actually use them as hubs for shopping and dining, paving the way for more retail opportunities. To optimize the retail section, you can have a look at what we offer.



</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/Transportation/Strategies.svg"  />
                  <h4>Leverages


</h4>
                  <p>Find strategies that gives you maximum output with the least expenses! By using the data we provide in conjunction with your understanding of the customer journey, you can evaluate where opportunities for leverage exist.







</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/Transportation/More.svg"  />
                  <h4>More

</h4>
                  <p>
                  Passengers to be directed to emptier compartments of the train, unique versus returning passengers to be compared, Ariadne&rsquo;s reliable and precise data to be employed instead of intuition, and many more







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

export default transportation