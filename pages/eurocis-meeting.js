import React from 'react'
import Head from 'next/head'
const eurocismeeting = () => {
  return (
    <div>
       <Head>
        <title>Meet Ariadne</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
    <iframe src="https://calendly.com/ariadnemaps/eurocis-meeting" 
    loading='lazy'
    frameBorder="0" width='100%' height='1000px' title = 'calendly' sandbox="allow-same-origin allow-scripts allow-popups allow-forms" ></iframe></div>
  )
}

export default eurocismeeting