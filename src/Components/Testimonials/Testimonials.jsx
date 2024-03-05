import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          Jesus I have never encountered such a good site before.
          </p>
          <img
            src="577280151-1.jpg"
            alt=""
          />
          <h4>White</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            I am shocked.
          </p>
          <img
            src="513123123413242.jpg"
            alt=""
          />
          <h4>Big</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          human can do?.
          </p>
          <img
            src="20210922_atw_memeStonk_800x800.png"
            alt=""
          />
          <h4>Jarvis</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;