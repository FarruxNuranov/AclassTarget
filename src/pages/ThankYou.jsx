import React, { useState, useEffect } from "react";
import styles from "../components/ContactCTA/ContactCTA.module.scss";

function ThankYou() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Откроем модалку сразу после перехода на страницу
    setOpen(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0f1115" }}>
      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div
            className={styles.modal}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <div className={styles.modalIconWrapper}>
              <div className={styles.modalIconCircle}>
                <span className={styles.modalIconCheck}>✓</span>
              </div>
            </div>
            <h3 className={styles.modalTitle}>Ваша заявка успешно принята!</h3>
            <p className={styles.modalText}>
              Скоро с вами свяжется наш менеджер.
            </p>
            <p className={styles.modalSubText}>
              Все актуальные новости в нашем Telegram-канале:
            </p>
            <a
              className={styles.modalButton}
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
            >
              ПЕРЕЙТИ В TELEGRAM
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThankYou;
