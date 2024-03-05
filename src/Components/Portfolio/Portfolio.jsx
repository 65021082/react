import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Favorite song</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="ab67616d0000b273a048415db06a5b6fa7ec4e1a.jpg" alt="" />
            <p>Die For You</p>
        </div>
        <div className={styles.port_items}>
            <img src="maxresdefault.jpg" alt="" />
            <p>Double Take</p>
        </div>
        <div className={styles.port_items}>
            <img src="21412412412.jpg" alt="" />
            <p>I Love You So</p>
        </div>
        <div className={styles.port_items}>
            <img src="23423423423.jpg" alt="" />
            <p>Until I Found You</p>
        </div>
        <div className={styles.port_items}>
            <img src="artworks-FOxak51X4YUKVOUt-wMsuZQ-t500x500.jpg" alt="" />
            <p>Here With Me</p>
        </div>
        <div className={styles.port_items}>
            <img src="Joji_-_Glimpse_of_Us.png" alt="" />
            <p>Glimpse of Us</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio