import { SECTIONS } from "../ts/sections.env";
import style from "./Welcome.module.scss";

export const Welcome = () => {
  return (
    <section className={style.welcome_section}>
      <div className={style.welcome_container}>
        <div className={style.welcome_wrapper}>
          <div className={style.welcome_content_grid}>
            <div className={style.content_text}>
              <div>
                <h2>{SECTIONS.WELCOME.TITLE}</h2>
                <p>{SECTIONS.WELCOME.TEXT}</p>
              </div>
              <div className={style.est_list}>
                <ul>
                  {SECTIONS.WELCOME.EST.map((e) => (
                    <li key={e.id}>{e.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.content_img}>
              <img src={SECTIONS.WELCOME.IMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
