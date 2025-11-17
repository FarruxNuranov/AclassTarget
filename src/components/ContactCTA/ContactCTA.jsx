
import styles from "./ContactCTA.module.scss";


function ContactCTA() {
  
  return (
    <section id="contact-cta" className={styles.section}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.wrap}>
            <div className={styles.text}>
              <div className={styles.badge}>ALOQA</div>
              <h3 className={styles.title}>
                Hoziroq ariza qoldiring va 5ta darsni bepulga oling!
              </h3>
              <p className={styles.subtitle}>
                Aloqa uchun so’rovni to’ldiring — yaqin orada siz bilan
                bog’lanamiz.
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
