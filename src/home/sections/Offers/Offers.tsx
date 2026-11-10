import { SECTIONS } from "../ts/sections.env";
import style from "./Offers.module.scss";

export const Offers = () => {
  return (
    <section className={style.offers_section}>
      <div className={style.offers_container}>
        <div className={style.offers_wrapper}>
          <div className={style.offers_content}>
            <div className={style.offers_content_header}>
              <h2>{SECTIONS.OFFERS.TITLE}</h2>
            </div>
            <div className={style.offers_content_grid}>
              {SECTIONS.OFFERS.PACKAGES.map((p) => (
                <div
                  className={`${style.offer_card} ${style.background} ${style[p.background]}`}
                  key={p.id}
                >
                  <div className={style.overlay} />
                  <p className={style.offer_title}>{p.title}</p>
                  <p>{p.text}</p>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
