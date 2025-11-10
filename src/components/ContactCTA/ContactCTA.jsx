import React, { useState } from "react";
import styles from "./ContactCTA.module.scss";
import { Select } from "antd";

function ContactCTA() {
  const [phone, setPhone] = useState("+998 ");
  const prefix = "+998 ";
  const formatUzPhone = (val) => {
    let digits = String(val).replace(/[^\d]/g, "");
    if (digits.startsWith("998")) digits = digits.slice(3);
    digits = digits.slice(0, 9);
    const a = digits.slice(0, 2);
    const b = digits.slice(2, 5);
    const c = digits.slice(5, 7);
    const d = digits.slice(7, 9);
    return [prefix, a, a && b ? " " : "", b, b && c ? " " : "", c, c && d ? " " : "", d]
      .filter(Boolean)
      .join("");
  };
  const regionOptions = [
    { value: "andijon", label: "Andijon" },
    { value: "buxoro", label: "Buxoro" },
    { value: "fargona", label: "Fargʻona"},
    { value: "jizzax", label: "Jizzax" },
    { value: "namangan", label: "Namangan" },
    { value: "navoiy", label: "Navoiy" },
    { value: "qashqadaryo", label: "Qashqadaryo" },
    { value: "samarqand", label: "Samarqand" },
    { value: "sirdaryo", label: "Sirdaryo" },
    { value: "surxondaryo", label: "Surxondaryo" },
    { value: "toshkent", label: "Toshkent" },
    { value: "xorazm", label: "Xorazm" },
  ];
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
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input className={styles.input} placeholder="Ismingiz" />
              <input
                className={styles.input}
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={phone}
                onFocus={() => {
                  if (!phone) setPhone(prefix);
                }}
                onChange={(e) => setPhone(formatUzPhone(e.target.value))}
                onKeyDown={(e) => {
                  const pos = e.currentTarget.selectionStart ?? 0;
                  const blockBack = e.key === "Backspace" && pos <= prefix.length;
                  const blockDel = e.key === "Delete" && pos < prefix.length;
                  if (blockBack || blockDel) e.preventDefault();
                }}
                placeholder="Telefon raqamingiz"
              />
              <input
                className={styles.input}
                type="number"
                placeholder="Yoshingiz"
              />
              <Select
                className={styles.select}
                placeholder="Viloyatingiz"
                options={regionOptions}
               
              />
              <button className={styles.button} type="submit">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
