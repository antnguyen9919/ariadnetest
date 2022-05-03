import React from 'react'
import Head from 'next/head'
const Socialmedia = () => {
  return (
    <div>
       <Head>
        <title>Social Media Jobs</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
        <div className='container w-full' >
        <img className='object-fill h-fill w-full'   src = "/Photos/Pages/jobs.jpg" />
        </div>

        <div className='xl:p-8 ' >
            <h1>Social Media Manager</h1>
            <p className='italic' >Munich,Germany</p>
            <p>(Project Studies)</p>
            <p className='xl:py-5' >
            Join the marketing team at Ariadne Maps and improve disruptive technology powered by state-of-the-art techniques. Ariadne Maps has a start-up culture in which your innovative ideas can be put to the test and impact a billion dollar industry.<br/><br/>

At Ariadne Maps, we appreciate different lifestyles and cultural backgrounds. We welcome diversity as a strength. Our team comes from different nationalities, all working together inclusively and respectfully.
                
            </p>
            
            <h3 className='xl:mb-2' >What You&rsquo;ll Do</h3>
            <ul className='list-disc list-inside'>
                <li>Strategize and enable our growth: Ideate, create and launch content related to building our brand and reach. Keep constant track of data and adapt the content in order to improve performance.</li>
                {/* quotema */}
                <li>Make organic social a channel for growth: You steer the perception of the public via great, shareable content. You build organic social as a channel for growth and brand building, focusing on our target groups and stakeholders. You generate signed customers by &#8220;buzz&#8221;.</li>

                <li>Create great content: You engage and grow our audience by writing, photographing, filming and editing awesome posts. You do this across different channels with different target audiences, e.g. LinkedIn, Instagram and Facebook.</li>

                <li>Build a community: You engage with users, empathize with them and are their advocate to improve our product and storytelling.</li>
                
                <li>Create convincing narratives to convert users: When creating stories, you always have our brand and customers in mind. You make content look and feel seamless to our users. It brings them closer to engaging with us.</li>

                <li>Try out new things: You continuously experiment with new formats and never run out of ideas.</li>
                

            </ul>
            <h3 className='xl:mt-8 xl:mb-2' >What You Should Bring</h3>

            <ul className='list-disc list-inside'>
                <li>Currently advancing in your Bachelor or Master&rsquo;s degree.</li>

                <li>Preferably experience with design programs such as Adobe Illustrator</li>

                <li>Experience in creating content for and managing LinkedIn, Twitter and Facebook social media accounts.</li>
                <li>Proven ability to create great social media content, user stories, photos and videos &#8211; either for yourself or someone else.</li>

                <li>Creative storyteller, bursting with ideas and creativity and with the ability to amplify your ideas by using the right channels to push them.</li>

                <li>Proactive mindset with an ability to think outside the box and enrich the team with new, creative ideas.</li>

                <li>Great communication skills &#8211; able to provide clear &#x26; concise content.</li>    
                <li>Genuine interest in the retail and transportation industry.</li>


                <li>Fluency in English (German would be an advantage)</li>

                               

            </ul>
            <p className='mt-5'>If you are interested, please send us your CV and earliest possible starting date at: <b>careers@ariadnemaps.com</b>.</p>

        </div>
    </div>
  )
}

export default Socialmedia