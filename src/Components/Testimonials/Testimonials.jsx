import React from "react";
import styles from "./Testimonials.module.css";

const user = {
  image1:'https://www.techhub.in.th/wp-content/uploads/2021/05/577280151-1.jpg',
  image2:'https://i.kym-cdn.com/entries/icons/facebook/000/041/895/AALIYAH_WROTE_JAY_AN_APOLOGY_LETTER%F0%9F%93%83__MARK_WANT_DESIREE_AND_HANNAH!%F0%9F%98%B1_4-32_screenshot_(1).jpg',
  image3:'https://www.dictionary.com/e/wp-content/uploads/2021/09/20210922_atw_memeStonk_800x800.png',
}

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
            src={user.image1}
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
            src={user.image2}
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
            src={user.image3}
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