import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from '../styles/Industries.module.css'
import * as EmailValidator from 'email-validator';
 
 

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const [isSent, setSend] = useState(false)
  const [formData, setFormData] = useState({user_name: "", user_email: "", message: ""})
  const [isEmailValid, setEmailValid] = useState(false)
  const onChangeForm = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})

  }  

  const sendEmail = (e) => {
    e.preventDefault();
    
  
    console.log('form ', form.current)
    if (EmailValidator.validate(formData.user_email)) setEmailValid(true)
    else setEmailValid(false)  // true

    emailjs
      .sendForm(
        "service_sz5fwrj",
        "template_bo5pqb9",
        form.current,
        "5XnEP5pWWhSJWW48B"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setSend(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contactForm}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={onChangeForm}/>
        <label>Email</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={onChangeForm}/>
        {!isEmailValid && <div>Email is not valid..</div>}
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={onChangeForm}/>
        <input type="submit" value="Send" />
      </form>
      {isSent && <div>We have received your message. Our team will contact you shortly.</div>}
      <script>
        
    </script>

    </div>
  );
};

export default ContactForm;