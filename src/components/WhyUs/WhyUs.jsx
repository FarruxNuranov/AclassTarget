import React from 'react';
import styles from './WhyUs.module.scss';

const leftItems = [
  'Kursda 20 yillik tajriba jamlangan',
  "Real korxonalarda amaliyot o’tasiz",
  'Ish topishda yordam',
];

const rightItems = [
  "Sertifikatga ega bo’lasiz",
  'Shaxsiy onlayn platforma',
  'Kurs muddati 3 oy',
];

function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <h2 className={styles.title}>Nega aynan biz?</h2>
          <div className={styles.grid}>
            <div className={styles.list}>
              {leftItems.map((text) => (
                <div key={text} className={styles.item}>
                  <span className={styles.badgeIcon} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className={styles.list}>
              {rightItems.map((text) => (
                <div key={text} className={styles.item}>
                  <span className={styles.badgeIcon} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
