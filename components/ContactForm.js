import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from '../styles/Industries.module.css'

// npm i @emailjs/browser

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;