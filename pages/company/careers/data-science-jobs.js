import React from 'react'
import Head from 'next/head'
const DataScience = () => {
  return (
    <div>
       <Head>
        <title>Data Science Career</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
        <div className='container w-full' >
        <img className='object-fill h-fill w-full'   src = "/Photos/Pages/jobs.jpg" />
        </div>

        <div className='xl:p-8 ' >
            <h1>Data Scientist</h1>
            <p className='italic' >Munich,Germany</p>
            <p className='xl:py-5' >
            Ariadne Maps is a Munich based high tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. We make use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their infrastructure.<br/><br/>

At Ariadne Maps, we value innovative ideas, personality, ambition and an open mind. We do appreciate different lifestyles and cultural backgrounds. Ariadne&rsquo;s team comes from different nationalities, all working together inclusively and respectfully.<br/><br/>

We are currently looking for: Data Scientist who could join the technology team at Ariadne Maps and improve disruptive technology powered by state-of-the-art techniques.

                
            </p>
            
            <h3 className='xl:mb-2' >What You&rsquo;ll Do</h3>
            <ul className='list-disc list-inside'>
                <li>Transform and prepare data in coordination with our Data Scientists to allow both data exploration as well as data deep dives together with our customers.</li>
                <li>Combine the data collected from our devices with data from both internal and external data sources.</li>
                <li>Work in an agile, design thinking team &#8211; everybody can talk to stakeholders including customers and together we build great products</li>
                <li>Contribute end-to-end for data science projects, from data processing, to training, evaluating, to deploying and monitoring</li>
                <li>Understand business objectives and translate them into solutions that leverage machine learning</li>
                <li>Monitor data quality and work on feature engineering</li>
                <li>Contribute to automated model training and inference pipelines</li>
                <li>Support the team to define model validation and monitoring strategies</li>
                <li>Analyze the shortcomings of existing solutions and iterate on improvements</li>

            </ul>
            <h3 className='xl:mt-8 xl:mb-2' >What You Should Bring</h3>

            <ul className='list-disc list-inside'>
                <li>Background in a quantitative field such as computer science, mathematics, economics, statistics, electrical engineering</li>
                <li>Proficiency in Python and experience with specialized ML libraries</li>
                <li>First-hand experience in deploying, maintaining, and updating models in production</li>
                <li>Solid understanding of the benefits and drawbacks of different ML algorithms</li>
                <li>Experience working with cloud-platform environments, such as AWS</li>
                <li>Fluency in English (German would be an advantage)</li>

                               

            </ul>

        </div>
    </div>
  )
}

export default DataScience