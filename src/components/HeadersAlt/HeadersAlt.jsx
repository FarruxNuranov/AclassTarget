import styles from "./HeadersAlt.module.scss";

function HeadersAlt() {
  return (
    <header className={styles.header}>
      
      <div className="container">
        <div className={styles.main}>
       
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

export default HeadersAlt;
