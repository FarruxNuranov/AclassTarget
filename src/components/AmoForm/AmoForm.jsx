import React, { useEffect, useRef } from "react";

// Компонент обёртка для amoCRM формы
// Форма и вся логика остаются на стороне amoCRM, мы только подгружаем их скрипт

function AmoForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Если скрипт уже инициализирован, второй раз не подключаем
    if (document.getElementById("amoforms_script_1631090")) {
      return;
    }

    // Вставляем инлайновый конфигурационный скрипт (как в index.html)
    const inlineScript = document.createElement("script");
    inlineScript.type = "text/javascript";
    inlineScript.innerHTML = `!(function (a, m, o, c, r, m2) {
      (a[o + c] = a[o + c] || {
        setMeta: function (p) {
          this.params = (this.params || []).concat([p]);
        },
      }),
        (a[o + r] =
          a[o + r] ||
          function (f) {
            a[o + r].f = (a[o + r].f || []).concat([f]);
          }),
        a[o + r]({
          id: "1631090",
          hash: "47ea286ed3a6da1558fbb8409c82f1d8",
          locale: "ru",
        }),
        (a[o + m2] =
          a[o + m2] ||
          function (f, k) {
            a[o + m2].f = (a[o + m2].f || []).concat([[f, k]]);
          });
    })(window, 0, "amo_forms_", "params", "load", "loaded");`;

    // Подключаем внешний скрипт amoCRM
    const externalScript = document.createElement("script");
    externalScript.id = "amoforms_script_1631090";
    externalScript.async = true;
    externalScript.charset = "utf-8";
    externalScript.src =
      "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1763386325";

    const current = containerRef.current || document.body;
    current.appendChild(inlineScript);
    current.appendChild(externalScript);

    // Ничего не чистим на unmount, чтобы форма не пересоздавалась при мелких рендерах
  }, []);

  return <div ref={containerRef} />;
}

export default AmoForm;
