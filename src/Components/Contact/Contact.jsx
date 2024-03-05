import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>How to contact?</h3>
                <p className={styles.contact_desc}>
                We really want to work with everyone to gain work experience. To be able to continue in this career. Every project that we accept to do is like a good book that makes us develop further. Thank you for trusting us.
                </p>
                <p>
                    <address>
                    Thailand <br />
                    Manchester, Thailand
                    </address>
                </p>
                <p><MdAlternateEmail/>65021082@up.ac.th</p>
                <p><SiWhatsapp/>063-xxx-xxx</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Somwang"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Ngoen Sang Dai"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder="eg. abcde@gmail.com" />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact