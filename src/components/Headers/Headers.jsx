import React from "react";
import styles from "./Headers.module.scss";

function Headers() {
  return (
    <header className={styles.header}>
      
      <div className="container">
        <div className={styles.main}>
          <div className={styles.leftBox}>
            <img
              className={styles.leftBoxLogo}
              src="/src/assets/images/logo.svg"
              alt="Logo"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.badge}>🔥 Profwssional HR Kursi</div>
            <h1 className={styles.title}>
              Hr sohasini o’rganib
              <span className={styles.bigNumber}>4 000 000</span>
              so’mdan daromdan toping
            </h1>
            <button className={styles.cta}>Bepul dars olish</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headers;
