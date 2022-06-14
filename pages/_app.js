import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {AnimatePresence} from "framer-motion"
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import Script from 'next/script'

 

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TLNNDCF' });
  }, []);

  return(
   
     <>
    <Script strategy="lazyOnload" src = {`https://www.googletagmanager.com/gtag/js?id=G-DY5ZJ1KV4Y`} />

    <Script strategy="lazyOnload"  >
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DY5ZJ1KV4Y');`}
    </Script>   

<Layout>
    <AnimatePresence initial={true} exitBeforeEnter> 
      
      <Component {...pageProps} />
    
    </AnimatePresence>
    </Layout>
     </>
   
   ) 
}

export default MyApp
