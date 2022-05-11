import React, { useState, useMemo } from 'react'
import Head from 'next/head'


import styles from '../../styles/Industries.module.css'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from '../../components/Parallaximg';
import ContactForm from '../../components/ContactForm'

// import {db} from '../../config/firebase'
// import {collection, addDoc} from "firebase/firestore"


const contact = () => {
//   const [firstName,setFirstName] = useState('')
//   const [lastName,setLastName] = useState('')
//   const [email, setEmail]= useState('')

//   const [company, setCompany] = useState('')
//   const [subject,setSubject] = useState('')
//   const [message,setMessage] = useState('')

  
//   const formCollectionRef = collection(db,"ContactForm")




// const firstNameHandler = value => {
//   setFirstName(value)
// }
// const lastNameHandler = value => {
//   setLastName(value)
// }
// const emailHandler = value => {
//   setEmail(value)
// }
// const companyHandler = value => {
//   setCompany(value)
  
// }

// const subjectHandler = value => {
//   setSubject(value)
// }

// const messageHandler = value => {
//   setMessage(value)
// }
// const createMessage = async(firstName,lastName,email,country,subject, message)=>{
//   await addDoc(formCollectionRef,{
//     firstName:firstName,
//     lastName:lastName,
//     email:email,
//     country:country,
//     subject:subject,
//     message:message})
// }

// const submitMessage =()=>{
//     if(firstName===''||lastName===''||email===''|| subject===''|| message===''){
//       alert('Invalid form')
//     } else {
//       createMessage(firstName,lastName,email,country.label,subject, message)
//       alert('sent successful')
//     }
  
 

// } 


  return (
    <> <Head>
    <title>Contact</title>
    <meta name="description" content="Ariadne Maps GmbH" />
    <link rel="icon" href="/ariadneicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
   
  </Head>
  <ParallaxProvider>
       <Parallaximg imgsrc="/Photos/Pages/Contact.jpg" height="80vh" opacity=".5" >
       <div className={styles.banner}>
                   
       <h1 className="text-left">Contact Us</h1>
            
               </div>
 
       </Parallaximg>
 
    </ParallaxProvider>
    
    <div className={styles.contactRow}>
    <div className={styles.contactColumn}>
              <h3 className='mb-6'>Contact Us</h3>
              <h4 className='mb-2'>Ariadne Maps GmbH</h4>
              <p className='mb-24'>
              Brecherspitzstraße 8<br/>

81541 München<br/>

+49 174 4079675 <br/>

contact@ariadnemaps.com 
              </p>

              </div>

            <div className={styles.contactColumn}>

              <ContactForm />

            </div>


    </div></>
   
  )
}

export default contact

