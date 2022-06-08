
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from "../../sections/animations"
import Image from 'next/image'
import Head from 'next/head'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';

import Georgios from "/public/Photos/team/Georgios.png"
import Nikos from "/public/Photos/team/Nikos.png"
import Athanasions from "/public/Photos/team/Athanasios.png"
import Elli from "/public/Photos/team/Elli.png"
import HasimKoc from "/public/Photos/team/HasimKoc.png"
import Karolina from "/public/Photos/team/Karolina.png"
import KostasK from "/public/Photos/team/KostasK.png"
import KostasZ from "/public/Photos/team/KostasZ.png"
import Mahade from "/public/Photos/team/Mahade.png"
import Mustafa from "/public/Photos/team/Mustafa.png"
import Najeeb from "/public/Photos/team/Najeeb.png"
import Nam from "/public/Photos/team/Nam.png"
import Precious from "/public/Photos/team/Precious.png"
import Roman from "/public/Photos/team/Roman.png"
import Shahab from "/public/Photos/team/Shahab.png"
import Wasiq from "/public/Photos/team/Wasiq.png"
import KostasT from "/public/Photos/team/KostasT.png"
import Aykut from "/public/Photos/team/Aykut.png"

import Sebastian from "/public/Photos/team/Sebastian.png"
import Max from "/public/Photos/team/Max.png"
import Indraditya from "/public/Photos/team/Indraditya.png"
import Sean from "/public/Photos/team/Sean.png"
import Charlene from "/public/Photos/team/Charlene.png"

import Ted from "/public/Photos/team/Ted.png"
import Victoria from "/public/Photos/team/Victoria.png"
import Francesco from "/public/Photos/team/Francesco.png"
import PatiF from "/public/Photos/team/PatiF.png"
import eu from "/public/Photos/team/eu.png"
import eit from "/public/Photos/team/eit.png"

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Link from 'next/link'


