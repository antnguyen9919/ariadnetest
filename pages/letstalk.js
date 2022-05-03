import React from 'react'
import Head from 'next/head'
const letstalk = () => {
  return (
    <div>
       <Head>
        <title>Schedule a call</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
    <iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03" 
    loading='lazy'
    frameBorder="0" width='100%' height='1000px' title = 'calendly' sandbox="allow-same-origin allow-scripts allow-popups allow-forms" ></iframe></div>
  )
}

export default letstalk