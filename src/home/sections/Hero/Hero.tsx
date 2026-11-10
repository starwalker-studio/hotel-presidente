import { Button } from "../../../components/ui/button/Button";
import { SECTIONS } from "../ts/sections.env";
import style from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero_section}>
      <div className={style.overlay} />
      <div className={style.hero_container}>
        <div className={style.hero_wrapper}>
          <div className={style.hero_content}>
            <div className={style.hero_title}>
              <h1>{SECTIONS.HERO.TITLE}</h1>
              <p>{SECTIONS.HERO.SUBTITLE}</p>
            </div>
            <div className={style.hero_buttons}>
              <Button label={SECTIONS.HERO.SECONDARY_BUTTON} variant="light" />
              <Button label={SECTIONS.HERO.MAIN_BUTTON} />
            </div>
            <ul className={style.hero_footer_info}>
              {SECTIONS.HERO.ADDITIONAL_DATA.map((f) => (
                <li key={f.id}>{f.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
