import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Look At me.My Name is</p>
            <h3 className={styles.text_2}>Pattharaphon Promphanat</h3>
            <p className={styles.text_3}>
              <span>I am </span>
              <TypeAnimation
                sequence={[
                  "Web Developer.",
                  1000,
                  // Same substring at the start will only be typed out once, initially
                  "Human.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "But I Come From Namekian.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
            Hello I am a good person I am not a bad person:D
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.hero_image}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;