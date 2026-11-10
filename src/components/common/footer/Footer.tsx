import style from "./Footer.module.scss";
import { FOOTER } from "./ts/footer.env";

export const Footer = () => {
  const { BRAND, SOCIALS, COLUMNS, CONTACT_TITLE, CONTACT, LEGAL, DISCLAIMER } =
    FOOTER;

  return (
    <footer className={style.footer}>
      {/* Marca */}
      <div className={style.brand}>
        <img src="/logo/logo-presidente.svg" alt="" />
        {/* <p className={style.logo}>{BRAND.NAME}</p> */}
        <p>{BRAND.TEXT}</p>
        <ul className={style.socials}>
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.footer_container}>
        <div className={style.footer_grid}>
          {/* Columnas de enlaces */}
          {COLUMNS.map((col) => (
            <nav key={col.id} className={style.column} aria-label={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((l) => (
                  <li key={l.id}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contacto */}
          <div className={style.column}>
            <h5>{CONTACT_TITLE}</h5>
            <ul>
              <li>{CONTACT.ADDRESS}</li>
              <li>
                <a href={CONTACT.PHONE.href}>Tel: {CONTACT.PHONE.label}</a>
              </li>
              <li>
                <a
                  href={CONTACT.WHATSAPP.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {CONTACT.WHATSAPP.label}
                </a>
              </li>
              <li>
                <a href={CONTACT.EMAIL.href}>{CONTACT.EMAIL.label}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Barra inferior */}
      <div className={style.bottom}>
        <div>
          <p>
            © {new Date().getFullYear()} Hotel Presidente. Todos los derechos
            reservados.
          </p>
        </div>
        <div>
          <ul className={style.legal}>
            {LEGAL.map((l) => (
              <li key={l.id}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className={style.disclaimer}>{DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
};
