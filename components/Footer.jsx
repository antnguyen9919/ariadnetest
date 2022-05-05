import React from 'react';
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
// import Asset16 from '../../Resources/Photos/Asset16.png';
import Link from 'next/link';
// import { useTranslation } from 'react-i18next';



function Footer() {
//   const { t, i18n } = useTranslation();
  return (
    
    

<footer className={styles.footer}>
<div className={styles.footerContainer}>


    
      
 
<div className={styles.footerLinks}>
      
  <div className={`${styles.footerLinkWrapper}`}>

    <div className={styles.logo}>

    <div className={styles.footerLinkItems}>
    <Link  href='/' ><a ><img src="/Photos/Asset16.png" alt="Ariadne Logo" width="140x"/></a></Link>
    </div>
  </div>
  </div>
  <div className={styles.footerLinkWrapper}>

    <div className={styles.footerLinkItems}>
      <h3 className='text-2xl'>Technology</h3>
      {/* <Link href='/solutions/ariadne-mapping'>Ariadne Mapping</Link> */}
      <Link href='/solutions/ariadne-navigation'>Ariadne Navigation</Link>
      <Link href='/solutions/ariadne-analytics'>Ariadne Analytics</Link>
      <Link href='/solutions/ariadne-engagement'>Ariadne Engagement</Link>
      <Link href='/solutions/industries'>Industries</Link>
      <Link href='/solutions/data-lifecycle'>Data Lifecycle</Link>

      
    </div>
  </div>

  <div className={styles.footerLinkWrapper}>
    
  <div className={styles.footerLinkItems}>
      <h3 className='text-2xl' >Company</h3>
      <Link href='/company/about-us'>About Us</Link>
      <Link href='/why-ariadne'>Why Ariadne</Link>
      <Link href='/resources'>Resources</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/company/careers'>Careers</Link>
    </div>
    </div>
  <div className={`${styles.footerLinkWrapperMobile}`}>
    <div className={styles.footerLinkItems}>
      
    
    
      <h3 className='text-center'>Contact Us</h3>
      <div>
      </div>
      <div className={styles.para}>

      <p>Ariadne Maps GmbH

Brecherspitzstraße 8 <br/>

81541 München<br/>
+49 174 4079675

contact@ariadnemaps.com
</p>


      </div>
      
<div style={{fontSize:'20px', marginTop:"0.5em"}}>
<a style={{marginRight:'15px'}} href='https://www.facebook.com/ariadnemaps/'><i className='fab fa-facebook-f hover:scale-125'/></a>
      <a className= 'mx-3' href='https://www.youtube.com/channel/UCetG3dxFlJrFno0ChaJ5VXQ'><i className='fab fa-youtube hover:scale-125' /></a>
      <a className= 'mx-3' href='https://twitter.com/ariadne_maps'><i className='fab fa-twitter hover:scale-125' /></a>
      <a className= 'mx-3' href='https://www.linkedin.com/company/ariadne-maps'><i className='fab fa-linkedin hover:scale-125' /></a>
</div>
            </div>


  </div>
</div>

<hr className = {styles.divider}/>

<section className={styles.socialMedia}>
  <div className={styles.socialMediaWrap}>
   <div>
    <small className={`${styles.websiteRights} pl-8`}>© 2019 - 2022 Ariadne Maps GmbH. All rights reserved.</small>

   </div>
    
    <div className={styles.socialIcons}>
      <Link
        
        href='/company/privacy'
       
      >
        <a className={`${styles.socialiconLink}`}>Privacy Policy</a>
      </Link>
      <Link 
        href='/'><a className={`${styles.socialiconLink} pr-8`}>Impressum</a></Link>
     
    </div>
  </div>
</section>
</div>

      </footer>

    
  );
}

export default Footer;

 