import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {AnimatePresence} from "framer-motion"
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';




function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TLNNDCF' });
  }, []);

  return(
   
      <Layout>
    <AnimatePresence initial={true} exitBeforeEnter> 
      
      <Component {...pageProps} />
    
    </AnimatePresence>
    </Layout>
   
   ) 
}

export default MyApp
