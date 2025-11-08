import React from "react";
import styles from "./TeacherAboutAlt.module.scss";
import {  done, teacher } from "../../utils/getImg";

function TeacherAboutAlt() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.media}>
            <img className={styles.photo} src={teacher} alt="Mentor" />
            <div className={styles.captionTop}>Mentor</div>
            <div className={styles.captionName}>Kozimxon To'rayev</div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Ustoz haqida</h2>
            <ul className={styles.list}>
              <li><img src={done} alt="" />Yaponiyaning Waseda University va AQSH’da ta’lim olgan</li>
              <li><img src={done} alt="" />Procter & Gamble kompaniyasida ishlagan</li>
              <li><img src={done} alt="" />Islom Taraqqiyot Banki kompaniyasida ishlagan</li>
              <li><img src={done} alt="" />Westminster University’da dars bergan</li>
              <li><img src={done} alt="" />HR sohasida 20 yillik xalqaro tajribaga ega</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherAboutAlt;
