import { SECTIONS } from "../ts/sections.env";
import style from "./Location.module.scss";

export const Location = () => {
  const { TITLE, TEXT, CONTACT, DISTANCES } = SECTIONS.LOCATION;

  return (
    <section className={style.location_section}>
      <div className={style.location_container}>
        <div className={style.location_wrapper}>
          <div className={style.location_grid}>
            <div className={style.location_info}>
              {/* <span className="eyebrow">{EYEBROW}</span> */}
              <h2>{TITLE}</h2>
              <p>{TEXT}</p>

              <ul className={style.contact_list}>
                <li>
                  <span className={style.contact_label}>Dirección</span>
                  <span>{CONTACT.ADDRESS}</span>
                </li>
                <li>
                  <span className={style.contact_label}>Teléfono</span>
                  <a href={CONTACT.PHONE.href}>{CONTACT.PHONE.label}</a>
                </li>
                <li>
                  <span className={style.contact_label}>WhatsApp</span>
                  <a
                    href={CONTACT.WHATSAPP.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {CONTACT.WHATSAPP.label}
                  </a>
                </li>
                <li>
                  <span className={style.contact_label}>Correo</span>
                  <a href={CONTACT.EMAIL.href}>{CONTACT.EMAIL.label}</a>
                </li>
              </ul>

              <ul className={style.distances}>
                {DISTANCES.map((d) => (
                  <li key={d.id}>
                    <strong>{d.time}</strong>
                    <span>{d.place}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.map}>
              <svg
                viewBox="0 0 600 520"
                role="img"
                aria-label="Mapa ilustrativo de la ubicación del Hotel Presidente en la Zona Hotelera de Cancún"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="600" height="520" className={style.land} />
                <rect
                  x="40"
                  y="60"
                  width="120"
                  height="80"
                  rx="10"
                  className={style.park}
                />
                <rect
                  x="70"
                  y="380"
                  width="150"
                  height="90"
                  rx="10"
                  className={style.park}
                />
                <path
                  d="M450 0 L600 0 L600 520 L430 520 C470 420 430 340 465 260 C495 190 440 90 450 0 Z"
                  className={style.sea}
                />
                {/* Franja de playa */}
                <path
                  d="M450 0 C440 90 495 190 465 260 C430 340 470 420 430 520"
                  className={style.beach}
                />
                <g className={style.street_minor}>
                  <path d="M0 130 L380 160" />
                  <path d="M0 250 L400 270" />
                  <path d="M0 360 L390 390" />
                  <path d="M0 470 L370 480" />
                  <path d="M120 0 L100 520" />
                  <path d="M230 0 L215 520" />
                </g>
                <path
                  id="kukulcan-road"
                  d="M345 0 C385 100 335 190 380 270 C415 335 365 430 385 520"
                  className={style.road_outline}
                />
                <path
                  d="M345 0 C385 100 335 190 380 270 C415 335 365 430 385 520"
                  className={style.road}
                />
                <text className={style.road_label}>
                  <textPath href="#kukulcan-road" startOffset="8%">
                    Blvd. Kukulcán
                  </textPath>
                </text>
                <text
                  x="515"
                  y="120"
                  className={style.sea_label}
                  textAnchor="middle"
                >
                  Mar Caribe
                </text>
                <text
                  x="100"
                  y="105"
                  className={style.map_label}
                  textAnchor="middle"
                >
                  Parque
                </text>
                <text
                  x="145"
                  y="430"
                  className={style.map_label}
                  textAnchor="middle"
                >
                  Plaza comercial
                </text>
                <ellipse
                  cx="418"
                  cy="262"
                  rx="18"
                  ry="6"
                  className={style.pin_shadow}
                />
                <g transform="translate(418 262)">
                  <path
                    d="M0 0 C-14 -18 -24 -30 -24 -44 A24 24 0 1 1 24 -44 C24 -30 14 -18 0 0 Z"
                    className={style.pin}
                  />
                  <circle cx="0" cy="-44" r="9" className={style.pin_dot} />
                </g>
              </svg>
              <div className={style.map_card}>
                <strong>Hotel Presidente</strong>
                <span>Blvd. Kukulcán Km 12.5</span>
                <span className={style.map_rating}>
                  4.9 ★★★★★ · 1,200 opiniones
                </span>
              </div>
              <div className={style.map_controls} aria-hidden="true">
                <span>+</span>
                <span>−</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
