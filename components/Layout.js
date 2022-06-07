import React from 'react'
import Navbar from '../components/Nav/Navbar.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/Layout.module.css'


const Layout = ({children}) => {
  return (
    <>
    
      
      <Navbar/>
   
      <div className={styles.main}>{children}</div>
      <Footer/>
      </>
    
  )
}

export default Layout