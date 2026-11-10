import { Button } from "../../../components/ui/button/Button";
import { SECTIONS } from "../ts/sections.env";
import style from "./Explore.module.scss";

export const Explore = () => {
  return (
    <section className={style.explore_section}>
      <div className={style.explore_container}>
        <div className={style.explore_wrapper}>
          <div className={style.explore_info}>
            <div className={style.explore_header}>
              <h2>{SECTIONS.EXPLORE.TITLE}</h2>
              <p>{SECTIONS.EXPLORE.SUBTITLE}</p>
            </div>
            <div className={style.explore_content_grid}>
              {SECTIONS.EXPLORE.EXPERIENCE.map((e) => (
                <div className={style.explore_card} key={e.id}>
                  <div className={style.explore_img}>
                    <img src={e.img} alt="" />
                  </div>
                  <div className={style.explore_content}>
                    <div className={style.explore_content_header}>
                      <p>{e.title}</p>
                    </div>
                    <div className={style.explore_desc}>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.explore_content_button}>
              <Button label={SECTIONS.EXPLORE.BUTTON} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
