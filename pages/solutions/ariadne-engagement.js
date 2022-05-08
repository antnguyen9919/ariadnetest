import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Solutions.module.css'
import {motion} from 'framer-motion'
import home from '../../styles/Home.module.css'
import phonewp from '../../public/Photos/Pages/Engagement/phonewp.png'
import { typographyClasses } from '@mui/material'

import scan from "../../public/Photos/Pages/Engagement/scan.png"
import somescreen from "../../public/Photos/Pages/Engagement/somescreen.png"
import phone2 from "../../public/Photos/Pages/Engagement/phone2.jpg"

const variants = {
  hidden:{opacity: 0, x:0, y:20},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:20}
}
const herovariants = {
  hidden:{opacity: 0, x:0, y:0},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:0}

}
const heroVvariants = {
  hidden:{opacity: 0, x:0, y:200},
  enter:{opacity:1, x:0, y:0},
  exit:{opacity:0,x:0,y:200}

}
const AriadneEngagement = () => {
  return (
    <div>
      <Head>
        <title>Ariadne Engagement</title>
        <meta name="description" content="Ariadne Engagement" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/ariadneicon.png" />
       
      </Head>

            <motion.div exit={{opacity:0}} variants = {variants}  className={styles.hero} >
          <div className={styles.heroContainer}>

            <div className = {styles.heroTextContainer}>
            <div className={styles.heroText}>
            <motion.h1 initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3}} >Ariadne <br/>
Engagement</motion.h1>
              <motion.p initial="hidden" animate="enter" exit="exit" variants={herovariants} transition={{duration: 0.2, type: 'easeInOut'}}>Engage with your visitors at the right time and the right place. Develop strategies targeted to specific clusters of customers</motion.p>
              
            </div>
            </div>

            <div className={styles.heroEScreen} >
            
            <motion.img initial="hidden" animate="enter" exit="exit" variants={heroVvariants} transition={{duration: 0.5, type: 'spring', bounce: 0.3 }} src = "/Photos/Pages/Engagement/phonewp.png"   />

          
           
           
            </div>

          </div>
        </motion.div>

      <main>
      <div className={`${styles.gifbox}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` }>
            <div className = {styles.giftext}>
              
              <p>The relationship between the business and its customers is elevated through engagement.</p>
              <p>Ariadne Engagement allows you to give personalized offers and valuable product information to your customers in real time when they need it the most.</p>
            </div>
            <div className = {styles.gif}>
            <video  playsInline className='pointer-events-none' width="100%" src="/Videos/h3.mp4" autoPlay loop muted type = "videos/mp4"/>
            </div>
          </div>


          <div className={`${styles.sectionE1}  bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#f9f9f9]  ` }>
            <div >
              <img src = "/Photos/Pages/Engagement/Phone.jpg"/>
            </div>
            <div className={styles.E1content}>

            <div>
              <h4>
              Unlock Hyperlocal Marketing
              </h4>
              <p  >
              We offer businesses the ability to send visitors dynamic and customised promotions based on their location and previous interests.
              </p>
            </div>
            <div>
              <h4>
              Enable Real-Time Recommendations              </h4>
              <p>
              Do you have a sweet spot in your business that you&rsquo;d like to introduce to your customers? We assist you in sending real-time customised recommendations to customers.
              </p>
            </div>
            <div>
              <h4>
              Reviews Make The Deal              </h4>
              <p>
              New Customers make their purchase decision based on reviews and ratings. We enable and encourage customers to provide feedbacks and surveys.
              </p>
            </div>

            </div>

            
          </div>

          <div className={`${styles.navB} mb-8 bg-black text-white content-center justify-center flex items-center`}>
              <div className='text-justify w-3/4' >
              <h1 className='text-center mb-6'>Here is an example</h1>
              <p>A customer walks into the store and spends the most time in the shirts section. In the end, she walks away without buying an item. About the exit, she receives a text saying &#8220;Get a 20% discount on shirts with the code DISC20, today only!&#8221; and walks back in to make a discounted purchase, which benefits both the customer and the business.</p>
              </div>
            </div>

           <div className={styles.sectionE2}>
                <div className={styles.E2content}>
                  <h4>All-in-One Platform</h4>
                  <p className='text-justify mb-4'>Ariadne connects the data from your store to your CRM system, allowing you to run targeted marketing campaigns. Ariadne also assists for a complete perspective of consumer behavior that includes both online and on-premises activity.</p>
                  <h4>Design Efficient Campaigns </h4>
                  <p className='text-justify'>Measure the success of your campaigns, e.g., a temporary theme park, and compare results</p>

                </div>

                <div className={styles.E2img}>

                  <img  src="/Photos/Pages/Engagement/somescreen.png" alt = "sc" />
                </div>
             </div> 

             <div className={`${styles.navB} my-8 bg-black text-white content-center justify-center flex items-center`}>
              <div className='text-justify w-3/4' >
              <h1 className='text-center mb-6'>Privacy First!</h1>
              <p>Our experience shows that most customers are happy to opt-in and share information to benefit from the promotions and the additional services. At Ariadne Maps, we put the privacy of customers first and establish a reliable relationship between the customers and the businesses.</p>
              </div>
            </div>

            <div className={`${styles.products}  mt-20 mb-16`}>
        <h1 className='text-center'>Get Started</h1>
        
          <div className={styles.productsIn}>

          <div className = {styles.product}>
          <div className={`${styles.productImg} ${styles.productImg}`}>
          <Image src={scan} alt=""/>

            </div>
          
                  
                  <p>Let your customers simply tap their phones or scan a QR code</p>
          </div>

          <div className = {styles.product}>
            <div className={`${styles.productImg} ${styles.productImg}`}>
            <Image src={somescreen} alt=""/>

            </div>
                  
                  <p>View them automatically added to your customized CRM tool</p>
          </div>

          <div className = {styles.product}>
          <div className={`${styles.productImg} ${styles.productImg}`}>
          <Image src={phone2} alt=""/>

            </div>
          
                  
                  <p>Notify your customers of promotions etc. based on their location behaviour (visit frequency, nearby location, dwell time) with SMS, push notifications, email or even social media</p>
          </div>


          </div>


        </div>
      </main>
      <div className={styles.blackCTA}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white' style={{fontWeight:"300"}} >Work together?</h1>
      <Link href ="/letstalk"><a><button className=' bg-white text-black hover:bg-slate-200 py-2 mt-8 px-3 text-lg mt-5'>Let&rsquo;s Talk</button></a></Link>
      </div>
        </div>
    </div>
  )
}

export default AriadneEngagement