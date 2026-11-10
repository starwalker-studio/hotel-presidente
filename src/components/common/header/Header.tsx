import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMobileScreen } from "../../../hooks/isMobileScreen";
import { Button } from "../../ui/button/Button";
import { HEADER } from "./elements";
import style from "./Header.module.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const { isMobileScreen, isNavButtonOn, handleClick } = useMobileScreen();
  const isMobile = isMobileScreen();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={style.header_wrapper}>
      <div className={style.header_container}>
        <header className={style.header}>
          <nav>
            <div
              className={`${style.upper_container} ${scrolled ? style.collapsed : ""}`}
            >
              <div className={style.upper_inner}>
                <div className={style.upper_container_grid}>
                  <div className={style.nav_reserv_info}>
                    <p>Informes y reservaciones:</p>
                    <span>800-123-2323</span>
                  </div>
                  <div className={style.nav_logo}>
                    <div className={style.logo_footer_text}>
                      <img src="/logo/logo-presidente.svg" alt="" />
                      <span>Resort Cancún</span>
                    </div>
                  </div>
                  <div className={style.nav_button}>
                    <Button label="reservar" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${style.nav_elements_container} ${scrolled ? style.background_midnight : style.background_sand}`}
            >
              {isMobile && (
                <button
                  type="button"
                  className={style.mobile_icon}
                  onClick={handleClick}
                  aria-expanded={isNavButtonOn}
                  aria-controls="nav-links"
                  aria-label={isNavButtonOn ? "Cerrar menú" : "Abrir menú"}
                >
                  <FontAwesomeIcon icon={isNavButtonOn ? faXmark : faBars} />
                </button>
              )}
              <div
                id="nav-links"
                className={`${style.nav_links} ${isNavButtonOn ? "" : style.mobile_collapsed}`}
              >
                <ul>
                  {HEADER.map((e) => (
                    <li key={e.id}>
                      <NavLink to={e.path}>{e.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};
