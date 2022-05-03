
import React from 'react'
import styles from '../../styles/Industries.module.css'
import {motion } from "framer-motion"
import { variant1,transition } from '../../sections/animations';
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import Head from 'next/head'
import Link from 'next/link'

const Retails = () => {
  return (

  <>
    <Head>
    <title>Retail Stores</title>
    <meta name="description" content="Ariadne Maps GmbH" />
    <link rel="icon" href="/ariadneicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
   
  </Head>
    <motion.div initial="hidden" animate="enter" exit="exit" variants={variant1} transition={transition}  >
      
   <main>

   <ParallaxProvider>
      <Parallaximg imgsrc="/Photos/Pages/retail2.jpg" height="80vh" >
      <div className={styles.banner}>
              
              
              <h1  className="text-left">Retail Stores</h1>
            <h4  className='text-left'>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,
identify their unnecessary costs and increase their revenues.
  
  </h4>
              </div>

      </Parallaximg>

   </ParallaxProvider>
        <div>

            
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Staff.svg"  />
                  <h4>Labour Allocation

</h4>
                  <p>When visitors enter the store today, they are most ready to buy. Following the traffic, allocate the labour accurately and ensure the satisfaction of your customers.

</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Conversion.svg" />
                  <h4>Conversion Rate


</h4>
                  <p>Want to figure out how many people convert to be your customers? Measure the visitors passing by your store and compare them to those entering in.



</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Product.svg" />
                  <h4>Product Success


 </h4>
                  <p>With the provided precise data, measure how many visitors each of your products attract! Then compare it to your sales to find out the success of your products.

</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Store.svg" />
                  <h4>Showcase Performance


 </h4>
                  <p>Find out how many people are stopping by your shopping window and how much time they spend there, what they do next. Get all the data to optimize your shopping window!



</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Cart.svg" />
                  <h4>Optimize Spending


</h4>
                  <p>Marketing budgets are finite, which makes you use it to the full potential. Our solution enables marketers to target their spending where it is needed the most.







</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Map.svg" />
                  <h4>Space Efficiency



</h4>
                  <p>
                  See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.







</p>
                </div>
            </div>

            <div className={styles.row} style={{marginBottom:"10em"}}>
                <div className={styles.column}>
                  <img src ="/Photos/Pages/retail/Manager.svg" />
                  <h4>Supervision of Associates

</h4>
                  <p>Store associates can be tracked and allocated to where they are needed the most. They can be optimally supervised to see their promised effort.

</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Discount.svg" />
                  <h4>Marketing Success

</h4>
                  <p>Calculate the number of your visitors before and after the marketing campaign! See how much increase your marketing strategy leads for each product.



</p>
                </div>
                <div className={styles.column}>
                <img src ="/Photos/Pages/retail/Promotion.svg" />
                  <h4>Promotions and Discounts

</h4>
                  <p>
                  93% of consumers will use offers throughout the year, which means retailers need to have a strategy that tracks and adapts pricing planning to broader market forces.




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

export default Retails