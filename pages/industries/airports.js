import { variant1,transition } from '../../sections/animations';
import Head from 'next/head'
import React from 'react';
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import Image from 'next/image';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import Link from 'next/link'

function Airport() {
  return<>
   <Head>
        <title>Airports</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>


<motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}    className ={styles.all}>
    

    <main >
    <ParallaxProvider>
       <Parallaximg imgsrc="/Photos/Pages/airport.jpg" height="80vh" opacity=".5" >
       <div className={styles.banner} >
               
               
               <h1 className="text-left">Airports</h1>
             <h4 className='text-left'>Ariadne Maps helps airports understand and serve their passengers better, provide useful services, and do more targeted marketing campaigns
   
   </h4>
               </div>
 
       </Parallaximg>
 
    </ParallaxProvider>
 
         <div >
             
             
             <div className={styles.row}>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/AB.svg" />
                   <h4>Passenger Insights</h4>
                   <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow. </p>
                 </div>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/People.svg"  />
                   <h4>Minimize Queue Time</h4>
                   <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow.
 
 </p>
                 </div>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/Bag.svg"  />
                   <h4>Shopping Area</h4>
                   <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow.
 
 </p>
                 </div>
             </div>
             <div className={styles.row}>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/Routes.svg"  />
                   <h4>Shorter Paths</h4>
                   <p>With the data and insights we offer, you can improve the processes to reduce lines at airports, knowing that for those customers that aren&rsquo;t planning ahead, they&rsquo;re going to choose your provided line since it&rsquo;s the shortest</p>
                 </div>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/Manager.svg"  />
                   <h4>Check-in and Security</h4>
                   <p>You can see the number of people waiting at check-in and security areas, for how long they have been waiting and the average waiting time. Having this data, you can allocate the staff optimally and ensure the customer satisfaction.
 
 
 
 </p>
                 </div>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/Placement.svg"  />
                   <h4>Efficient Areas
 </h4>
                   <p>
                   See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.
 
 
 
 </p>
                 </div>
             </div>
 
             <div className={styles.row} style={{marginBottom:"10em"}}>
                 <div className={styles.column}>
                   <img src ="/Photos/Pages/Airport/Analytics.svg"  />
                   <h4>Data-Driven Growth</h4>
                   <p>Growth of your airport is all about being data-driven, rather than relying on anticipation or gut feeling. The more insight you capture, the more you correlate. </p>
                 </div>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/Transitions.svg"  />
                   <h4>Inexpensive Testing</h4>
                   <p>You develop hypothesis to figure out customer behavior, either by experiments or conducting use surveys, which incur you high costs. Using our inexpensive solution, you can test it with reliable data.
 
 </p>
                 </div>
                 <div className={styles.column}>
                 <img src ="/Photos/Pages/Airport/More.svg"  />
                   <h4>More </h4>
                   <p>
                   Employee supervision, machine/asset tracking, visitor averages comparison over time, unique versus repeating passengers, country of origin of your visitors, real time traffic data and trends…
 
 
 </p>
                 </div>
             </div>
             <div className={styles.blackCTA} style={{marginBottom:"-1.5em"}}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white' style={{fontWeight:"300"}} >Work together?</h1>
      <Link href ="/letstalk"><a><button className=' bg-white text-black hover:bg-slate-200 py-2 mt-8 px-3 text-lg mt-5'>Let&rsquo;s Talk</button></a></Link>
      </div>
        </div>
         </div>
 
 
    </main>
 
 
   </motion.div>;
 </>
}

export default Airport;
