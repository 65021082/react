import React from 'react'
import styles from './Portfolio.module.css'

const user = {
  image1:'https://i.scdn.co/image/ab67616d0000b273a048415db06a5b6fa7ec4e1a',
  image2:'https://i.ytimg.com/vi/uQiF1yOnzDg/maxresdefault.jpg',
  image3:'https://i.ytimg.com/vi/NwFVSclD_uc/maxresdefault.jpg',
  image4:'https://i.ytimg.com/vi/kPlSyYtE63M/maxresdefault.jpg',
  image5:'https://upload.wikimedia.org/wikipedia/en/4/4a/Joji_-_Glimpse_of_Us.png',
  image6:'https://i1.sndcdn.com/artworks-FOxak51X4YUKVOUt-wMsuZQ-t500x500.jpg',
}

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Favorite song</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={user.image1}/>
            <p>Die For You</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.image2}/>
            <p>Double Take</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.image3}/>
            <p>I Love You So</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.image4}/>
            <p>Until I Found You</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.image5}/>
            <p>Here With Me</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.image6}/>
            <p>Glimpse of Us</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio