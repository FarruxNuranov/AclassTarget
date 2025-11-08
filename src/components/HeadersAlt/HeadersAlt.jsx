import React from "react";
import styles from "./HeadersAlt.module.scss";
import { ogon } from "../../utils/getImg";

function HeadersAlt() {
  return (
    <section className={styles.hero}>
     <div className="container">
         <div className={styles.main}>
        <div className={styles.leftBox}></div>
        <div className={styles.content}>
          <div className={styles.badge}>
            {" "}
            <img src={ogon} alt="" />
            <span>Profwssional HR Kursi</span>
          </div>
          <h1 className={styles.title}>
            Ariza qoldiring va 5 darsni bepulga oling! 
          </h1>
          <button className={styles.cta}>Bepul dars olish</button>
        </div>
      </div>
     </div>
    </section>
  );
}

export default HeadersAlt;