const AboutUs = () => {
  return (
  <>
  <Head>
        <title>About Us</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
  
  <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}>
  <ParallaxProvider>
       <Parallaximg imgsrc="/Photos/Pages/about.jpg" height="80vh" opacity="1" >

       <div className={styles.banner} >
                 
                 
                 <h1 className="text-left">About Us</h1>
               <h4 className='text-left'>If you want to learn more about us, you’re in the right place. Read through to get a better idea about our company.
     </h4>
                 </div>

 
       </Parallaximg>
 
    </ParallaxProvider>
      <main className={styles.main} >
           <div>
               <div className='xl:px-10 px-4 mt-20'>
               <h1 className='text-center mb-10'>
   
   Ariadne Maps</h1>
             <p>Ariadne Maps is a high tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. With this approach, it enables indoor and outdoor localization in many industries such as transportation, malls as well as retailers and airports. We make use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their infrastructure for e.g., minimizing congestion, having a better targeted advertising and marketing while maximizing satisfaction and experience of consumers. <br/> <br/>
             Ariadne Maps is based in Munich, Germany and has been operating for years. With our rapid growth, we vision to enable physical businesses to leverage the data they have been exposed through the whole time. In this vision, our strong team, advisors, investors and partners give us the confidence to advance, expand and succeed.
   
   </p>
               </div>
               <div className={`${styles.aboutUs} xl:px-10 mt-8 px-4 py-8` }>
   
                 <h3 className='text-center xl:text-left mb-8' >European Union</h3>
                 <div className="flex mb-8 xl:flex-row md:flex-row flex-col  items-center" >
                   <div className='w-40' >
                   <Image src={eu} alt=''/>
                                      </div>
   
                   <p className={styles.euText}>Ariadne Maps is a European company, proudly supported by European Union.</p>
                 </div>
                 <h3 className='text-center xl:text-left mb-8 mt-12'>EIT Digital</h3>
                 <div className="flex xl:flex-row md:flex-row flex-col items-center" >
                   <div className='w-40' >
                   <Image src={eit} alt=''/>
                   </div>
   
                   <p className={styles.euText}>This activity has received funding from the European Institute of Innovation and Technology (EIT). This body of the European Union receives support from the European Unions Horizon 2020 research and innovation programme.</p>
                 </div>
               </div>
                   <h1 className='text-center mt-20' >Ariadne Team</h1>
   
               <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Georgios} alt=''/>
                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>Dr. Georgios Pipelidis</h2>
                     <p className='text-center'>CEO and Co-Founder
   
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Nikos} alt=''/>
                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>Dipl.-Ing. Nikos Tsiamitros
   
   
   
   
   </h2>
                     <p className='text-center'>CTO and Co-Founder
   
   
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Nam} alt=''/>
                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>Nam Le Duc
   
   
   
   
    </h2>
                     <p className='text-center'>Full Stack Developer
   
   
   
   </p>
                   </div>
               </div>
               <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Mustafa} alt=''/>
                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>Mustafa Parlak
   
   
   
   
    </h2>
                     <p className='text-center'>Business Development Manager
   
   
   
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={HasimKoc} alt=''/>
                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>Hasim Koc
   
   
   
   
   </h2>
                     <p className='text-center'>Business Development Manager
   
   
   
   
   
   
   
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Victoria} alt=''/>
                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>Victoria Tsiamitrou
   
   
   
   
   
   </h2>
                     <p className='text-center'>
                     Country Manager (Greece R&D)
   
   
   
   
   
   
   
   
   
   </p>
                   </div>
               </div>
   
               <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={PatiF} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                       Pati Flannery
                         </h2>
                     <p className='text-center'>Strategic Partnerships, N. America
                         </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Francesco} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                       Francesco Vasta
                           </h2>
                     <p className='text-center'>
                       Key Account Manager
                       </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Wasiq} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                       Wasiq Rumaney
                       </h2>
                     <p className='text-center'>
                     Senior Data Engineer
                     </p>
                   </div>
   
                   </div>
   
                   
                   <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Najeeb} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Najeeb Khan                      </h2>
                     <p className='text-center'>
                     Software Engineer
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={KostasT} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Kostas Theocharoulis
   
   </h2>
                     <p className='text-center'>
                     Data Engineer
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Athanasions} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Athanasios Brianis
   
   </h2>
                     <p className='text-center'>
                     UX Data Engineer
   
   </p>
                   </div>
   
                   </div>
                   <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={KostasZ} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Kostas Ziampakas
   
   </h2>
                     <p className='text-center'>
                     Onboarder
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={KostasK} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Kostas Kitsikidis
   
   </h2>
                     <p className='text-center'>
                       Key Account Manager
                       </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Shahab} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Md Shahabuddin
   
   </h2>
                     <p className='text-center'>
                     Wireless Network Engineer
   
   </p>
                   </div>
   
                   </div>
                   <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Precious} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Precious Adipere
   
   </h2>
                     <p className='text-center'>
                     Procurement Specialist
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Mahade} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Mahade Sarkar
   
   </h2>
                     <p className='text-center'>
                     Embedded Systems Engineer
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Karolina} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Karolina Piekarz
   
   </h2>
                     <p className='text-center'>
                     Administrative Assistant
   
   </p>
                   </div>
   
                   </div>
                   <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Elli} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Elli Dimopoulou
   
   
   </h2>
                     <p className='text-center'>
                     Data Scientist
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Roman} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Roman Kees
   
   
   </h2>
                     <p className='text-center'>
                     Data Engineer
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Aykut} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Aykut Ongel
   
   </h2>
                     <p className='text-center'>
                     Senior Embedded Software Engineer
   
   </p>
                   </div>
   
                   </div>

                   <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Max} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Max Dorfmeister
   
   
   </h2>
                     <p className='text-center'>
                     Key Account Manager
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Sebastian} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Sebastian Deppe
   
   
   </h2>
                     <p className='text-center'>
                     VP DACH
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Ted} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Ted Polykandriotis
   
   </h2>
                     <p className='text-center'>
                     Business Officer
   
   </p>
                   </div>
   
                   </div>

                   <div className={styles.row}>
                   <div className={styles.columnA}>
                   <Image src={Sean} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Sean-Ethan Sahai
   
   
   </h2>
                     <p className='text-center'>
                     Key Account Manager
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Indraditya} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Indraditya Bhattacharyya
   
   
   </h2>
                     <p className='text-center'>
                     Data Scientist
   
   
   </p>
                   </div>
                   <div className={styles.columnA}>
                   <Image src={Charlene} alt=''/>

                     <h2 className='text-center mt-2'style={{fontSize:"1.5em"}}>
                     Charlene Su
   
   </h2>
                     <p className='text-center'>
                     Content Marketing & Branding Manager
   
   </p>
                   </div>
   
                   </div>
   
           </div>
   
           <h1 className='text-center mt-40 mb-24'>Our Offices</h1>


          <div className={styles.officeRow} style={{marginBottom:"15em"}}>
          <div className={styles.officeBox}>
              <h4 className='my-3'>Munich, Germany</h4>
              <p className='mb-2'>Our headquarter is based in Munich, Germany.</p>
              <span><LocalPhoneIcon /></span>&nbsp; &nbsp; &nbsp;+49 174 4079675<br/>
              <span><EmailIcon /></span>&nbsp; &nbsp; &nbsp;contact@ariadnemaps.com<br/>
              <span><LocationOnIcon /></span>&nbsp; &nbsp; &nbsp;Brecherspitzstraße 8, 81541 Munich, Germany<br/>
          </div>
          
          <div className={styles.officeBox}>
              <h4 className='my-3'>Veria, Greece</h4>
              <p className='mb-2'>Our Greek office accommodates the R&D department.</p>
              <span><LocalPhoneIcon /></span>&nbsp; &nbsp; &nbsp;+30 697 0074000<br/>
              <span><EmailIcon /></span>&nbsp; &nbsp; &nbsp;contact@ariadnemaps.com<br/>
              <span><LocationOnIcon /></span>&nbsp; &nbsp; &nbsp;Plateia Raktivan 12, Veria 591 32, Greece<br/>
          </div>

          <div className={styles.officeBox}>
              <h4 className='my-3'>California, USA</h4>
              <p className='mb-2'>Our USA office serves our clients in North America.</p>
              <span><LocalPhoneIcon /></span>&nbsp; &nbsp; &nbsp;+1 312 6100517<br/>
              <span><EmailIcon /></span>&nbsp; &nbsp; &nbsp;contact@ariadnemaps.com<br/>
              <span><LocationOnIcon /></span>&nbsp; &nbsp; &nbsp;Berkeley 2150 Shattuck Avenue, Penthouse Berkeley, CA 94704<br/>
          </div>
          </div>


   
      </main>
      <div className={styles.blackCTA}>
        <div className={styles.innerCTA}>
        <h1 className='text-center text-white' style={{fontWeight:"300"}} >Join our team</h1>
      <Link href ="/careers"><a><button className=' bg-white text-black hover:bg-slate-200 py-2 mt-8 px-3 text-lg mt-5'>Careers</button></a></Link>
      </div>
        </div>

       </motion.div></>


  )
}

export default AboutUs