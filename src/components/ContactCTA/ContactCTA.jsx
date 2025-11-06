import React from 'react';
import styles from './ContactCTA.module.scss';

function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.wrap}>
            <div>
              <div className={styles.badge}>ALOQA</div>
              <h3 className={styles.title}>Xozroq ariza qoldiring va 5ta darsni bepulga oling!</h3>
              <p className={styles.subtitle}>Aloqa uchun so’rovni to’ldiring — yaqin orada siz bilan bog’lanamiz.</p>
            </div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input className={styles.input} placeholder="Ismingiz" />
              <input className={styles.input} placeholder="Telefon raqamingiz" />
              <button className={styles.button} type="submit">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
