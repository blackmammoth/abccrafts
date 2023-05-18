import React from 'react';
import styles from '../styles/contactinfo.module.css'
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";


const ContactInfo = () => {
  return (

    <div className={styles.contact_info}>
      <h3 className={styles.contact}>Contact Us</h3>
      <div className={styles.contact_info_item}>
      <AiOutlineMail className={styles.icon}/>
        <a href="mailto:abccraftsgallery@gmail.com"> AbcCraftsGallery@gmail.com</a>
      </div>
      
      <div className={styles.contact_info_item}>
      <AiOutlinePhone className={styles.icon}/>
        <a href="tel:+251945522598">+251 945 522 598</a>
      </div>
    </div>
  );
};

export default ContactInfo;
