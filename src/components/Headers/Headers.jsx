import React, { useEffect } from "react";
import styles from "./Headers.module.scss";
import {  man, navLogo, ogon } from "../../utils/getImg";

function Headers() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = man;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <header className={styles.header}>
      
      <div className="container">
        <div className={styles.main}>
          <div className={styles.leftBox}>
            <img
              className={styles.heroImg}
              src={man}
              loading="eager"
              decoding="async"
              fetchpriority="high"
              alt="HR Hero"
            />
            <img
              className={styles.leftBoxLogo}
              src={navLogo}
              alt="Logo"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.badge}> <img src={ogon} alt="" />
            <span>Professional HR Kursi</span></div>
            <h1 className={styles.title}>
              Hr sohasini o’rganib
              <span className={styles.bigNumber}>4 000 000</span>
              so’mdan daromdan toping
            </h1>
            <button
              className={styles.cta}
              onClick={() => {
                const el = document.getElementById('contact-cta');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Bepul dars olish
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Headers;

