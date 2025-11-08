import React from "react";
import styles from "./EducationHowAlt.module.scss";
import { card1, card2, card3, card4, card5 } from "../../utils/getImg";

const items = [
  {
    id: 1,
    title: "Onlayn taʼlim",
    text: "Istalgan joydan onlayn formatda, qulay platforma orqali oʻqiysiz.",
    icon: card1,
  },
  {
    id: 2,
    title: "Bepul amaliyot",
    text: "Hamkor kompaniyalarda bepul amaliyot oʼtasiz.",
    icon: card2,
  },
  {
    id: 3,
    title: "Ishga kirishda yordam",
    text: "Hamkor kompaniyalarga ishga joylashishda yordam beramiz.",
    icon: card3,
  },
  {
    id: 4,
    title: "Real loyihalar",
    text: "Real tajribaga asoslangan amaliy darslar.",
    icon: card4,
  },
  {
    id: 5,
    title: "Sertifikat",
    text: "Oʼqishni bitirib sertifikatga ega boʼlasiz.",
    icon: card5,
  },
];

function EducationHowAlt() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Taʼlim Qanday Oʼtadi?</h2>
        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.id} className={styles.card}>
              <div className={styles.icon}><img src={it.icon} alt="" /></div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardText}>{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationHowAlt;
