import React from 'react'
import styles from './WhyUsAlt.module.scss'

const items = [
  "Yaponiyaning Waseda University va AQSH’da ta’lim olgan",
  "Procter & Gamble kompaniyasida ishlagan",
  "Islom Taraqqiyot Banki kompaniyasida ishlagan",
  "Westminster University’da dars bergan",
  "HR sohasida 20 yillik xalqaro tajribaga ega",
]

const WhyUsAlt = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.photoCard}>
            <img
              className={styles.photo}
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop"
              alt="Mentor"
            />
            <div className={styles.caption}>
              <span className={styles.role}>Mentor</span>
              <span className={styles.name}>Kozimxon To’rayev</span>
            </div>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Ustoz haqida</h2>
            <ul className={styles.list}>
              {items.map((t) => (
                <li key={t} className={styles.item}>
                  <span className={styles.check} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsAlt