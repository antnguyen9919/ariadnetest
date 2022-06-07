import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Industries.module.css'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
const disclaimer = () => {
  return (
   <>
    <Head>
        <title>Disclaimer</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
      <ParallaxProvider>
       <Parallaximg imgsrc="/Photos/Pages/Privacy.jpg" height="80vh" opacity=".5" >
       <div className={styles.banner}>
               
               
               <h1 className="text-left font-6xl font-extrabold ">Disclaimer</h1>
            
               </div>
 
       </Parallaximg>
 
    </ParallaxProvider>
    <div className='p-10'>
      

      <div>
      
      <p>

      <b>Legal Notice</b><br/>

      <b>Information in accordance with Section 5 TMG</b><br/>

      <b>Ariadne Maps GmbH</b><br/>
     <b> Boltzmannstrasse 3</b><br/>
     <b> 85748 Munich</b><br/>

     <b>Represented by: </b><br/>
     <b>Georgios Pipelidis</b><br/>
     <b> Nikolaos Tsiamitros</b><br/>



     <b> Contact Information:</b><br/>
     <b> Telephone: +49 (0)89 289 17886</b><br/>
     <b> Fax: +49 (0) 89 289 17307</b><br/>
     <b> E-Mail: contact@ariadnemaps.com</b><br/>
     <b> Internet address: https://ariadnemaps.com</b><br/>



     <b> Register entry:</b><br/>
     <b> Entry in: Handelsregister</b><br/>
     <b> Register Number: HRB 247985</b><br/>
     <b> Register Court: Garching by München, Landkreis München</b><br/>



     <b> Capital:</b><br/>
     <b> Initial or original capital: 25000 €</b><br/>



     <b>VAT number:</b><br/>
     <b> VAT indentification number in accorance with Section 27 a of the German VAT act</b><br/>
     <b> 143/115/00644</b><br/>

     <b> Ust.ID.: DE 323 677 487</b><br/>



     <b>Professional Indemnity Insurance Information:</b><br/>
     <b>Verwaltungs-Berufsgenossenschaft</b><br/>
     <b> Barthstraße 20, 80339 München</b><br/>
     <b> Area covered by insurance: Deutschland</b><br/>

     
      </p>
      </div>
    </div></>
  )
}

export default disclaimer